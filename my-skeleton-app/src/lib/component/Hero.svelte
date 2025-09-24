<header class="relative overflow-hidden">
	<!-- huge cinematic background image blended with gradient -->
	<div class="absolute inset-0 -z-10">
		<img
			src="https://images.unsplash.com/photo-1526378722659-49a9b2934aa3?auto=format&fit=crop&w=2000&q=80"
			alt="Abstract AI audio particles"
			class="w-full h-full object-cover opacity-70"
		/>
		<div
			class="absolute inset-0 bg-gradient-to-tr from-[#031226]/70 via-[#071023]/50 to-[#00111a]/70"
		></div>
		<!-- decorative shapes -->
		<svg
			class="hero-shape absolute -left-10 -top-20 w-[520px] h-[520px] floaty"
			viewBox="0 0 600 600"
			xmlns="http://www.w3.org/2000/svg"
		>
			<defs>
				<linearGradient id="g1" x1="0" x2="1">
					<stop offset="0" stop-color="#7c5cff" />
					<stop offset="1" stop-color="#3ec5ff" />
				</linearGradient>
			</defs>
			<circle cx="300" cy="300" r="200" fill="url(#g1)" opacity="0.38" />
		</svg>
		<svg
			class="hero-shape absolute right-0 -bottom-20 w-[480px] h-[480px] floaty"
			viewBox="0 0 600 600"
			xmlns="http://www.w3.org/2000/svg"
		>
			<defs>
				<linearGradient id="g2" x1="0" x2="1">
					<stop offset="0" stop-color="#ff8aa1" />
					<stop offset="1" stop-color="#7c5cff" />
				</linearGradient>
			</defs>
			<rect x="0" y="0" rx="120" width="600" height="600" fill="url(#g2)" opacity="0.12" />
		</svg>
	</div>

	<div class="max-w-7xl mx-auto px-6 py-28 lg:py-36 relative">
		<div class="grid lg:grid-cols-2 gap-12 items-center">
			<div data-aos="fade-up" data-aos-delay="100">
				<h1 class="hero-title text-4xl md:text-5xl font-extrabold leading-tight">
					Let AI handle your voice. <span
						style="background:linear-gradient(90deg,var(--accent),var(--accent-2)); -webkit-background-clip:text; background-clip:text; color:transparent"
						>Seamlessly</span
					>.
				</h1>
				<p class="mt-6 text-slate-300 max-w-xl">
					VoxAI automates customer calls with natural, context-aware conversation — booking
					appointments, taking payments, summarizing calls and routing to the right team. Deploy in
					minutes, scale instantly.
				</p>

				<div class="mt-8 flex items-center gap-4">
					<a
						href="#get-started"
						class="inline-flex items-center gap-3 px-6 py-3 rounded-full text-sm font-semibold bg-white text-black cta-glow shadow hover:scale-[1.02] transition"
					>
						🚀 Start Free 14 days
					</a>
					<a href="#features" class="text-sm text-slate-300 hover:text-white transition"
						>Learn more →</a
					>
				</div>

				<!-- trust logos -->
				<div class="mt-10 flex items-center gap-6 text-slate-400">
					<div class="flex items-center gap-3">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png"
							alt="partner"
							class="w-8 h-8 opacity-60"
						/>
						<span class="text-sm">Twilio-ready</span>
					</div>
					<div class="flex items-center gap-3">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/0/01/Stripe_logo%2C_revised_2016.png"
							alt="stripe"
							class="w-10 h-6 opacity-60"
						/>
						<span class="text-sm">Payment integrations</span>
					</div>
				</div>
			</div>

			<!-- demo card with blended image + play button -->
			<div data-aos="zoom-in" class="relative">
				<div class="glass rounded-2xl overflow-hidden shadow-2xl">
					<div class="relative h-72 lg:h-96">
						<img
							src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1400&q=80"
							alt="Phone call demo"
							class="img-blend"
						/>
						<div class="absolute inset-0 flex items-center justify-center">
							<button
								aria-label="Play demo"
								class="w-20 h-20 rounded-full bg-white/95 text-black flex items-center justify-center shadow-lg hover:scale-105 transition"
							>
								<svg width="20" height="20" viewBox="0 0 24 24" fill="none"
									><path d="M5 3v18l15-9L5 3z" fill="currentColor" /></svg
								>
							</button>
						</div>
					</div>

					<div class="p-6 border-t border-white/6">
						<div class="flex items-start justify-between gap-4">
							<div>
								<h4 class="font-semibold text-lg">AI Voice Assistant — Live Demo</h4>
								<p class="text-sm text-slate-300 mt-1">
									Hear how natural conversations feel — calm, efficient, and human-like.
								</p>
							</div>
							<div class="text-right">
								<span class="text-xs text-slate-400">Avg. response</span>
								<div class="mt-1 font-bold text-white">~1.2s</div>
							</div>
						</div>
					</div>
				</div>

				<!-- subtle floating badge -->
				<div class="absolute -left-6 -bottom-6 glass rounded-xl p-3 flex items-center gap-3 shadow">
					<svg width="20" height="20" viewBox="0 0 24 24" class="text-white"
						><path d="M12 2v6" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"
						></path><path d="M6 8v8" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"
						></path></svg
					>
					<div>
						<div class="text-xs text-slate-300">Deployed</div>
						<div class="text-sm font-semibold">500+ businesses</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</header>
