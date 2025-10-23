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
      link: "identity/id-new",
      features: {
        name: "Features",
        list: [
          "Biometric data capture",
          "Photo session included",
          "Express processing (3-5 days)",
          "Digital copy provided",
          "QR code integration",
        ],
      },

      buttonText: "Get new ID card",
      color: "#2563eb",
    },
    {
      link: "identity/id-renewal",
      icon: info,
      title: "ID Renewal",

      features: {
        name: "Features",
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
    <span>
      Financial <span class="text-blue-600"> Services</span>
    </span>
  </BackdropHero>
  <div
    class="flex p-5 items-center md:flex-row flex-col w-full md:gap-[20px] lg:gap-[80px] justify-center py-[150px]"
  >
    {#each services as service}
      <ServiceCard data={service} />
    {/each}
  </div>
</main>
<Footer />

<style>
</style>
