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
      title: "Create Staff Account",
      desc: "Register for a new UCTH digital identity through our WhatsApp bot. Quick, secure, and automated account creation.",
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
      icon: info,
      title: "ID Renewal",

      desc: "Update your existing UCTH digital identity information quickly and securely through WhatsApp.",
      features: {
        name: "Modification Options:",
        list: [
          "Update Personal Information",
          "Change Contact Details",
          "Express processing (3-5 days)",
          "Update Department Info",
        ],
      },
      buttonText: "Modify Via Whatsapp",
      color: "#BA0EA6",
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
