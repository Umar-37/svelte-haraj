
<script lang="ts">
    import { fade } from "svelte/transition";
    export let card;
    let url='https://thumbcdn.haraj.com.sa//170x170/webp'
</script>
<a class="card" href={`/pokemon/${card.id}`} transition:fade>
<img src={`https://thumbcdn.haraj.com.sa/${card.thumbURL}/170x170/webp`} alt={card.name}>
<h2>{card.id}. {card.title}</h2>
</a>
<style>
.card{
    @apply p-6 bg-gray-100 text-gray-800 text-center;
    @apply rounded-md shadow-sm ;
    @apply flex flex-col items-center;
}
img{
    @apply h-40 w-40;
}
</style>