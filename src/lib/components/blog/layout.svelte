<script lang="ts" module>
	import { h1, h2, h3, h4, a, p } from '$lib/components/components';
	export { h1, h2, h3, h4, a, p };
</script>

<script lang="ts">
	import * as Tooltip from '$lib/components/ui/tooltip';
	import { Pencil } from 'lucide-svelte';

	let { children, title, date, edited } = $props();

	let originalDate = new Date(date);
	let editedDate = new Date(edited);
</script>

<article>
	<h1 class="text-4xl font-bold">{title}</h1>

	<Tooltip.Root>
		<Tooltip.Trigger disabled={!edited}>
			<div class="flex flex-row align-middle">
				<p class="text-sm text-muted-foreground">
					{originalDate.toLocaleDateString('en-US', {
						month: 'long',
						day: 'numeric',
						year: 'numeric'
					})}
				</p>

				{#if edited}
					<div class="ml-1 flex flex-col justify-center">
						<Pencil class="h-3 w-3 text-muted-foreground" />
					</div>
				{/if}
			</div>
		</Tooltip.Trigger>
		<Tooltip.Content
			>Last edited on {editedDate.toLocaleDateString('en-US', {
				month: 'long',
				day: 'numeric',
				year: 'numeric'
			})}</Tooltip.Content
		>
	</Tooltip.Root>
	<div class="prose py-12">{@render children()}</div>
</article>
