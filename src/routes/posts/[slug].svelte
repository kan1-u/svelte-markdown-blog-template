<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';
	export const load: Load = async ({ params, fetch }) => {
		const res = await fetch(`${params.slug}.json`);
		if (!res.ok) return { status: 404 };
		const body = await res.json();
		return { props: { body } };
	};
</script>

<script lang="ts">
	import type { Post as PostType } from '$lib/markdown';
	export let body: { post: PostType };

	import Post from '$lib/Post.svelte';

	let { post } = body;
</script>

<Post {post} />
