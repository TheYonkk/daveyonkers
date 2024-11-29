<script lang="ts">
	let className = $state('');
	export { className as class };

	let { children } = $props();
</script>

<h1 class={`mb-4 text-4xl font-bold ${className}`}>
	{@render children()}
</h1>
