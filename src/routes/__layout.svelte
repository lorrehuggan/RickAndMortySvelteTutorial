<script>
	import '../app.css';
</script>

<nav class="mx-auto flex h-28 w-1/2 items-center justify-between">
	<div class="w-[70px]">
		<a href="/">
			<img src="../../static/img/rick.png" alt="logo" />
		</a>
	</div>
	<ul class="flex w-2/5 items-center justify-between text-xl">
		<li class="cursor-pointer hover:text-slime-500">
			<a href="/"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
					/>
				</svg></a
			>
		</li>
		<a href="/character">
			<li class="cursor-pointer font-black hover:text-scooter-500">character</li>
		</a>
		<a href="/episode">
			<li class="cursor-pointer font-black hover:text-scooter-500">episodes</li>
		</a>
		<a href="/location">
			<li class="cursor-pointer font-black hover:text-scooter-500">locations</li>
		</a>
	</ul>
</nav>

<slot />
