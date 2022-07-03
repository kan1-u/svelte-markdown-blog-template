import { getPost } from '$lib/markdown';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ params }) => {
	const { slug } = params;
	const post = getPost(slug);
	const body = JSON.stringify({ post });

	return { body };
};
