<script lang="ts">
	import image from '$lib/assets/daveyonkers_smol.jpg';
	import Titles from '$lib/components/about/titles.svelte';

	import RiInstagramLine from '$lib/icons/RiInstagramLine.svelte';
	import RiLinkedinFill from '$lib/icons/RiLinkedinFill.svelte';
	import RiTwitterXFill from '$lib/icons/RiTwitterXFill.svelte';

	let things_that_i_am = [
		'Software Engineer',
		'Pizzaiolo',
		'Car Enthusiast',
		'Runner',
		'Moderately-Amateur Chef',
		'GSD (Get **** Done) Specialist',
		'Automotive Networking Guy'
	];
</script>

<svelte:head>
	<title>About Me</title>
</svelte:head>

<div class="mb-16 flex flex-col">
	<div class="flex flex-col align-middle sm:flex-row sm:items-center sm:justify-center">
		<div class="flex items-center justify-center">
			<img
				src={image}
				alt="Dave Yonkers"
				class="bg- h-48 w-48 rounded-full bg-primary-foreground object-cover"
				loading="lazy"
			/>
		</div>
		<div
			class="mt-4 flex flex-1 flex-col items-center sm:ml-8 sm:mt-0 sm:items-start sm:justify-center"
		>
			<h1 class="text-4xl font-bold">Dave Yonkers</h1>
			<Titles titles={things_that_i_am} class="text-2xl" />
			<div class="mt-1 flex flex-row">
				<a href="https://linkedin.com/in/dave-yonkers" target="_blank">
					<RiLinkedinFill class="h-5 w-5" />
				</a>
				<a href="https://x.com/TheYonkk" target="_blank">
					<RiTwitterXFill class="ml-1 h-5 w-5" />
				</a>
				<a href="https://instagram.com/TheYonkk" target="_blank">
					<RiInstagramLine class="ml-1 h-5 w-5" />
				</a>
			</div>
		</div>
	</div>

	<div class="mt-8">
		<p class="prose mt-4">
			I'm a Michigan State grad working for Tesla full-time as a Software Engineer. My day-to-day
			work is mostly centered around validation, automation, and tooling infrastructure for our
			in-house vehicle communications architecture (you may have heard about it during the launch of
			the Cybertruck: <i>Etherloop</i>). Growing up in Michigan, I've always been fascinated by the
			automotive industry, and mobility technology in general—in just over 100 years humankind went
			from horse-drawn carriages to electric cars that drive themselves! Of course, the technology
			itself is fascinating, but the ease of human mobility has unlocked technological innovation
			across <i>all</i> industries.
		</p>
		<p class="prose mt-4">
			I'm currently trying to find some hobbies outside of work, so there's not much to put on this
			page just yet. I do enjoy cooking (and making pizza in my <a
				class="link"
				href="http://rwrd.io/bhq9925?c">Ooni pizza oven</a
			>) and subsequently working out to stay in shape. In college, my sole hobby was participating
			in the Formula SAE team, which is now practically my day job at Tesla, so I'm trying to find
			something else to do outside of work itself. That's why I created this site :)
		</p>
		<p class="prose mt-4">
			Before I joined Tesla, I interned several times with automotive suppliers, mostly <a
				href="https://www.prattmiller.com"
				class="link">Pratt Miller</a
			>
			in the race operations team (<a class="link" href="https://corvetteracing.com"
				>Corvette Racing</a
			>) writing tools and strategy software. I loved this, as I've always been a motorsports fan
			and was actually getting paid to work on race cars. However, I ultimately decided that my
			impact on the world would be greater if I contributed to a consumer product rather than a
			media product. Let's face it—even though motorsport has historically been a proving ground for
			cutting-edge automotive technologies, it is more of a media tool nowadays, and the
			hyper-specialized equipment used to outfit these million-dollar race machines has limited use
			in a production environment (if any). There is probably still quite a bit of bleed-over from
			peripheral motorsport technologies into the tools used to design production vehicles (for
			example: computational fluid dynamics, aerodynamics, vehicle dynamics, heat transfer
			simulation, etc.), and that's not to say that motorsport isn't interesting or important (I'm
			still a fan!), but my career interests lean towards the technologies
			<i>inside of the vehicle</i>, rather than those used to design it.
		</p>
		<p class="prose mt-4">
			I'm not a web developer, nor do I really want to be (I find the most enjoyment when software
			interacts with and manipulates the physical world around us). However, I might build a thing
			or two and link it to this site.
		</p>
	</div>
</div>
