<script>
	import { base } from '$app/paths';
</script>

<nav class="flex space-x-4 bg-slate-50 py-2 sm:justify-center">
	{#each [['Home', ''], ['About', 'about']] as [title, url]}
		<a
			href="{base}/{url}"
			class="rounded-lg px-3 py-2 text-center text-2xl font-medium underline hover:bg-slate-100 md:w-48 md:min-w-fit"
		>
			{title}
		</a>
	{/each}
</nav>
