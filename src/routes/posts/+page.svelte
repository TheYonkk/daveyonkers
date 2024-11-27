<script lang="ts">
	import { getPosts } from '$lib/posts';

	let posts = getPosts();
</script>

<svelte:head>
	<title>On My Mind</title>
</svelte:head>

<h1 class="pb-4 text-4xl">On my mind</h1>
<div class="flex flex-col md:flex-row">
	<div class="flex-1 pb-8 md:pb-0 md:pr-16">
		<p class="">I missed the blogging craze.</p>
		<p class="pt-4">
			But, I've aquired <a class="link" href="https://daveyonkers.com">daveyonkers.com</a>, so I
			might as well use it.
		</p>
		<p class="pt-4">
			I've written about my intentions in the the first post, <a
				href="/posts/{posts[posts.length - 1].slug}"
				class="link">{posts[posts.length - 1].title}</a
			>, but
			<span class="font-bold"
				>TL;DR: my promise to you is that none of the content on this site will be AI-generated or
				swamped with ads.</span
			> Those websites suck.
		</p>
	</div>
	<div class="flex flex-col md:items-end">
		{#each posts as post}
			<div class="flex flex-col pb-4 md:items-end">
				<p class="text-sm text-muted-foreground">{post.date.toLocaleDateString()}</p>
				<a href="/posts/{post.slug}" class="link">{post.title}</a>
			</div>
		{/each}
	</div>
</div>
