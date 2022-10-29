<script>
	import Icon from "@iconify/svelte";

	export let feature;
	export let i;

	const { heading, description, daisyColor, image, technologies } = feature;
</script>

<section
	class="grid lg:grid-cols-2 grid-cols-1 lg:grid-rows-1 grid-rows-2 h-160 lg:min-h-screen lg:py-16 py-8"
>
	<div
		class={`col-span-1 bg-center bg-cover bg-no-repeat h-64 md:h-96 lg:h-full rounded-2xl shadow-2xl ${
			i % 2 === 0 ? "lg:order-2" : "lg:order-1"
		}`}
		style="background-image: url({image.url});"
	/>
	<div
		class={`col-span-1 relative h-24 md:h-112 lg:h-full ${
			i % 2 === 0 ? "lg:order-1" : "lg:order-2"
		}`}
	>
		<div
			class={`w-10/12 md:w-144 lg:w-160 h-min md:h-80 lg:h-96 md:-mt-32 lg:mt-0 ${
				i % 2 === 0 ? "lg:ml-16" : "lg:mr-16"
			} p-4 md:p-6 lg:p-8 lg:pl-10 rounded-xl bg-white/90 backdrop-blur-sm absolute top-1/2 ${
				i % 2 === 0 ? "left-1/2" : "right-1/2"
			} -translate-y-1/2 ${
				i % 2 === 0 ? "-translate-x-1/2" : "translate-x-1/2"
			} text-center lg:text-left flex flex-col justify-between shadow-xl text-black`}
		>
			<h2 class={`text-2xl md:text-4xl text-${daisyColor} font-semibold mb-4 md:mb-0`}>
				{heading}
			</h2>
			<p class="lg:text-2xl md:text-xl text-md mb-4 md:mb-0">
				{description}
			</p>
			<div class="flex flex-row justify-center lg:justify-start flex-wrap">
				{#each technologies as { id, name, iconifyCode, color } (id)}
					<div class={`tooltip tooltip-${daisyColor} m-2 lg:mx-0 lg:mr-4`} data-tip={name}>
						<Icon icon={iconifyCode} class="lg:h-12 lg:w-12 md:h-10 md:w-10 h-8 w-8" {color} />
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
