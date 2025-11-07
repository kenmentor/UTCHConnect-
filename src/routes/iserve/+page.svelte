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
  import BackdropHero from "$lib/components/BackdropHero.svelte";
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

<BackdropHero
  subtitle="Streamlined payment and salary management solutions for UCTH. Access PayIQue for salary tracking and payslips, or make secure ID card payments through our integrated system."
>
  <h1
    class="w-full text-[40px] max-w-2xl text-4xl sm:text-5xl lg:text-6xl leading-[50px] font-semibold"
  >
    UCTH
    <span class="text-blue-600"> CoNet</span>
    (iServe)
  </h1>
</BackdropHero>

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
