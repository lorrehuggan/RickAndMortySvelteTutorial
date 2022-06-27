<script lang="ts">
	import type { Character, Result } from '../../types/characters';
	export let character: Character;
</script>

<div class=" flex flex-col items-center justify-center">
	<a href={`${character.url.split('api').slice(2)}`}>
		<img
			src={character.image}
			alt=""
			class="h-20 w-20 rounded-full border-2 border-neutral-700 shadow-custom transition-all duration-200 hover:-translate-x-2 hover:-translate-y-2  hover:border-scooter-600 hover:shadow-customHover "
		/>
	</a>
	<p class="mt-2 text-center text-base font-bold">
		{`${character.name.substring(0, 10)}${character.name.length > 10 ? '...' : ''}`}
	</p>
	<p
		class={`font-mono ${
			character.gender === 'Male'
				? 'text-scooter-600'
				: character.gender === 'Female'
				? 'text-pink-400'
				: 'text-green-700'
		}`}
	>
		{character.gender}
	</p>
</div>
