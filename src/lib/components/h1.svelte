<script lang="ts">
	let className = $state('');
	export { className as class };

	let { children } = $props();
</script>

<h1 class={`text-4xl font-bold mb-4 ${className}`}>
	{@render children()}
</h1>
