<script context="module" lang="ts">
	import type { Location, Result, Info } from '../../types/location';
	export async function load({ fetch }) {
		const res = await fetch('https://rickandmortyapi.com/api/location');
		const data: Result = await res.json();
		const info: Info = data.info;

		if (data) {
			return {
				props: {
					locations: data.results,
					info
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
	import LocationCard from '$lib/components/location-card.svelte';
	import axios from 'axios';
	export let locations: Location[] | [] = [];
	export let info: Info;

	Array(info.pages)
		.fill(0)
		.map((_, i) => i + 1)
		.forEach(async (page) => {
			const res = await axios.get(`https://rickandmortyapi.com/api/location?page=${page}`);
			const data: Result = res.data;

			if (data) {
				locations = [...locations, ...data.results];
			}
		});
</script>

<svelte:head>
	<title>Rick and Morty</title>
</svelte:head>

<section class="mx-auto grid w-2/3 grid-cols-3 gap-4">
	{#each locations as location}
		<LocationCard {location} />
	{/each}
</section>
