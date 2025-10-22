<script>
  import FeatureCard from "./FeatureCard.svelte";

  // Assets
  import Coffee from "$lib/assets/Coffee.png";
  import calendar from "$lib/assets/calendar.png";
  import avater from "$lib/assets/avater.png";
  import Group from "$lib/assets/Group.png";
  // Service items
  const serviceItems = [
    {
      id: "1",
      title: "Identity & Access",
      desc: "Digital identity and access management",
      icon: avater,
      subtitle: "Services  ",
      features: [
        "Personnel IDID ",
        " SmartHealth IDID",
        " BAAMS (Biometric) ",
        " iPass System",
      ],
      link: "service/identity",
    },
    {
      id: "2",
      title: "Financial Services",
      desc: "Payment and salary management",
      icon: Coffee,
      subtitle: "PayIQue System",
      features: [" Salary Tracking", "  Payslips", " Payment Management"],
      link: "service/financial",
    },
    {
      id: "3",
      title: "Communication Hub",
      desc: "Internal messaging and feedback systems",
      icon: Group,
      subtitle: "Features",

      features: ["UCTH Messenger", "  Feedback", " iReport", "System"],
      link: "service/identity",
    },

    {
      id: "4",
      title: "Clinical & Operations",
      desc: "Hospital operations and clinical systems.",
      icon: calendar,
      subtitle: "Platforms",
      features: [
        " Platforms",
        "  ClinIQx",
        " EziBiz",
        " iScheduler",
        "   Staff ID Cards",
      ],
      link: "service/identity",
    },
  ];
</script>

<section class="bg-white w-full py-14">
  <div class="max-w-7xl mx-auto px-6 lg:px-12">
    <!-- Responsive Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
      {#each serviceItems as item (item.id)}
        <FeatureCard
          title={item.title}
          desc={item.desc}
          href={`/${item.link}`}
          icon={item.icon}
          features={item.features}
          subtitle={item.subtitle}
        />
      {/each}
    </div>
  </div>
</section>
