<script>
	import contact from "$lib/assets/contact.jpg";
	import Icon from "@iconify/svelte";
	import AnimationWrapper from "$lib/components/AnimationWrapper.svelte";

	let submitted = false;

	function handleSubmit(e) {
		const formElement = document.querySelector("#contact-form");
		const formData = new FormData(formElement);

		fetch("https://formsubmit.co/b002e75ae80d18132df801848c511742", {
			method: "POST",
			body: formData
		});

		submitted = true;

		return false;
	}
</script>

<svelte:head>
	<title>Quan Tran | Frontend Developer & JAMstack Enthusiast | Contact</title>
</svelte:head>

<AnimationWrapper>
	<div style="background-image: url({contact});" class="hero min-h-screen">
		<div class="hero-overlay bg-black/60" />
		<div
			class="hero-content text-center text-neutral-content container pt-16 grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 mt-4 sm:mt-16 lg:mt-0"
		>
			<div
				class="lg:h-full lg:w-full flex justify-center items-center row-start-1 row-span-1 col-start-1 col-span-1 lg:col-start-2"
			>
				<form
					class="lg:h-144 w-112 rounded-xl bg-white/90 backdrop-blur-sm p-8 lg:pt-8"
					id="contact-form"
					on:submit|preventDefault={handleSubmit}
				>
					<h2 class="text-3xl sm:text-4xl text-primary font-semibold mb-4 lg:mb-8">Contact Me</h2>
					<div class="form-control w-full max-w-xs mb-2 lg:mb-4 mx-auto">
						<label class="label py-1" for="username">
							<span class="label-text text-primary">Your Name</span>
						</label>
						<input
							type="text"
							placeholder="James P. Sullivan"
							name="username"
							id="username"
							class="input input-ghost w-full text-black rounded-none border-0 border-b-2 focus:outline-none focus:border-primary focus:text-black duration-300"
							required
						/>
					</div>
					<div class="form-control w-full max-w-xs mb-2 lg:mb-4 mx-auto">
						<label class="label py-1" for="email">
							<span class="label-text text-primary">Your Email</span>
						</label>
						<input
							type="email"
							placeholder="james42@gmail.com"
							name="email"
							id="email"
							class="input input-ghost w-full text-black rounded-none border-0 border-b-2 focus:outline-none focus:border-primary focus:text-black duration-300"
							required
						/>
					</div>
					<div class="form-control w-full max-w-xs mb-8 lg:mb-10 mx-auto">
						<label class="label py-1" for="message">
							<span class="label-text text-primary">Message</span>
						</label>
						<textarea
							placeholder="Message"
							name="message"
							id="message"
							class="textarea textarea-ghost w-full h-32 text-black rounded-none border-0 border-b-2 focus:outline-none focus:border-primary focus:text-black duration-300"
							required
						/>
					</div>
					<input type="hidden" name="_captcha" value="false" />
					{#if !submitted}
						<button type="submit" class="btn btn-primary">Send Message</button>
					{:else}
						<div class="alert alert-success shadow-lg w-full max-w-xs mx-auto">
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="stroke-current flex-shrink-0 h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									><path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
									/></svg
								>
								<span>Your message has been sent!</span>
							</div>
						</div>
					{/if}
				</form>
			</div>
			<div
				class="lg:h-full lg:w-full flex justify-center items-center row-start-2 row-span-1 col-start-1 col-span-1 lg:row-start-1 lg:col-start-1"
			>
				<div
					class="w-128 lg:h-144 lg:w-144 p-4 text-center lg:text-left flex flex-col justify-center items-center lg:items-start"
				>
					<h2 class="text-4xl sm:text-5xl font-semibold mb-8 text-white">Get in Touch</h2>
					<p class="text-xl text-white mb-4">
						I'm always interested in any freelance opportunities. If you want to drop me a message,
						don't hesitate to use the form.
					</p>
					<p class="text-xl text-white mb-6">
						You can also reach out to me at places mentioned below. I will get back to you as soon
						as possible.
					</p>
					<div class="flex flex-row justify-center items-center gap-2">
						<div class="tooltip" data-tip="minhquantran451@gmail.com">
							<a href="mailto:minhquantran451@gmail.com" class="btn btn-ghost btn-square h-14 w-14">
								<Icon icon="ant-design:mail-outlined" class="h-10 w-10 text-white" />
							</a>
						</div>
						<div class="tooltip" data-tip="Github">
							<a
								href="https://github.com/benztranwot"
								target="_blank"
								rel="noreferrer"
								class="btn btn-ghost btn-square h-14 w-14"
							>
								<Icon icon="akar-icons:github-fill" class="h-10 w-10 text-black" />
							</a>
						</div>
						<div class="tooltip" data-tip="Linkedin">
							<a
								href="https://www.linkedin.com/in/quantrantech"
								target="_blank"
								rel="noreferrer"
								class="btn btn-ghost btn-square h-14 w-14"
							>
								<Icon icon="akar-icons:linkedin-fill" class="h-10 w-10 text-primary" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</AnimationWrapper>

<style>
	input,
	textarea {
		background-color: #e4e4e4;
	}
</style>
