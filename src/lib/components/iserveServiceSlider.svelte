<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { ChevronLeft, ChevronRight } from "lucide-svelte";
  import FeatureCard from "./FeatureCard.svelte";

  import icc from "$lib/assets/icc.png";
  import financialService from "$lib/assets/finicialService.png";
  import ClinIQx from "$lib/assets/Cliniqx.png";
  import biometricClocking from "$lib/assets/biometricClocking.png";
  import dashnoard from "$lib/assets/dashboard.png";
  export let serviceItems = [
    {
      id: "1",
      title: "ICC: Communication Centre",
      desc: "Internal messaging and feedback systems for seamless communication.",
      icon: icc,
      subtitle: "Services",
      features: ["News & Notices", "iMessenger", "iReport", "YOUlink Connect"],
      link: "/service/identity",
    },
    {
      id: "2",
      title: "Financial Services",
      desc: "Payment and payroll management made easy.",
      icon: financialService,
      subtitle: "PayIQue System",
      features: ["Salary Tracking", "Payslips", "Payment Management"],
      link: "/service/financial",
    },
    {
      id: "3",
      title: "Clinical & Operations",
      desc: "Hospital workflow and clinical management tools.",
      icon: ClinIQx,
      subtitle: "Platforms",
      features: ["ClinIQx", "EziBiz", "iScheduler", "Staff ID Cards"],
      link: "#",
    },
    {
      id: "4",
      title: "Biometric Clocking",
      desc: "Automated attendance and verification systems.",
      icon: biometricClocking,
      subtitle: "Smart Tools",
      features: ["Clock-In", "Verification", "Reports", "Data Analytics"],
      link: "#",
    },
    {
      id: "5",
      title: "Dashboard Analytics",
      desc: "Data visualization and insights at a glance.",
      icon: dashnoard,
      subtitle: "Insight System",
      features: ["Reports", "Charts", "KPIs", "Real-time Updates"],
      link: "#",
    },
  ];

  let current = 0;
  let interval = 4000;
  let timer: ReturnType<typeof setInterval> | null = null;
  let isHovering = false;

  const next = () => {
    current = (current + 1) % serviceItems.length;
  };
  const prev = () => {
    current = (current - 1 + serviceItems.length) % serviceItems.length;
  };

  function startAuto() {
    stopAuto();
    timer = setInterval(() => {
      if (!isHovering) next();
    }, interval);
  }

  function stopAuto() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  onMount(() => {
    startAuto();
  });
  onDestroy(() => {
    stopAuto();
  });
</script>

<div
  class="relative w-full overflow-hidden"
  on:mouseenter={() => (isHovering = true)}
  on:mouseleave={() => (isHovering = false)}
>
  <div>
    <h1
      class="text-[#161C2D] font-semibold text-[24px] md:text-[30px] lg:text-[34px] text-center mb-8"
    >
      What service do you need today?
    </h1>
  </div>
  <div
    class="flex transition-transform duration-700 ease-in-out"
    style="transform: translateX(-{current * 100}%); width: {100}%"
  >
    {#each serviceItems as item (item.id)}
      <div class="flex-shrink-0 w-full px-4">
        <div class="max-w-md lg:max-w-[600px] mx-auto py-8">
          <FeatureCard
            title={item.title}
            desc={item.desc}
            href={item.link}
            icon={item.icon}
            features={item.features}
            subtitle={item.subtitle}
          />
        </div>
      </div>
    {/each}
  </div>

  <!-- Navigation arrows -->
  <button
    on:click={prev}
    class="absolute bg-transparent shadow-none left-4 top-1/2 -translate-y-1/2 ounded-full p-2 shadow transition"
    aria-label="Previous"
  >
    <ChevronLeft size={50} color={"black"} />
  </button>
  <button
    on:click={next}
    class="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-transparent shadow-none p-2 shadow transition"
    aria-label="Next"
  >
    <ChevronRight size={50} color={"black"} />
  </button>

  <!-- Dots -->
  <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
    {#each serviceItems as _, i}
      <div
        on:click={() => (current = i)}
        class="w-2 h-2 rounded-full transition-all duration-300"
        class:bg-blue-600={i === current}
        class:bg-gray-300={i !== current}
      />
    {/each}
  </div>
</div>
