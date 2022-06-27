<script lang="ts">
	import type { Episode } from '../../types/episode';
	export let episode: Episode;
</script>

<a
	href={`/episode/${episode.id}`}
	class="rounded border-2 border-neutral-600 bg-neutral-100 p-2 shadow-custom transition-all duration-300 ease-out hover:-translate-x-1 hover:-translate-y-2 hover:shadow-customHover"
>
	<p class="text-xl font-bold">
		{`${episode.name.substring(0, 23)}${episode.name.length > 24 ? '...' : ''}`}
	</p>
	<div class="flex w-full items-center ">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="mr-2 h-4 w-4"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			stroke-width="2"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
			/>
		</svg>
		<p class=" font-mono">{episode.episode}</p>
	</div>
	<p class="text-xs text-scooter-700">{episode.air_date}</p>
</a>
