<script lang="ts">
import { each, loop_guard } from "svelte/internal";

	export let name: string;
	import { fetchAds } from "./Haraj";
	import Card from "./card.svelte";

	let promise=fetchAds();
</script>

<main>
	<h1 class="bg-yellow-200" >Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	{console.log(fetchAds())}

	{#await promise}
		<p>pending....</p>
	{:then posts}
		{console.log(posts)}
		<div class="container">
		{#each posts as post}
		<Card card={post} />	
		{/each}
		</div>
	{:catch error}
		{console.log(error)}
		{/await}
</main>


<style global lang="postcss">
	h1{
		@apply bg-indigo-500;
		@apply bg-red-500;
		@apply bg-green-500;
		@apply text-center;
	}
	.container{
        @apply mx-auto py-2 grid gap-4 md:grid-cols-3 grid-cols-2;
    }
</style>