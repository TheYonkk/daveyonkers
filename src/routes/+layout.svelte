<script lang="ts">
	import { ModeWatcher } from 'mode-watcher';
	import LightDarkToggle from '$lib/components/LightDarkToggle.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<ModeWatcher defaultMode="light" />
<div class="mx-auto w-full max-w-screen-lg px-6">
	<nav class="flex flex-wrap justify-between py-4">
		<div class="flex flex-col justify-center">
			<span class="text-xl font-semibold"><a href="/">Dave Yonkers</a></span>
		</div>

		<div class="flex flex-row">
			<div class="flex flex-col justify-center">
				<a class="ml-4" href="/about">About</a>
			</div>
			<div class="flex flex-col justify-center">
				<a class="ml-4" href="/posts">Posts</a>
			</div>
			<div class="ml-4 flex">
				<LightDarkToggle />
			</div>
		</div>
	</nav>

	<div class="mt-8 sm:mt-24">
		{@render children()}
	</div>
</div>
