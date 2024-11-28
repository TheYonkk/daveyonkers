<script lang="ts">
	let className = $state('');
	export { className as class };

	let { children } = $props();
</script>

<p class={`mb-2 last:mb-6 ${className}`}>
	{@render children()}
</p>
