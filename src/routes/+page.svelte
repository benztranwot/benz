<script>
	import benz from "$lib/assets/benz.jpg";
	import about1 from "$lib/assets/about1.jpg";
	import about2 from "$lib/assets/about2.jpg";

	import Icon from "@iconify/svelte";
	import AnimationWrapper from "$lib/components/AnimationWrapper.svelte";
	import { fly } from "svelte/transition";

	const technologies = [
		{
			icon: "logos:nextjs-icon",
			xStart: 0,
			yStart: 150,
			xEnd: "translate-x-0",
			yEnd: "-translate-y-36 sm:-translate-y-52",
			delay: 100
		},
		{
			icon: "logos:graphql",
			xStart: 105,
			yStart: 105,
			xEnd: "-translate-x-26 sm:-translate-x-36",
			yEnd: "-translate-y-26 sm:-translate-y-36",
			delay: 200
		},
		{
			icon: "logos:contentful",
			xStart: 150,
			yStart: 0,
			xEnd: "-translate-x-36 sm:-translate-x-52",
			yEnd: "-translate-y-0",
			delay: 300
		},
		{
			icon: "logos:gatsby",
			xStart: 105,
			yStart: -105,
			xEnd: "-translate-x-26 sm:-translate-x-36",
			yEnd: "translate-y-26 sm:translate-y-36",
			delay: 400
		},
		{
			icon: "logos:tailwindcss-icon",
			xStart: 0,
			yStart: -150,
			xEnd: "-translate-x-0",
			yEnd: "translate-y-36 sm:translate-y-52",
			delay: 500
		},
		{
			icon: "simple-icons:express",
			xStart: -105,
			yStart: -105,
			xEnd: "translate-x-26 sm:translate-x-36",
			yEnd: "translate-y-26 sm:translate-y-36",
			delay: 600
		},
		{
			icon: "logos:bootstrap",
			xStart: -150,
			yStart: 0,
			xEnd: "translate-x-36 sm:translate-x-52",
			yEnd: "translate-y-0",
			delay: 700
		},
		{
			icon: "logos:svelte-icon",
			xStart: -105,
			yStart: 105,
			xEnd: "translate-x-26 sm:translate-x-36",
			yEnd: "-translate-y-26 sm:-translate-y-36",
			delay: 800
		}
	];

	let animateKey = false;

	setTimeout(function () {
		animateKey = "start";
	}, 300);
</script>

<svelte:head>
	<title>Quan Tran | Frontend Developer & JAMstack Enthusiast | Home</title>
</svelte:head>

<AnimationWrapper>
	<header
		class="h-screen pt-20 md:pt-24 text-center flex flex-col justify-center items-center bg-base-100"
	>
		<h1 class="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mb-2 md:mb-4">
			Hi there, I'm Quan, Web Developer
		</h1>
		<h3 class="md:text-xl lg:text-2xl">Software Engineer | UX/UI Enthusiast | Coffee Aficionado</h3>

		<div class="avatar my-auto relative">
			<div
				class="w-40 md:w-60 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 z-20"
			>
				<img src={benz} alt="Profile" />
			</div>
			{#if animateKey}
				{#each technologies as { icon, xStart, yStart, xEnd, yEnd, delay } (icon)}
					<span
						class="block absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 overflow-visible z-10"
					>
						<span
							class={`block p-2 rounded-full ${xEnd} ${yEnd} cursor-pointer duration-300 hover:scale-110 active:scale-90`}
							in:fly={{ x: xStart, y: yStart, duration: 500, delay }}
						>
							<Icon {icon} class="h-12 w-12 sm:h-14 sm:w-14" />
						</span>
					</span>
				{/each}
			{/if}
		</div>
	</header>
	<div class="py-8 lg:py-16 bg-base-200">
		<section
			class="container mx-auto grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2 p-8 py-8 lg:py-16 gap-4 md:gap-0"
		>
			<div class="flex justify-center items-center row-start-1 md:col-start-1">
				<div
					class="h-64 w-96 text-center md:text-left lg:h-80 lg:w-112 xl:w-128 flex flex-col justify-between items-center md:items-start px-6 md:px-8 py-2 lg:p-8"
				>
					<h2 class="text-3xl md:text-4xl text-secondary font-semibold mb-2">About Me</h2>
					<p class="lg:text-xl">
						I have 2 years of experience developing various types of websites. My favorite are
						JAMstack apps where blazing fast loading static sites are controlled by a Headless CMS.
					</p>
					<a
						href="/expertise"
						class="btn btn-ghost btn-sm h-10 text-secondary gap-2 px-1 rounded-none hover:bg-secondary hover:text-secondary-content border-none hover:shadow-xl"
						>My Skills<Icon icon="akar-icons:arrow-right" class="h-4 w-4" /></a
					>
				</div>
			</div>
			<div class="flex justify-center items-center row-start2 md:row-start-1 md:col-start-2">
				<figure
					class="h-60 w-80 lg:h-80 lg:w-112 xl:w-128 bg-center bg-cover bg-no-repeat rounded-xl shadow-lg"
					style="background-image: url({about1});"
				/>
			</div>
		</section>
		<section
			class="container mx-auto grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2 p-8 py-8 lg:py-16 gap-4 md:gap-0"
		>
			<div class="flex justify-center items-center row-start2 md:row-start-1 md:col-start-1">
				<figure
					class="h-60 w-80 lg:h-80 lg:w-112 xl:w-128 bg-center bg-cover bg-no-repeat rounded-xl shadow-lg"
					style="background-image: url({about2});"
				/>
			</div>
			<div class="flex justify-center items-center row-start-1 md:col-start-2">
				<div
					class="h-64 w-96 text-center md:text-left lg:h-80 lg:w-112 xl:w-128 flex flex-col justify-between items-center md:items-start px-6 md:px-8 py-2 lg:p-8"
				>
					<h2 class="text-3xl md:text-4xl text-accent font-semibold mb-2">My Goals</h2>
					<p class="lg:text-xl">
						My goal is to always create user-friendly, reliable, and high performance products. I
						stand for quality and enjoy spending time fixing little details, optimizing web apps.
					</p>
					<a
						href="/work"
						class="btn btn-ghost btn-sm h-10 text-accent gap-2 px-1 rounded-none hover:bg-accent hover:text-accent-content border-none hover:shadow-xl"
						>My works<Icon icon="akar-icons:arrow-right" class="h-4 w-4" /></a
					>
				</div>
			</div>
		</section>
	</div>
</AnimationWrapper>
