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
  import info from "$lib/assets/info.png";
  import { Heading } from "carbon-icons-svelte";
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
    {
      img: info,
      title: "CMD Office: New Policy Updates.",
      description:
        "Important policy changes from the Chief Medical Director's office regarding patient care protocols and staff guidelines.",
      id: "4",
    },
    {
      img: info,
      title: "CMD Office: New Policy Updates.",
      description:
        "Important policy changes from the Chief Medical Director's office regarding patient care protocols and staff guidelines.",
      id: "4",
    },
    {
      img: info,
      title: "CMD Office: New Policy Updates.",
      description:
        "Important policy changes from the Chief Medical Director's office regarding patient care protocols and staff guidelines.",
      id: "4",
    },
    {
      img: info,
      title: "CMD Office: New Policy Updates.",
      description:
        "Important policy changes from the Chief Medical Director's office regarding patient care protocols and staff guidelines.",
      id: "4",
    },
    {
      img: info,
      title: "CMD Office: New Policy Updates.",
      description:
        "Important policy changes from the Chief Medical Director's office regarding patient care protocols and staff guidelines.",
      id: "4",
    },
    {
      img: info,
      title: "CMD Office: New Policy Updates.",
      description:
        "Important policy changes from the Chief Medical Director's office regarding patient care protocols and staff guidelines.",
      id: "4",
    },
  ];
</script>

<Header pageId={4} />

<BackdropHero
  subtitle="Stay informed with the latest developments, policy changes, and important announcements from UCTH"
>
  <h1 class="text-[48px] font-semibold">Latest News & Updates</h1>
</BackdropHero>
<main
  class="cds-custom-theme relative flex min-h-screen flex-col gap-3.5
         px-4 sm:px-8 md:px-12 lg:px-20 xl:px-[140px] pb-12"
>
  <InformationDesk {data} row={2} />

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
