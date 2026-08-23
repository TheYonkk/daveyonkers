<script lang="ts">
	// import RiLinkedinFill from '$lib/icons/RiLinkedinFill.svelte';
	import RiTwitterXFill from '$lib/icons/RiTwitterXFill.svelte';
</script>

<svelte:head>
	<title>Dave Yonkers</title>
	<meta name="description" content="Dave Yonkers" />
	<meta name="theme-color" content="#000000" />
</svelte:head>

<main>
	<section class="hero" aria-label="Dave Yonkers">
		<video autoplay loop muted playsinline preload="auto" aria-hidden="true">
			<source media="(max-width: 767px)" src="/video/landing-mobile.webm" type="video/webm" />
			<source media="(max-width: 767px)" src="/video/landing-mobile.mp4" type="video/mp4" />
			<source media="(min-width: 768px)" src="/video/landing.webm" type="video/webm" />
			<source media="(min-width: 768px)" src="/video/landing.mp4" type="video/mp4" />
		</video>
	</section>

	<section class="introduction">
		<div class="introduction__content">
			<h1>Hi, I'm Dave.</h1>
			<p>I'm a Midwesterner in Palo Alto, California, and I'm working on some cool things.</p>
			<nav class="social-links" aria-label="Social links">
				<a href="https://x.com/TheYonkk" target="_blank" rel="noreferrer" aria-label="X">
					<RiTwitterXFill aria-hidden="true" />
				</a>
				<!-- <a
					href="https://www.linkedin.com/in/dave-yonkers"
					target="_blank"
					rel="noreferrer"
					aria-label="LinkedIn"
				>
					<RiLinkedinFill aria-hidden="true" />
				</a> -->
			</nav>
		</div>
	</section>
</main>

<style>
	:global(html),
	:global(body) {
		width: 100%;
		min-height: 100%;
		margin: 0;
		background: #40381d;
	}

	:global(body) {
		overflow-x: hidden;
	}

	main {
		/* Adjust this value to move the crop vertically: 100% is bottom-locked. */
		--video-focus-y: 91%;
	}

	.hero,
	.introduction {
		width: 100vw;
		height: 100vh;
		/* Keep the sections stable while Safari's glass controls expand or collapse. */
		height: 100lvh;
		overflow: hidden;
	}

	.hero {
		/* Sampled from the lower edge of the video to make the transition disappear. */
		background: #40381d;
	}

	video {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center var(--video-focus-y);
	}

	.introduction {
		display: grid;
		place-items: center;
		box-sizing: border-box;
		padding: 1.5rem;
		color: #f8f4ec;
	}

	.introduction__content {
		display: grid;
		justify-items: center;
		gap: 1.25rem;
		text-align: center;
	}

	h1 {
		margin: 0;
		font-family: ui-serif, Georgia, Cambria, 'Times New Roman', serif;
		font-size: clamp(2rem, 6vw, 4.5rem);
		font-weight: 700;
		line-height: 0.98;
		letter-spacing: -0.04em;
	}

	p {
		max-width: 34ch;
		margin: 0;
		font-family: ui-serif, Georgia, Cambria, 'Times New Roman', serif;
		font-size: clamp(1.05rem, 2.5vw, 1.35rem);
		line-height: 1.4;
		letter-spacing: -0.01em;
		opacity: 0.88;
	}

	.social-links {
		display: flex;
		justify-content: center;
		gap: 0.75rem;
		margin-top: 0.25rem;
	}

	.social-links a {
		display: grid;
		width: 2.75rem;
		height: 2.75rem;
		place-items: center;
		color: inherit;
		font-size: 1.5rem;
		line-height: 1;
		text-decoration: none;
		transition:
			opacity 150ms ease,
			transform 150ms ease;
	}

	.social-links a:hover,
	.social-links a:focus-visible {
		opacity: 0.65;
		transform: translateY(-2px);
	}
</style>
