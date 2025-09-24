<script>
  import FeatureCard from "./FeatureCard.svelte";

  // Assets
  import Coffee from "$lib/assets/Coffee.png";
  import calendar from "$lib/assets/calendar.png";
  import money from "$lib/assets/money.png";
  import message from "$lib/assets/message.png";
  import avater from "$lib/assets/avater.png";
  import Group from "$lib/assets/Group.png";

  // Service items
  const serviceItems = [
    {
      id: "idid-profile",
      title: "IDID Profile Management",
      desc: "Quick and easy IDID profile creation and management.",
      icon: avater,
    },
    {
      id: "staff-id",
      title: "Staff Identity Card Services",
      desc: "Request and pay for staff identity cards.",
      icon: Coffee,
    },
    {
      id: "bio-clock",
      title: "Biometric Clocking Service",
      desc: "Secure authentication for time tracking and attendance.",
      icon: Group,
    },
    {
      id: "scheduler",
      title: "UCTH iScheduler",
      desc: "Appointment scheduling system for UCTH.",
      icon: calendar,
    },
    {
      id: "messenger",
      title: "UCTH Messenger",
      desc: "Internal secure messaging for staff and departments.",
      icon: message,
    },
    {
      id: "paylive",
      title: "UCTH PayLive",
      desc: "Payments and billing for hospital services.",
      icon: money,
    },
  ];
</script>

<section class="bg-white w-full py-14">
  <div class="max-w-7xl mx-auto px-6 lg:px-12">
    <h2 class="text-2xl md:text-3xl font-bold text-center mb-12">
      Our Core Services
    </h2>

    <!-- Responsive Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each serviceItems as item (item.id)}
        <FeatureCard
          title={item.title}
          desc={item.desc}
          href={`/${item.id}`}
          icon={item.icon}
        />
      {/each}
    </div>
  </div>
</section>
