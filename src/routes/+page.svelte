<script lang="ts">
  // Example items can be overridden by fetch from CMS or props
  import Header from "$lib/components/Header.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import ConnectWithYu from "$lib/components/ConnectWithYU.svelte";
  import InformationDesk from "$lib/components/informationDesk.svelte";
  import Cta from "$lib/components/CTA.svelte";
  import ServiceCenter from "$lib/components/ServiceCenter.svelte";
  import info from "$lib/assets/info.png";
  const data = [
    {
      img: info,
      title: "CMD Office: New Policy Updates.",
      description:
        "Important policy changes from the Chief Medical Director's office regarding patient care protocols and staff guidelines.",
      id: "1",
    },
    {
      img: info,
      title: "CMD Office: New Policy Updates.",
      description:
        "Important policy changes from the Chief Medical Director's office regarding patient care protocols and staff guidelines.",
      id: "2",
    },
    {
      img: info,
      title: "CMD Office: New Policy Updates.",
      description:
        "Important policy changes from the Chief Medical Director's office regarding patient care protocols and staff guidelines.",
      id: "3",
    },
  ];
</script>

<Header />

<Hero
  subtitle="The Intelligent Digital Identity Services (IDIS) modernizes patient identification and staff authentication at UCTH using advanced digital identity technologies, positioning the hospital as a healthcare innovation leader in Nigeria."
>
  <h1
    class=" lg:text-left w-full max-w-2xl text-[50px] sm:text-4xl lg:text-5xl xl:text-6xl md:text-[50px] font-bold text-center px-4"
  >
    UCTH <span class="text-blue-600"> IDID</span> Services
    <span class="text-blue-600"> Centre </span>
  </h1>
</Hero>

<main class="cds-custom-theme relative flex min-h-screen flex-col">
  <Cta />
  <InformationDesk {data} isReadmore={true} desc="" />
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
