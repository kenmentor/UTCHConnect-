<script lang="ts">
  import BackdropHero from "$lib/components/BackdropHero.svelte";
  import Header from "$lib/components/Header.svelte";
  import ServiceCard, {
    type ServiceCardProps,
  } from "$lib/components/serviceCard.svelte";

  import info from "$lib/assets/avater.png";
  import Footer from "$lib/components/Footer.svelte";
  import { User } from "lucide-svelte";
  const services: ServiceCardProps[] = [
    {
      Icon: User,
      title: "Create Staff Account",
      desc: "Register for a new UCTH digital identity through our WhatsApp bot. Quick, secure, and automated account creation.",
      link: "https://portal.yrka.app/ucth/card/v1",
      features: {
        name: "What You'll Get:",
        list: [
          "Personnel IDID Registration",
          "Digital Payslips",
          "Transaction History",
        ],
      },
      buttonText: "Create Via Whatsapp",
      color: "#2563eb",
    },
    {
      link: "https://portal.yrka.app/ucth/card/v1",
      Icon: User,
      title: "Update Account",
      desc: "Easily update your staff information or renew your details in just a few steps.",
      features: {
        name: "Features:",
        list: [
          "Fast-track renewal",
          "Biometric update optional",
          "Secure data verification",
        ],
      },
      buttonText: "Update Account",
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
      class="w-full text-[58px] max-w-2xl text-4xl sm:text-5xl lg:text-6xl font-bold leading-[50px]"
    >
      Identity <span class="text-blue-600"> Services</span>
    </h1>
  </BackdropHero>
  <div
    class="flex p-5 items-center md:flex-row flex-col w-full md:gap-[20px] lg:gap-[80px] justify-center"
  >
    {#each services as service}
      <ServiceCard data={service} />
    {/each}
  </div>
</main>
<Footer />

<style>
</style>
