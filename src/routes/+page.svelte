<script lang="ts">
  // Example items can be overridden by fetch from CMS or props
  import Header from "$lib/components/Header.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import ConnectWithYu from "$lib/components/ConnectWithYU.svelte";
  import InformationDesk from "$lib/components/informationDesk.svelte";
  import Cta from "$lib/components/CTA.svelte";
  import ServiceCenter from "$lib/components/ServiceCenter.svelte";
</script>

<Header />

<Hero
  subtitle="The Intelligent Digital Identity Services (IDIS) modernizes patient identification and staff authentication at UCTH using advanced digital identity technologies, positioning the hospital as a healthcare innovation leader in Nigeria."
>
  <h1 class="w-full max-w-2xl text-4xl sm:text-5xl lg:text-6xl font-bold">
    UCTH <span class="text-blue-600"> iDID</span> Services
    <span class="text-blue-600"> Centre </span>
  </h1>
</Hero>

<main
  class="cds-custom-theme relative flex min-h-screen flex-col gap-10 px-4 sm:px-8 lg:px-16 xl:px-32"
>
  <Cta />
  <InformationDesk />
  <ServiceCenter />

  <ConnectWithYu />
</main>

<Footer />

<style>
  main {
    padding-top: 48px;
    padding-bottom: 48px;
  }
</style>
