<script lang="ts">
	import readme from '../../README.md?raw';
	import Markdown from '$lib/Markdown.svelte';
	import { markdownToHtml } from '$lib/markdown';
</script>

<h1 class="text-3xl font-bold underline">About</h1>

<div class="m-8">
	<Markdown html={markdownToHtml(readme)} />
</div>
