<script>
	export let html = '';

	import { onMount } from 'svelte';
	// eslint-disable-next-line no-undef
	onMount(async () => mermaid?.init('.language-mermaid'));
</script>

<article
	class="prose prose-slate max-w-none prose-code:text-slate-500 prose-pre:bg-slate-100 md:prose-lg"
>
	{@html html}
</article>
