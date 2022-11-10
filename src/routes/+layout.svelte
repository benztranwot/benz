<script>
	import "../app.css";
	import { theme } from "../stores/themeStore";
	import Navbar from "$lib/components/Navbar.svelte";
	import Footer from "$lib/components/Footer.svelte";
</script>

<div data-theme={$theme} class="bg-base-300">
	<Navbar />
	<main>
		<slot />
	</main>
	<Footer />
</div>
