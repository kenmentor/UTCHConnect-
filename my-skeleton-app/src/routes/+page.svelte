<script lang="ts">
	import { onMount } from 'svelte';
	import AOS from 'aos';
	import 'aos/dist/aos.css';
	import { afterUpdate } from 'svelte';
	import Hero from '$lib/component/Hero.svelte';
	import Howitworks from '$lib/component/Howitworks.svelte';
	import Pricing from '$lib/component/Pricing.svelte';
	import Cta from '$lib/component/CTA.svelte';
	import Footer from '$lib/component/Footer.svelte';

	let year: number;
	let hero: HTMLElement;
	let heroShapes: NodeListOf<HTMLElement>;

	onMount(() => {
		// Set the current year
		year = new Date().getFullYear();

		// Initialize AOS
		AOS.init({
			duration: 700,
			once: true,
			easing: 'ease-out-quart',
			// Add this if AppShell wraps content in a scrollable div
			container: document.querySelector('#skeleton-content-wrapper')
		});

		if (!hero) return;
		heroShapes = hero.querySelectorAll<HTMLElement>('.hero-shape');

		// Subtle hero mouse parallax
		const handleMouseMove = (e: MouseEvent) => {
			const cx = window.innerWidth / 2;
			const cy = window.innerHeight / 2;
			const dx = (e.clientX - cx) / cx;
			const dy = (e.clientY - cy) / cy;
			heroShapes.forEach((s, i) => {
				const move = (i + 1) * 6;
				s.style.transform = `translate3d(${dx * move}px, ${dy * move}px, 0)`;
			});
		};

		hero.addEventListener('mousemove', handleMouseMove);

		// Subtle scroll parallax
		const handleScroll = () => {
			const sc = window.scrollY;
			heroShapes.forEach((s, i) => {
				s.style.transform += ` translateY(${sc * ((i + 1) * -0.02)}px)`;
			});
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			hero.removeEventListener('mousemove', handleMouseMove);
			window.removeEventListener('scroll', handleScroll);
		};
	});
	afterUpdate(() => {
		AOS.refresh();
	});
</script>

<!-- NAV -->
<nav class="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
	<div class="flex items-center gap-3">
		<div
			class="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7c5cff] to-[#3ec5ff] flex items-center justify-center shadow"
		>
			<svg width="20" height="20" viewBox="0 0 24 24" fill="none" class="text-white">
				<path
					d="M3 12c0 4.97 4.03 9 9 9s9-4.03 9-9"
					stroke="white"
					stroke-opacity="0.9"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				></path>
				<path
					d="M3 7c2.5-2.5 6-4 10-4 3.8 0 7.3 1.5 10 4"
					stroke="white"
					stroke-opacity="0.8"
					stroke-width="1.1"
					stroke-linecap="round"
					stroke-linejoin="round"
				></path>
			</svg>
		</div>
		<span class="font-semibold tracking-wide">VoxAI</span>
	</div>

	<div class="hidden md:flex items-center gap-6 text-sm text-slate-300">
		<a href="#features" class="hover:text-white transition">Features</a>
		<a href="#how" class="hover:text-white transition">How it works</a>
		<a href="#testimonials" class="hover:text-white transition">Clients</a>
		<a href="#pricing" class="hover:text-white transition">Pricing</a>
		<a
			href="#get-started"
			class="ml-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#7c5cff] to-[#3ec5ff] text-black font-semibold cta-glow shadow hover:scale-[1.01] transition"
			>Start free</a
		>
	</div>

	<!-- mobile menu (simple) -->
	<div class="md:hidden text-slate-300">
		<button
			aria-label="Open menu"
			on:click={() => {
				const mobileMenu = document.getElementById('mobile');
				if (mobileMenu) mobileMenu.classList.toggle('hidden');
			}}
		>
			<svg width="22" height="22" viewBox="0 0 24 24" fill="none"
				><path
					d="M3 6h18M3 12h18M3 18h18"
					stroke="currentColor"
					stroke-width="1.6"
					stroke-linecap="round"
				/></svg
			>
		</button>
	</div>
</nav>

<div id="mobile" class="hidden md:hidden px-6">
	<div class="flex flex-col gap-3 text-slate-300">
		<a href="#features">Features</a>
		<a href="#how">How it works</a>
		<a href="#testimonials">Clients</a>
		<a href="#pricing">Pricing</a>
		<a
			href="#get-started"
			class="mt-2 inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#7c5cff] to-[#3ec5ff] text-black font-semibold"
			>Start free</a
		>
	</div>
</div>

<div class="">
	<!-- HERO -->
	<Hero />
	<!-- FEATURES (cinematic grid with icons + blended bg) -->

	<div class="section-sep"></div>

	<!-- HOW IT WORKS (three panel storytelling) -->
	<!-- <Howitworks /> -->

	<!-- PRICING / CTA -->
	<Pricing />

	<!-- FINAL CTA -->
	<Cta />

	<!-- FOOTER -->
	<Footer />
</div>

<!-- SCRIPTS -->
<style>
	/* Premium fonts feel: fallback system fonts for speed */
	:root {
		--accent: #7c5cff; /* indigo-violet */
		--accent-2: #3ec5ff;
		--muted: #9aa4b2;
	}

	/* Hero overlay shapes for cinematic effect */
	.hero-shape {
		filter: blur(36px) saturate(120%);
		opacity: 0.45;
		transform: translate3d(0, 0, 0);
		mix-blend-mode: screen;
	}

	/* Glass card */
	.glass {
		background: rgba(255, 255, 255, 0.06);
		backdrop-filter: blur(8px) saturate(120%);
		-webkit-backdrop-filter: blur(8px) saturate(120%);
		border: 1px solid rgba(255, 255, 255, 0.06);
	}

	/* Smooth image blending */
	.img-blend {
		object-fit: cover;
		width: 100%;
		height: 100%;
		display: block;
		mix-blend-mode: multiply;
		opacity: 0.96;
	}

	/* Decorative separators */
	.section-sep {
		height: 1px;
		background: linear-gradient(90deg, rgba(124, 92, 255, 0.12), rgba(62, 197, 255, 0.06));
		margin: 2rem 0;
	}

	/* subtle floating animation */
	@keyframes floaty {
		0% {
			transform: translateY(0px);
		}
		50% {
			transform: translateY(-10px);
		}
		100% {
			transform: translateY(0px);
		}
	}
	.floaty {
		animation: floaty 6s ease-in-out infinite;
	}

	/* CTA glow */
	.cta-glow {
		box-shadow:
			0 8px 28px rgba(124, 92, 255, 0.18),
			0 4px 10px rgba(0, 0, 0, 0.35);
	}

	/* small responsive tweaks for hero text */
	@media (min-width: 1280px) {
		.hero-title {
			font-size: 4.2rem;
			line-height: 1;
		}
	}
</style>
