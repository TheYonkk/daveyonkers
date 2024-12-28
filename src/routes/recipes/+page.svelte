<script lang="ts">
	import { getPosts } from '$lib/posts';
	import Mailchimp from '$lib/components/posts/mailchimp.svelte';
	let posts = getPosts('recipes');
</script>

<svelte:head>
	<title>Recipes</title>
</svelte:head>

<h1 class="pb-4 text-4xl">Recipes</h1>
<div class="flex flex-col">
	<div class="flex-1 pb-8">
		<div class="flex flex-col">
			<p class="">
				Internet recipe sites suck. They're littered with advertisements and waste your time with
				meaningless Chat-GPT fluff to prolong your page view time (so they can show you <span
					class="italic">even more</span
				> ads!). Not here.
			</p>
			<p class="pt-4">
				Simple, no frills, midwestern classics shared from my family to yours. Enjoy.
			</p>
		</div>
	</div>
	<div class="mt-2 flex flex-col">
		{#each posts as post}
			<div class="flex flex-col pb-4">
				<p class="text-sm text-muted-foreground">{post.date.toLocaleDateString()}</p>
				<a href="/recipes/{post.slug}" class="link">{post.title}</a>
			</div>
		{/each}
	</div>
</div>
