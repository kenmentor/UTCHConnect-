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
  import { Heading } from "carbon-icons-svelte";
</script>

<Header pageId={4} />

<Hero
  subtitle="Your central hub for all hospital news, updates, policy changes, and important announcements at the University of Calabar Teaching Hospital."
>
  <h1
    class="w-full max-w-2xl text-[32px] sm:text-[48px] md:text-[64px] leading-tight font-semibold"
  >
    UCTH <span class="text-blue-600"> Information</span>
    <span> Desk </span>
  </h1>
</Hero>

<main
  class="cds-custom-theme relative flex min-h-screen flex-col gap-3.5
         px-4 sm:px-8 md:px-12 lg:px-20 xl:px-[140px] pb-12 pt-12"
>
  <InformationDesk />

  <section
    class="flex items-center justify-center mb-16 sm:mb-24 md:mb-[162px]
           px-4 sm:px-8 md:px-12 lg:px-20 xl:px-[140px]"
  >
    <Button>Load More News</Button>
  </section>
</main>

<Footer />

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
