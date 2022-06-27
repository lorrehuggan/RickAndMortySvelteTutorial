<script lang="ts">
	import type { Location } from '../../types/location';
	export let location: Location;
</script>

<a
	href={`location/${location.id}`}
	class="rounded border-2 border-neutral-600 bg-neutral-100 p-2 shadow-custom transition-all duration-300 ease-out hover:-translate-x-1 hover:-translate-y-2 hover:shadow-customHover"
>
	<p class="text-xl font-bold">
		{`${location.name.substring(0, 19)}${location.name.length > 19 ? '...' : ''}`}
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
				d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
			/>
		</svg>
		<p class=" font-mono">{location.type}</p>
	</div>
	<p class="text-xs text-scooter-700">{location.dimension}</p>
</a>
