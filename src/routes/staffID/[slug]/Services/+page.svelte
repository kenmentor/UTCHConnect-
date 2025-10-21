<script lang="ts">
  import ServiceCard, {
    type ServiceCardProps,
  } from "$lib/components/serviceCard.svelte";
  import info from "$lib/assets/avater.png";

  const services: ServiceCardProps[] = [
    {
      icon: info,
      title: "New ID Card",
      desc: "First registration for new staff members.",
      features: [
        "Biometric data capture",
        "Photo session included",
        "Express processing (3-5 days)",
        "Digital copy provided",
        "QR code integration",
      ],
      price: "# 5,000",
      buttonText: "Get new ID card",
      color: "#2563eb",
    },
    {
      icon: info,
      title: "ID Renewal",
      desc: "For expired or soon-to-expire cards.",
      features: ["Fast-track renewal", "Biometric update optional"],
      price: "# 2,000",
      buttonText: "Renew ID card",
      color: "#16a34a",
    },
    {
      icon: info,
      title: "ID Replacement",
      desc: "For lost or damaged cards.",
      features: [
        "Immediate deactivation of old card",
        "Reprint with new QR code",
      ],
      price: "# 3,000",
      buttonText: "Replace ID card",
      color: "#dc2626",
    },
    {
      icon: info,
      title: "Temporary Pass",
      desc: "For interns or short-term staff.",
      features: ["Valid up to 6 months", "Basic access only"],
      price: "# 1,500",
      buttonText: "Get temporary pass",
      color: "#9333ea",
    },
  ];
</script>

<!-- Grid layout -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap- w-full">
  {#each services as service}
    <ServiceCard data={service} />
  {/each}
</div>
