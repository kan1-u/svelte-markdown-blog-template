<script lang="ts">
	import '../app.css';
	import 'prismjs/themes/prism.min.css';

	import Nav from '$lib/Nav.svelte';
</script>

<svelte:head>
	<script src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.js"></script>
	<script>
		mermaid.initialize({ startOnLoad: true });
	</script>
</svelte:head>

<Nav />

<div class="container mx-auto max-w-screen-lg pt-4">
	<slot />
</div>
