<script lang="ts">
	let className = $state('');
	export { className as class };

	let { children } = $props();
</script>

<h2 class="{`mb-4 mt-6 text-2xl font-bold ${className}`}}">
	{@render children()}}
</h2>
