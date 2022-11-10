<script>
	import Features from "$lib/components/Features.svelte";
	import AnimationWrapper from "$lib/components/AnimationWrapper.svelte";

	export let data;
	const { features } = data;

	const tailwindClass = "text-info text-success text-warning text-error";
</script>

<svelte:head>
	<title>Ben Tran | Frontend Developer & JAMstack Enthusiast | Skills</title>
</svelte:head>

<AnimationWrapper>
	<div class="bg-base-200">
		<div class="container mx-auto pt-24 pb-16 text-center px-4 md:px-8 2xl:max-w-7xl">
			<h1 class="text-5xl text-primary font-semibold pb-8 md:pb-16 lg:pb-0">Expertise</h1>
			{#each features as feature, i (feature.id)}
				<Features {feature} {i} />
			{/each}
			<a href="/contact" class="btn btn-primary btn-outline rounded-full">Contact Me</a>
		</div>
	</div>
</AnimationWrapper>
