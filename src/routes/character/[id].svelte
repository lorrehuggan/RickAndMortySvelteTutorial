<script context="module" lang="ts">
	import type { Character } from '../../types/characters';
	export async function load({ fetch, params }) {
		const id = params.id;
		const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
		const data: Character = await res.json();

		if (data) {
			return {
				props: {
					character: data
				}
			};
		}

		return {
			status: res.status,
			error: new Error('Something went wrong')
		};
	}
</script>

<script lang="ts">
	import type { Episode } from 'src/types/episode';
	import { onMount } from 'svelte';
	import axios from 'axios';
	import EpisodeCard from '$lib/components/episode-card.svelte';
	export let character: Character;
	let episodes: Episode[] | [] = [];

	onMount(async () => {
		axios.all(character.episode.map((url) => axios.get(url))).then(
			axios.spread((...res) => {
				episodes = res.map((r) => r.data);
			})
		);
	});
</script>

<svelte:head>
	<title>{character.name}</title>
</svelte:head>

<section class="mx-auto flex  w-1/2 flex-col items-center justify-center">
	<div class=" mt-3 mb-10 w-full">
		<div>
			<h1 class="mb-4 text-5xl font-bold">{character.name}</h1>
			<a
				href={`${character.location.url.split('api').slice(2)}`}
				class="transition-colors duration-200 hover:text-scooter-700"
			>
				<p class="font-mono text-lg font-bold">{`Loaction: ${character.location.name}`}</p>
			</a>
			<p class="font-mono text-lg">{`Species: ${character.species}`}</p>
			<p class="font-mono text-lg">{`Gender:${character.gender}`}</p>
		</div>
		<img
			src={character.image}
			alt={character.name}
			class="mr-2 mt-4 h-32 w-32 rounded-full border-2 border-neutral-900"
		/>
	</div>
	<div />
	<div class="my-6 w-full font-bold">
		<h3 class="text-xl">{`Episodes Featuring ${character.name}`}</h3>
		<div class="mt-8 grid w-full grid-cols-3 gap-4">
			{#each episodes as episode}
				<EpisodeCard {episode} />
			{:else}
				<p>loading...</p>
			{/each}
		</div>
	</div>
</section>
