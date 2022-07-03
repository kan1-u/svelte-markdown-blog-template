<script lang="ts" context="module">
	import { base } from '$app/paths';
	import type { Load } from '@sveltejs/kit';
	export const load: Load = async ({ fetch }) => {
		const res = await fetch(`${base}/.json`);
		if (!res.ok) return { status: 404 };
		const body = await res.json();
		return { props: { body } };
	};
</script>

<script lang="ts">
	import type { PostMetadata } from '$lib/markdown';
	export let body: { posts: PostMetadata[] };

	import PostCard from '$lib/PostCard.svelte';

	let { posts } = body;
</script>

<h1 class="text-3xl font-bold underline">Blog</h1>

<div class="m-8 flex flex-col items-stretch space-y-4">
	{#each posts as post}
		<PostCard {post} />
	{/each}
</div>
