<script lang="ts">
	import { onMount } from 'svelte';

	let email = '';
	let password = '';
	let remember = false;

	function handleLogin() {
		// Add your login logic here
		console.log('Logging in with:', { email, password, remember });
	}
</script>

<div class="min-h-screen flex items-center justify-center bg-gray-100 relative overflow-hidden">
	<!-- Animated background gradient -->
	<div
		class="absolute inset-0 -z-10 bg-gradient-to-r from-blue-900 via-blue-800 to-gray-900 bg-[length:400%_400%] animate-[gradientBG_15s_ease_infinite]"
	></div>

	<!-- Login Card -->
	<div
		class="bg-white shadow-lg w-full max-w-md p-10 flex flex-col space-y-6 border border-gray-200"
	>
		<!-- Brand -->
		<div class="text-center">
			<h1 class="text-3xl font-semibold text-[#1e40af] tracking-tight">Supportive AI</h1>
			<p class="text-gray-600 mt-2 text-sm">Secure login to your enterprise dashboard</p>
		</div>

		<!-- Login Form -->
		<form class="flex flex-col space-y-4" on:submit|preventDefault={handleLogin}>
			<div class="flex flex-col space-y-1">
				<label for="email" class="text-gray-700 font-medium text-sm">Email</label>
				<input
					id="email"
					type="email"
					placeholder="you@company.com"
					bind:value={email}
					required
					class="border border-gray-300 px-4 py-3 text-gray-900 focus:outline-none focus:border-[#1e40af] shadow-sm transition-colors duration-200 w-full"
				/>
			</div>

			<div class="flex flex-col space-y-1">
				<label for="password" class="text-gray-700 font-medium text-sm">Password</label>
				<input
					id="password"
					type="password"
					placeholder="••••••••"
					bind:value={password}
					required
					class="border border-gray-300 px-4 py-3 text-gray-900 focus:outline-none focus:border-[#1e40af] shadow-sm transition-colors duration-200 w-full"
				/>
			</div>

			<div class="flex items-center justify-between">
				<label class="flex items-center text-gray-700 text-sm">
					<input
						type="checkbox"
						bind:checked={remember}
						class="mr-2 w-4 h-4 border-gray-300 focus:ring-0 accent-[#1e40af]"
					/>
					Remember me
				</label>
				<a href="#" class="text-[#1e40af] hover:underline text-sm">Forgot password?</a>
			</div>

			<button
				type="submit"
				class="bg-[#1e40af] text-white font-semibold py-3 w-full transition-all duration-200 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-[#1e40af] focus:ring-offset-1"
			>
				Sign In
			</button>
		</form>

		<p class="text-center text-gray-500 text-sm mt-4">
			© {new Date().getFullYear()} Supportive AI. All rights reserved.
		</p>
	</div>
</div>

<style>
	/* Optional: Animate background gradient */
	@keyframes gradientBG {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
</style>
