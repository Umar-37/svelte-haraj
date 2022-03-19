<script lang="ts">
	export let name: string;
</script>

<main>
	<h1 class="bg-yellow-200" >Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>


<style global lang="postcss">
	h1{
		@apply bg-indigo-500;
		@apply bg-red-500;
		@apply bg-green-500;
		@apply text-center;
	}
</style>