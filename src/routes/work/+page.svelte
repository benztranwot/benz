<script>
	import Card from "$lib/components/Card.svelte";
	import { fly } from "svelte/transition";
	import AnimationWrapper from "$lib/components/AnimationWrapper.svelte";

	export let data;
	const { projects, categories } = data;

	let selectedCategory = categories[0].name;

	$: filteredProjects = projects.filter((project) =>
		project.categories.some((category) => category.name === selectedCategory)
	);

	const tailwindClass = "btn-info btn-success btn-warning btn-error";
</script>

<svelte:head>
	<title>Ben Tran | Frontend Developer & JAMstack Enthusiast | Works</title>
</svelte:head>

<AnimationWrapper>
	<div class="bg-base-200">
		<div class="container mx-auto pt-24 text-center">
			<h1 class="text-5xl text-primary font-semibold mb-12">My creative projects</h1>
			<div class="mb-4 flex justify-center items-center flex-wrap gap-4">
				{#each categories as { id, name, daisyColor, projects } (id)}
					<button
						class={`rounded-full gap-2 btn btn-sm btn-${daisyColor} ${
							selectedCategory === name ? "" : "btn-outline"
						}`}
						on:click={() => (selectedCategory = name)}
					>
						{name}
						<div
							class={`badge border-none ${
								selectedCategory === name ? "bg-base-200 !text-base-content" : ""
							}`}
						>
							{projects.length}
						</div>
					</button>
				{/each}
			</div>
			{#key filteredProjects}
				<div
					class="flex justify-center items-center flex-wrap pb-8"
					in:fly={{ y: 50, duration: 250, delay: 300 }}
					out:fly={{ y: 50, duration: 250 }}
				>
					{#each filteredProjects as project (project.id)}
						<Card {project} />
					{/each}
				</div>
			{/key}
		</div>
	</div>
</AnimationWrapper>
