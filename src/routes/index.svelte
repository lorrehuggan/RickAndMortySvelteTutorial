<script context="module" lang="ts">
</script>

<script lang="ts">
	import { fade } from 'svelte/transition';
</script>

<svelte:head>
	<title>Rick and Morty</title>
</svelte:head>

<section
	in:fade
	out:fade
	class="mx-auto flex h-[calc(100vh-7rem)] w-1/2 flex-col items-center justify-center"
>
	<div class="flex w-1/2 flex-col items-center justify-center">
		<img src="../../static/img/Rick_and_Morty.png" alt="logo" class="" />
	</div>
	<div class="mt-10 flex w-full items-center justify-center">
		<ul class="flex w-1/2 justify-between">
			<li>
				<a href="/character">
					<p
						class="font-mono text-xl font-bold uppercase transition-colors duration-300 hover:text-scooter-700"
					>
						Characters
					</p>
				</a>
			</li>
			<li>
				<a href="/episode">
					<p
						class="font-mono text-xl font-bold uppercase transition-colors duration-300 hover:text-scooter-700"
					>
						Episodes
					</p>
				</a>
			</li>
			<li>
				<a href="/location">
					<p
						class="font-mono text-xl font-bold uppercase transition-colors duration-300 hover:text-scooter-700"
					>
						Locations
					</p>
				</a>
			</li>
		</ul>
	</div>
	<div class="mt-32">
		<p class="text-sm font-bold leading-loose">
			Rick and Morty is a comic series published by Oni Press, based on the TV series and written by
			Zac Gorman. Each issue includes a main story (usually unnamed) as well as a back-up comic. The
			first two volumes of the comic series comic stars a Rick and Morty from an alternate dimension
			than their TV counterparts (Dimension C-132), in order to remove worries about continuity with
			the original show and to give more free reign to the writers. From the third volume onward,
			the series switched focus to portraying the off-screen adventures of the Rick and Morty of the
			television series, with the events of certain episodes from the series being directly
			referenced and the events of comic arc noahs ark "A Tale of Two Jerries" being alluded to in
			Tales From the Citadel with a reference to Doofus Jerry.
		</p>
	</div>
</section>
