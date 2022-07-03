import fs from 'fs';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkFrontmatter from 'remark-frontmatter';
import remark2rehype from 'remark-rehype';
import rehypePrism from 'rehype-prism';
import rehypeMathjax from 'rehype-mathjax';
import rehypeStringify from 'rehype-stringify';
import yaml from 'js-yaml';
import dayjs from 'dayjs';
import type { Compatible } from 'vfile';
import type { Root } from 'mdast';

import 'prismjs/components/prism-rust.js';
import 'prismjs/components/prism-python.js';
import 'prismjs/components/prism-yaml.js';
import 'prismjs/components/prism-toml.js';

const parser = unified()
	.use(remarkParse)
	.use(remarkGfm)
	.use(remarkMath)
	.use(remarkFrontmatter, ['yaml']);
const runner = unified()
	.use(remark2rehype)
	.use(rehypePrism)
	.use(rehypeMathjax)
	.use(rehypeStringify);

export type Metadata = {
	title: string;
	author: string;
	date: string;
	description: string;
};

export type Post = {
	metadata: Metadata;
	html: string;
};

export type PostMetadata = {
	slug: string;
	metadata: Metadata;
};

export function markdownToHtml(markdown: Compatible | undefined) {
	const tree = parser.parse(markdown);
	const root = runner.runSync(tree);
	return runner.stringify(root);
}

function getMetadata(tree: Root) {
	const top = tree.children.at(0);
	if (top?.type === 'yaml') {
		const metadata = yaml.load(top.value) as Metadata;
		metadata.date = dayjs(metadata.date).format('YYYY-MM-DD');
		return metadata;
	}
}

function markdownToPost(markdown: Compatible | undefined): Post | undefined {
	const tree = parser.parse(markdown);
	const metadata = getMetadata(tree);
	if (metadata) {
		tree.children = tree.children.slice(1);
		const root = runner.runSync(tree);
		const html = runner.stringify(root);
		return { metadata, html };
	}
}

export function getPost(slug: string) {
	const markdown = fs.readFileSync(`contents/${slug}.md`);
	if (markdown) {
		return markdownToPost(markdown);
	}
}

function getPostMetadata(slug: string): PostMetadata | undefined {
	const markdown = fs.readFileSync(`contents/${slug}.md`);
	if (markdown) {
		const metadata = getMetadata(parser.parse(markdown));
		if (metadata) {
			return { slug, metadata };
		}
	}
}

export function getPostMetadatas(): PostMetadata[] {
	const posts = fs
		.readdirSync(`contents`)
		.map((f) => f.match(/(.*)\.md/)?.[1])
		.filter((f) => f !== undefined)
		.map((slug) => getPostMetadata(slug as string))
		.filter((post) => post !== undefined) as PostMetadata[];
	posts.sort((a, b) =>
		dayjs(a.metadata.date, 'YYYY-MM-DD').isAfter(dayjs(b.metadata.date, 'YYYY-MM-DD')) ? -1 : 1
	);
	return posts;
}
