<script lang="ts">
	let fullName = '';
	let email = '';
	let password = '';
	let confirmPassword = '';
	let agree = false;

	function handleSignup() {
		// Add your signup logic here
		console.log({ fullName, email, password, confirmPassword, agree });
	}
</script>

<div class="min-h-screen flex items-center justify-center bg-gray-100 relative overflow-hidden">
	<!-- Animated background gradient -->
	<div
		class="absolute inset-0 -z-10 bg-gradient-to-r from-blue-900 via-blue-800 to-gray-900 bg-[length:400%_400%] animate-[gradientBG_15s_ease_infinite]"
	></div>

	<!-- Signup Card -->
	<div
		class="bg-white shadow-lg w-full max-w-md p-10 flex flex-col space-y-6 border border-gray-200"
	>
		<!-- Brand -->
		<div class="text-center">
			<h1 class="text-3xl font-semibold text-[#1e40af] tracking-tight">Supportive AI</h1>
			<p class="text-gray-600 mt-2 text-sm">Create your enterprise account</p>
		</div>

		<!-- Signup Form -->
		<form class="flex flex-col space-y-4" on:submit|preventDefault={handleSignup}>
			<div class="flex flex-col space-y-1">
				<label for="fullName" class="text-gray-700 font-medium text-sm">Full Name</label>
				<input
					id="fullName"
					type="text"
					placeholder="John Doe"
					bind:value={fullName}
					required
					class="border border-gray-300 px-4 py-3 text-gray-900 focus:outline-none focus:border-[#1e40af] shadow-sm transition-colors duration-200 w-full"
				/>
			</div>

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

			<div class="flex flex-col space-y-1">
				<label for="confirmPassword" class="text-gray-700 font-medium text-sm"
					>Confirm Password</label
				>
				<input
					id="confirmPassword"
					type="password"
					placeholder="••••••••"
					bind:value={confirmPassword}
					required
					class="border border-gray-300 px-4 py-3 text-gray-900 focus:outline-none focus:border-[#1e40af] shadow-sm transition-colors duration-200 w-full"
				/>
			</div>

			<label class="flex items-center text-gray-700 text-sm">
				<input
					type="checkbox"
					bind:checked={agree}
					class="mr-2 w-4 h-4 border-gray-300 focus:ring-0 accent-[#1e40af]"
					required
				/>
				I agree to the Terms & Conditions
			</label>

			<button
				type="submit"
				class="bg-[#1e40af] text-white font-semibold py-3 w-full transition-all duration-200 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-[#1e40af] focus:ring-offset-1"
			>
				Sign Up
			</button>
		</form>

		<p class="text-center text-gray-500 text-sm mt-4">
			Already have an account? <a href="/login" class="text-[#1e40af] hover:underline">Sign In</a>
		</p>
	</div>
</div>

<style>
	/* Optional animated background gradient */
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
