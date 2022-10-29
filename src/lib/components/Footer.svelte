<script>
	import Icon from "@iconify/svelte";
</script>

<footer class="footer footer-center p-10 gap-y-6 py-6 bg-neutral text-neutral-content">
	<div>
		<Icon icon="bi:code-slash" class="h-14 w-14 mb-2" />
		<p class="font-bold">Built with SvelteKit, DaisyUI and Hygraph CMS.</p>
		<p>Copyright © 2022 Ben Tran - All right reserved</p>
	</div>
	<div>
		<div class="flex justify-center items-center gap-2">
			<a
				class="btn btn-ghost btn-circle hover:bg-transparent hover:scale-110 hover:text-primary cursor-pointer duration-300"
				href="https://github.com/benztranwot"
				target="_blank"
				rel="noreferrer"
			>
				<Icon icon="akar-icons:github-fill" class="h-8 w-28" />
			</a>
			<a
				class="btn btn-ghost btn-circle hover:bg-transparent hover:scale-110 hover:text-primary cursor-pointer duration-300"
				href="mailto:benzdev0305@gmail.com"><Icon icon="ci:mail" class="h-10 w-10" /></a
			>
			<a
				class="btn btn-ghost btn-circle hover:bg-transparent hover:scale-110 hover:text-primary cursor-pointer duration-300"
				href="https://www.linkedin.com/in/benz-tran/"
				target="_blank"
				rel="noreferrer"
			>
				<Icon icon="akar-icons:linkedin-box-fill" class="h-8 w-8" />
			</a>
		</div>
	</div>
</footer>
