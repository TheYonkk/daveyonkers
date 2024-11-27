<script lang="ts">
	import { onDestroy } from 'svelte';
	import typewriter from '$lib/transitions/typewriter';

	let { titles, class: className }: { titles: string[]; class?: string } = $props();

	let current_title = $state(titles[0]);

	let timeout = setInterval(() => {
		current_title = titles[(titles.indexOf(current_title) + 1) % titles.length];
	}, 30_000);

	onDestroy(() => {
		clearTimeout(timeout);
	});

	// https://svelte.dev/tutorial/svelte/custom-js-transitions
</script>

{#key current_title}
	<p class={className} in:typewriter={{ speed: 2 }}>{current_title}</p>
{/key}
