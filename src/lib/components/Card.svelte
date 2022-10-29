<script>
	import Icon from "@iconify/svelte";

	export let project;
	const { name, description, projectCode, projectLink, technologies, featuredImage } = project;
</script>

<div
	class="h-112 card card-compact w-80 bg-base-100 text-base-content m-8 shadow-xl duration-300 hover:shadow-2xl"
>
	<figure class="px-4 pt-4"><img src={featuredImage.url} alt={name} class="rounded-xl" /></figure>
	<div class="card-body items-center text-center h-72">
		<h2 class="card-title text-2xl">{name}</h2>
		<p class="h-16">{description}</p>
		<div class="mb-4">
			{#each technologies as { id, name, iconifyCode, color } (id)}
				<div class="tooltip tooltip-success mx-2" data-tip={name}>
					<Icon icon={iconifyCode} class="h-10 w-10" {color} />
				</div>
			{/each}
		</div>
		<div class="card-actions justify-end mb-2 gap-4">
			{#if projectLink}
				<a href={projectLink} target="_blank" rel="noreferrer" class="btn btn-info gap-2 px-3"
					><Icon icon="akar-icons:eye" class="h-6 w-6" />View Live</a
				>
			{/if}
			<a
				href={projectCode}
				target="_blank"
				rel="noreferrer"
				class="btn btn-outline btn-warning gap-2 px-3"
				><Icon icon="akar-icons:github-fill" class="h-6 w-6" />View Code</a
			>
		</div>
	</div>
</div>
