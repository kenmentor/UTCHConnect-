<script lang="ts">
  import BackdropHero from "$lib/components/BackdropHero.svelte";
  import Header from "$lib/components/Header.svelte";
  import ServiceCard, {
    type ServiceCardProps,
  } from "$lib/components/serviceCard.svelte";

  import info from "$lib/assets/avater.png";
  import Footer from "$lib/components/Footer.svelte";
  const services: ServiceCardProps[] = [
    {
      icon: info,
      title: "New ID Card",
      link: "",

      features: {
        name: "",
        list: ["Fast-track renewal", "Biometric update optional"],
      },

      buttonText: "Get new ID card",
      color: "#2563eb",
    },
    {
      icon: info,
      title: "ID Renewal",
      link: "",

      features: {
        name: "",
        list: ["Fast-track renewal", "Biometric update optional"],
      },

      buttonText: "Renew ID card",
      color: "#16a34a",
    },
  ];
</script>

<Header />
<main>
  <BackdropHero
    subtitle="Streamlined payment and salary management solutions for UCTH. Access PayIQue for salary tracking and payslips, or make secure ID card payments through our integrated system."
  >
    <h1
      class="w-full text-[58px] max-w-2xl text-4xl sm:text-5xl lg:text-6xl font-bold"
    >
      Financial <span class="text-blue-600"> Services</span>
    </h1>
  </BackdropHero>
  <div class="flex w-full gap-[80px] justify-center py-[150px]">
    {#each services as service}
      <ServiceCard data={service} />
    {/each}
  </div>
</main>
<Footer />

<style>
</style>
