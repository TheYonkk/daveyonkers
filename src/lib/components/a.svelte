<script lang="ts">
	let className = $state('');
	export { className as class };

	let { children, href } = $props();
</script>

<a class={`link ${className}`} {href}>
	{@render children()}
</a>
