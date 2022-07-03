<script lang="ts">
	import { base } from '$app/paths';
	import type { PostMetadata } from '$lib/markdown';
	export let post: PostMetadata;

	let { slug, metadata } = post;
	let { title, author, date, description } = metadata;
</script>

<a
	href="{base}/posts/{slug}"
	class="block rounded-lg border border-gray-200 bg-white p-6 shadow-md hover:bg-gray-100"
>
	<p class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</p>
	<div class="flex space-x-4">
		<p class="font-medium text-gray-700">{author}</p>
		<p class="font-normal text-gray-700">{date}</p>
	</div>
	<p class="font-normal text-gray-700">{description}</p>
</a>
