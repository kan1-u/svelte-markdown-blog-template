import { getPostMetadatas } from '$lib/markdown';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async () => {
	const posts = getPostMetadatas();
	const body = JSON.stringify({ posts });

	return { body };
};
