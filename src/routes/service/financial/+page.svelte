<script lang="ts">
  import BackdropHero from "$lib/components/BackdropHero.svelte";
  import Header from "$lib/components/Header.svelte";
  import ServiceCard, {
    type ServiceCardProps,
  } from "$lib/components/serviceCard.svelte";
  import doctor from "$lib/assets/doctor.png";
  import Footer from "$lib/components/Footer.svelte";
  import { Wallet } from "lucide-svelte";

  const services: ServiceCardProps[] = [
    {
      Icon: doctor,
      title: "PayIQue System",
      desc: "Complete payment and salary management platform for UCTH staff and personnel.",
      link: "#",
      features: {
        name: "Features:",
        list: ["Salary Tracking", "Digital Payslips", "Transaction History"],
      },
      buttonText: "Access PayIQue",
      color: "#0050E6",
    },
    {
      Icon: doctor,
      title: "ID Card Payment",
      desc: "Secure and convenient payment portal for UCTH identification card services.",
      link: "https://portal.yrka.app/ucth/card/v1",
      features: {
        name: "Features:",
        list: ["New ID Card Payment ", "Card Renewal", "Replacement Cards"],
      },
      buttonText: "Make Payment",
      color: "#7D4533",
    },
  ];
</script>

<Header />
<main>
  <BackdropHero
    subtitle="Streamlined payment and salary management solutions for UCTH. Access PayIQue for salary tracking and payslips, or make secure ID card payments through our integrated system."
  >
    <h1
      class="w-full text-[50px] max-w-2xl text-4xl sm:text-5xl lg:text-6xl font-bold leading-[50px]"
    >
      Financial <span class="text-blue-600"> Services</span>
    </h1>
  </BackdropHero>

  <div
    class="  flex p-5 items-center md:flex-row flex-col w-full md:gap-[20px] lg:gap-[80px] justify-center md:py-[100px]"
  >
    {#each services as service}
      <ServiceCard data={service} />
    {/each}
  </div>
</main>
<Footer />

<style>
</style>
