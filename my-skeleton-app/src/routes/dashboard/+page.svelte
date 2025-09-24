<script lang="ts">
	import { Card, CardContent, CardHeader } from '@skeletonlabs/skeleton';
	import { Button, Input, Label } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';

	// Sample stats
	let stats = [
		{ title: 'Active Users', value: 1284 },
		{ title: 'Tickets Open', value: 37 },
		{ title: 'Revenue ($)', value: 56420 },
		{ title: 'Feedbacks', value: 124 }
	];

	// Sidebar links
	let links = [
		{ name: 'Dashboard', href: '/dashboard' },
		{ name: 'Analytics', href: '/analytics' },
		{ name: 'Customer Support', href: '/support' },
		{ name: 'Settings', href: '/settings' }
	];

	let botMessage = '';
	let botLog: string[] = [];

	function sendBotMessage() {
		if (botMessage.trim() === '') return;
		botLog = [...botLog, `You: ${botMessage}`, `Bot: Received!`];
		botMessage = '';
	}
</script>

<div class="min-h-screen bg-gray-100 flex flex-col">
	<!-- Top Navbar -->
	<header
		class="bg-white shadow-md border-b border-gray-200 px-6 py-4 flex justify-between items-center"
	>
		<h1 class="text-2xl font-semibold text-[#1e40af]">Supportive AI Dashboard</h1>
		<div class="flex items-center space-x-4">
			<Button variant="outline" color="gray">Profile</Button>
			<Button color="blue">Logout</Button>
		</div>
	</header>

	<div class="flex flex-1 overflow-hidden">
		<!-- Sidebar -->
		<aside class="w-64 bg-white border-r border-gray-200 p-6 flex flex-col space-y-4">
			{#each links as link}
				<a
					href={link.href}
					class="px-4 py-3 text-gray-800 font-medium hover:bg-gray-100 transition sharp-edge"
					>{link.name}</a
				>
			{/each}
		</aside>

		<!-- Main Content -->
		<main class="flex-1 p-8 overflow-y-auto space-y-8">
			<!-- Stats Cards -->
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				{#each stats as stat}
					<Card class="shadow-sm border border-gray-200 transition hover:shadow-md">
						<CardHeader>
							<p class="text-gray-500 text-sm">{stat.title}</p>
						</CardHeader>
						<CardContent>
							<p class="text-2xl font-semibold text-gray-900">{stat.value}</p>
						</CardContent>
					</Card>
				{/each}
			</div>

			<!-- Customer Care Bot -->
			<Card class="shadow-lg border border-gray-200 flex flex-col space-y-4 p-6">
				<CardHeader>
					<h2 class="text-xl font-semibold text-[#1e40af]">Customer Care Bot</h2>
				</CardHeader>
				<CardContent
					class="flex flex-col space-y-2 bg-gray-50 border border-gray-200 h-48 overflow-y-auto p-4"
				>
					{#if botLog.length === 0}
						<p class="text-gray-500 italic">Bot messages will appear here...</p>
					{/if}
					{#each botLog as msg}
						<p class="text-gray-700 text-sm">{msg}</p>
					{/each}
				</CardContent>
				<div class="flex space-x-2">
					<Input placeholder="Type a message..." bind:value={botMessage} class="flex-1" />
					<Button color="blue" on:click={sendBotMessage}>Send</Button>
				</div>
			</Card>

			<!-- General Links & Activity -->
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				<Card class="shadow-sm border border-gray-200 p-6">
					<CardHeader>
						<h3 class="text-lg font-semibold text-[#1e40af]">Recent Activity</h3>
					</CardHeader>
					<CardContent class="mt-4 text-gray-700 space-y-2">
						<ul>
							<li>User John submitted a ticket.</li>
							<li>Revenue increased by 12% this week.</li>
							<li>New feedback received from customer XYZ.</li>
						</ul>
					</CardContent>
				</Card>

				<Card class="shadow-sm border border-gray-200 p-6">
					<CardHeader>
						<h3 class="text-lg font-semibold text-[#1e40af]">Quick Links</h3>
					</CardHeader>
					<CardContent class="mt-4 text-gray-700 space-y-2">
						<ul>
							<li><a href="#" class="hover:underline">View All Users</a></li>
							<li><a href="#" class="hover:underline">Manage Tickets</a></li>
							<li><a href="#" class="hover:underline">Settings</a></li>
						</ul>
					</CardContent>
				</Card>
			</div>
		</main>
	</div>
</div>
