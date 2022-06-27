<script context="module" lang="ts">
	import type { Result, Location } from '../../types/location';
	export async function load({ fetch, params }) {
		const id = params.id;
		const res = await fetch(`https://rickandmortyapi.com/api/location/${id}`);
		const data: Result = await res.json();

		if (data) {
			return {
				props: {
					location: data
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
	export let location: Location;
	let residents: Character[] | [] = [];
	onMount(async () => {
		axios
			.all(location.residents.map((url) => axios.get(url)))

			.then(
				axios.spread((...res) => {
					residents = res.map((r) => r.data);
					console.log(residents);
				})
			);
	});
</script>

<svelte:head>
	<title>{location.name}</title>
</svelte:head>

<section class="mx-auto flex  w-1/2 flex-col items-center justify-center">
	<div class="my-3  w-full">
		<div>
			<h1 class="mb-4 text-5xl font-bold">{location.name}</h1>
			<p class="font-mono text-lg">{`Location: ${location.dimension}`}</p>
			<p class="font-mono text-lg">{`Type: ${location.type}`}</p>
		</div>
	</div>
	<div />
	<div class="my-6 w-full font-bold">
		<h1 class="text-xl">{`${location.name} Residents`}</h1>
	</div>
	<div class="mt-4 grid w-full grid-cols-8 gap-4">
		{#each residents as resident}
			<CharacterIcon character={resident} />
		{:else}
			{#if residents.length === 0}
				<p class="text-lg col-span-3 font-bold">Nothing to see here this place is empty</p>
			{:else}
				<p>Loading</p>
			{/if}
		{/each}
	</div>
</section>
