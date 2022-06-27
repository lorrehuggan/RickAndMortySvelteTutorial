<script context="module" lang="ts">
	import type { Result, Episode } from '../../types/episode';
	export async function load({ fetch, params }) {
		const id = params.id;
		const res = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
		const data: Result = await res.json();

		if (data) {
			return {
				props: {
					episode: data
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
	import { onMount } from 'svelte';
	import axios from 'axios';
	import type { Character } from 'src/types/characters';
	import CharacterIcon from '$lib/components/character-icon.svelte';
	export let episode: Episode;
	let characters: Character[] | [] = [];
	onMount(async () => {
		axios
			.all(episode.characters.map((url) => axios.get(url)))

			.then(
				axios.spread((...res) => {
					characters = res.map((r) => r.data);
				})
			);
	});
</script>

<svelte:head>
	<title>{episode.name}</title>
</svelte:head>

<section class="mx-auto flex  w-1/2 flex-col items-center justify-center">
	<div class="my-3 w-full">
		<div>
			<h1 class="mb-4 text-5xl font-bold">{episode.name}</h1>
			<p class="font-mono text-lg">{`Episode: ${episode.episode}`}</p>
			<p class="font-mono text-lg">{`Aired: ${episode.air_date}`}</p>
		</div>
	</div>
	<div />
	<div class="my-6 w-full font-bold">
		<h1 class="text-xl">{`${episode.name} Cast`}</h1>
	</div>
	<div class="mt-4 grid w-full grid-cols-8 gap-4">
		{#each characters as character}
			<CharacterIcon {character} />
		{:else}
			<p>loading</p>
		{/each}
	</div>
</section>
