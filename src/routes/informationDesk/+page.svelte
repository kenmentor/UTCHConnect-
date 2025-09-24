<script lang="ts">
  // Example items can be overridden by fetch from CMS or props
  import Header from "$lib/components/Header.svelte";
  import Hero from "$lib/components/Hero.svelte";

  import Footer from "$lib/components/Footer.svelte";
  import ConnectWithYu from "$lib/components/ConnectWithYU.svelte";
  import InformationDesk from "$lib/components/informationDesk.svelte";
  import Cta from "$lib/components/CTA.svelte";
  import ServiceCenter from "$lib/components/ServiceCenter.svelte";
  import { Button } from "carbon-components-svelte";
</script>

<Header />
<Hero
  subtitle="Your central hub for all hospital news, updates, policy changes, and important announcements at the University of Calabar Teaching Hospital."
>
  <h1 class="w-full max-w-2xl text-[64px]">
    UCTH <span class="text-blue-600"> iDID</span> Information
    <span class="text-gray-600"> Desk </span>
  </h1></Hero
>
<main
  class="cds-custom-theme relative flex min-h-screen flex-col gap-3.5 px-[140px]"
>
  <InformationDesk />
  <section class="flex items-center justify-center mb-[162px]">
    <Button>Load More New</Button>
  </section>

  <Footer />
</main>

<style>
  main {
    padding-bottom: 48px;
    padding-top: 48px;
  }
  section {
    padding-left: 140px;
    padding-right: 140px;
  }
</style>
