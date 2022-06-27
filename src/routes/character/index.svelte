<script context="module" lang="ts">
	import type { Character, Result, Info } from '../../types/characters';
	export async function load({ fetch }) {
		const res = await fetch('https://rickandmortyapi.com/api/character');
		const data: Result = await res.json();
		const info: Info = data.info;
		console.log(data);

		if (data) {
			return {
				props: {
					characters: data.results,
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
	import { fade } from 'svelte/transition';
	import CharacterIcon from '$lib/components/character-icon.svelte';
	export let info: Info;
	export let characters: Character[] | [] = [];

	Array(info.pages)
		.fill(0)
		.map((_, i) => i + 1)
		.slice(0, 10)
		.forEach(async (page) => {
			const res = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`);
			const data: Result = res.data;

			if (data) {
				characters = [...characters, ...data.results];
			}
		});
</script>

<svelte:head>
	<title>Rick and Morty</title>
</svelte:head>
<section class="mx-auto mt-8 w-2/3">
	<h1 class="mb-8 font-mono text-4xl font-bold">Main Characters</h1>
	<div in:fade out:fade class=" grid w-full grid-cols-8 gap-4 ">
		{#each characters as character}
			<a href={`character/${character.id}`}>
				<CharacterIcon {character} />
			</a>
		{/each}
	</div>
</section>
