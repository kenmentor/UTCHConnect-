<script lang="ts">
  import BackdropHero from "$lib/components/BackdropHero.svelte";
  import Header from "$lib/components/Header.svelte";
  import ServiceCard, {
    type ServiceCardProps,
  } from "$lib/components/serviceCard.svelte";

  import Footer from "$lib/components/Footer.svelte";
  import { Wallet } from "lucide-svelte";

  const services: ServiceCardProps[] = [
    {
      Icon: Wallet,
      title: "Financial Services",
      desc: "Manage your payments and salary efficiently with our secure PayIQue System.",

      link: "#",
      features: {
        name: "PayIQue System:",
        list: ["Salary Tracking", "Payslips", "Payment Management"],
      },
      buttonText: "Access PayIQue",
      color: "#1E88E5", // A professional blue shade for finance
    },
  ];
</script>

<Header />
<main>
  <BackdropHero
    subtitle="Streamlined payment and salary management solutions for UCTH. Access PayIQue for salary tracking and payslips, or make secure ID card payments through our integrated system."
  >
    <h1
      class="w-full text-[58px] max-w-2xl text-4xl sm:text-5xl lg:text-6xl font-bold leading-[50px"
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
