<script lang="ts">
	import type { Character } from '../../types/characters';
	export let character: Character;
</script>

<div
	class="mb-2 cursor-pointer rounded border-2  border-neutral-600 bg-neutral-200/20 pt-2 shadow-custom transition-all duration-300 ease-out hover:-translate-x-1 hover:-translate-y-2 hover:shadow-customHover"
>
	<div class="px-4">
		<p class="lg text-xl font-bold">
			{`${character.name.substring(0, 15)}${character.name.length > 15 ? '...' : ''}`}
		</p>
		<p class="mb-4 text-sm ">
			{`${character.location.name.substring(0, 23)}${
				character.location.name.length > 24 ? '...' : ''
			}`}
		</p>
		<div class="mb-2 flex justify-between text-sm uppercase">
			<p
				class={`${
					character.gender === 'Male'
						? 'text-scooter-500'
						: character.gender === 'Female'
						? 'text-pink-500'
						: 'text-slime-500'
				} font-black font-mono`}
			>
				{character.gender}
			</p>
			<p class="font-mono">{character.species}</p>
		</div>
	</div>
	<img class="p-2" src={character.image} alt={character.name} />
</div>
