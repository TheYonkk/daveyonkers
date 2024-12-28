<script lang="ts" module>
	import { ArrowLeft } from 'lucide-svelte';
	import { h1, h2, h3, h4, a, p } from '$lib/components/posts/components';
	export { h1, h2, h3, h4, a, p };
</script>

<script lang="ts">
	import * as Tooltip from '$lib/components/ui/tooltip';
	import { Pencil } from 'lucide-svelte';

	let { children, title, date, edited } = $props();

	let originalDate = new Date(date);
	let editedDate = new Date(edited);
</script>

<div class="flex flex-grow flex-col">
	<article>
		<h1 class="text-4xl font-bold">{title}</h1>

		<Tooltip.Provider>
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
		</Tooltip.Provider>
		<div class="prose py-12">{@render children()}</div>
	</article>

	<div class="mb-12 flex flex-initial flex-row">
		<a
			href="/posts"
			class="flex flex-row items-center gap-2 text-muted-foreground hover:text-foreground"
		>
			<ArrowLeft class="h-4 w-4" />
			<span>All recipes</span>
		</a>
	</div>
</div>
