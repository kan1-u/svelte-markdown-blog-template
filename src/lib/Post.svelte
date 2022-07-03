<script lang="ts">
	import type { Post } from '$lib/markdown';
	export let post: Post;

	import Markdown from '$lib/Markdown.svelte';

	let { metadata, html } = post;
	let { title, author, date } = metadata;
</script>

<h1 class="text-3xl font-bold underline">{title}</h1>

<div class="my-4 flex space-x-4">
	<p class="text-lg font-medium text-gray-700">{author}</p>
	<p class="text-lg font-normal text-gray-700">{date}</p>
</div>

<div class="m-8">
	<Markdown {html} />
</div>
