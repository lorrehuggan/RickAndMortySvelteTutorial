<script context="module" lang="ts">
	import type { Episode, Result, Info } from '../../types/episode';
	export async function load({ fetch }) {
		const res = await fetch('https://rickandmortyapi.com/api/episode');
		const data: Result = await res.json();
		const info: Info = data.info;

		if (data) {
			return {
				props: {
					episodes: data.results,
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
	import axios from 'axios';
	import EpisodeCard from '$lib/components/episode-card.svelte';
	export let info: Info;
	export let episodes: Episode[] | [] = [];

	Array(info.pages)
		.fill(0)
		.map((_, i) => i + 1)
		.forEach(async (page) => {
			const res = await axios.get(`https://rickandmortyapi.com/api/episode?page=${page}`);
			const data: Result = res.data;

			if (data) {
				episodes = [...episodes, ...data.results];
			}
		});
</script>

<svelte:head>
	<title>Rick and Morty</title>
</svelte:head>

<section class="mx-auto my-auto grid w-2/3 grid-cols-3 gap-4">
	{#each episodes as episode}
		<EpisodeCard {episode} />
	{/each}
</section>
