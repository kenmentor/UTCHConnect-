<script lang="ts">
  import { onMount } from "svelte";
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";
  import Hero from "$lib/components/Hero.svelte";

  import {
    Rocket,
    Collaborate,
    Accessibility,
    Idea,
    Stethoscope,
  } from "carbon-icons-svelte";

  import { BedIcon, BookIcon, GraduationCap } from "lucide-svelte";

  const values = [
    {
      icon: Rocket,
      title: "Innovation",
      desc: "We push boundaries with cutting-edge solutions that make a difference.",
    },
    {
      icon: Collaborate,
      title: "Collaboration",
      desc: "We believe teamwork and transparency drive the best outcomes.",
    },
    {
      icon: Accessibility,
      title: "Accessibility",
      desc: "Technology should empower everyone, everywhere, without barriers.",
    },
    {
      icon: Idea,
      title: "Creativity",
      desc: "We solve problems with design thinking and imagination.",
    },
  ];

  let active = 0;
  const timeline = [
    {
      title: "Our Mission",
      desc: "Empowering individuals and businesses with accessible technology solutions that inspire growth and impact.",
    },
    {
      title: "Our Vision",
      desc: "To be the leading force in innovation across Africa, building tools that change lives globally.",
    },
    {
      title: "Our Story",
      desc: "Founded by passionate engineers and creators, we’ve grown into a team dedicated to pushing boundaries in tech.",
    },
  ];

  const team = [
    { name: "Elihu Osim", img: "/team/mentor.jpg" },
    { name: "Foluso Adebisi", img: "/team/jane.jpg" },
  ];

  // ---- Count-up Animation ----
  let beds = 0;
  let professionals = 0;
  let students = 0;

  const animateCount = (
    target: number,
    setter: (n: number) => void,
    duration = 1500
  ) => {
    let start = 0;
    const increment = target / (duration / 16);
    const step = () => {
      start += increment;
      if (start < target) {
        setter(Math.floor(start));
        requestAnimationFrame(step);
      } else {
        setter(target);
      }
    };
    requestAnimationFrame(step);
  };

  // Trigger animation when section enters viewport
  onMount(() => {
    const section = document.querySelector("#stats-section");
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCount(850, (n) => (beds = n));
          animateCount(2500, (n) => (professionals = n));
          animateCount(1200, (n) => (students = n));
          observer.disconnect(); // only run once
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(section);
  });
</script>

<Header pageId={3} />

<!-- Hero -->
<Hero
  subtitle="Comprehensive digital identity and authentication services designed to enhance security, accountability, and service delivery at UCTH"
>
  <h1
    class="w-full max-w-2xl text-3xl sm:text-4xl lg:text-6xl font-bold text-center sm:text-left"
  >
    Our <span class="text-blue-600">About Us</span>
  </h1>
</Hero>

<main>
  <!-- Genesis of Transformation -->
  <section
    class="flex flex-col lg:flex-row px-6 sm:px-10 lg:px-[130px] gap-10 lg:gap-[190px] pt-16 sm:pt-[80px] pb-20 sm:pb-[225px]"
  >
    <div class="flex-1 flex flex-col gap-6 sm:gap-[30px]">
      <h3 class="font-semibold text-[var(--color-primary)]">
        THE GENESIS OF TRANSFORMATION
      </h3>
      <h1 class="font-semibold text-2xl sm:text-3xl">
        Born from Excellence, Built for Innovations
      </h1>

      <p
        class="text-base sm:text-lg md:text-[24px] font-[500] text-[#333333] text-left max-w-[570px]"
      >
        In the bustling medical corridors of YOUreka Technologies, a profound
        realization sparked a revolution: millions of Nigerian patients were
        invisible to the very healthcare systems meant to serve them. <br />
        Traditional healthcare infrastructure was fragmented, inefficient, and left
        entire communities digitally stranded. While the world built apps for convenience,
        we asked a different question: What if technology could thrive where healthcare
        barely exists?<br />
        <span class="italic font-semibold">
          "Every patient deserves to be seen, supported, and successful –
          regardless of their location, their economic status, or their family's
          medical history."
        </span>
      </p>
    </div>

    <div
      class="flex flex-col flex-1 gap-6 sm:gap-[45px] w-full max-w-[480px] mx-auto"
    >
      <div
        class="text-center bg-[#D8DAE5] text-[#0057B8] font-semibold text-2xl sm:text-[34px] px-6 sm:px-[29px] py-10 sm:py-[60px] rounded-md"
      >
        Every Patient Visible <br class="sm:hidden" /> 75,000+ Patients Connected
      </div>
      <div
        class="text-center bg-[#D8DAE5] text-[#0057B8] font-semibold text-2xl sm:text-[34px] px-6 sm:px-[29px] py-10 sm:py-[60px] rounded-md"
      >
        Every Department Smart <br class="sm:hidden" /> 45+ Departments Digitized
      </div>
      <div
        class="text-center bg-[#D8DAE5] text-[#0057B8] font-semibold text-2xl sm:text-[34px] px-6 sm:px-[29px] py-10 sm:py-[60px] rounded-md"
      >
        Every Future Possible <br class="sm:hidden" /> 25 States Reached
      </div>
    </div>
  </section>

  <!-- Revolution in Numbers -->
  <section
    id="stats-section"
    class="flex flex-col gap-[45px] px-6 sm:px-[60px] lg:px-[125px] bg-[#F9F9F9] py-[65px]"
  >
    <h1 class="font-bold text-[#333333] text-2xl sm:text-3xl text-center">
      The Revolution in Numbers
    </h1>

    <div
      class="p-6 sm:p-[34px] shadow-md flex flex-col sm:flex-row items-start justify-between gap-6 sm:gap-5 rounded-md"
    >
      <div
        class="flex items-center gap-5 sm:gap-[20px] justify-center sm:justify-start"
      >
        <div
          class="flex bg-[#F4F6F9] items-center justify-center rounded-full size-[58px]"
        >
          <BedIcon color="#27B94E" />
        </div>
        <div class="flex flex-col gap-1 text-center sm:text-left">
          <h3
            class="text-[#27B94E] text-left font-bold text-2xl sm:text-[32px]"
          >
            {beds}+
          </h3>
          <span class="text-[16px] font-normal text-[#4D607D]"
            >Bed Available</span
          >
        </div>
      </div>

      <div
        class="flex items-center gap-5 sm:gap-[20px] justify-center sm:justify-start"
      >
        <div
          class="flex bg-[#F4F6F9] items-center justify-center rounded-full size-[58px]"
        >
          <Stethoscope color="#FFA41B" />
        </div>
        <div class="flex flex-col gap-1 text-center sm:text-left">
          <h3
            class="text-[#FFA41B] text-left font-bold text-2xl sm:text-[32px]"
          >
            {professionals}+
          </h3>
          <span class="text-[16px] font-normal text-[#4D607D]">
            Healthcare Professionals
          </span>
        </div>
      </div>

      <div
        class="flex items-center gap-5 sm:gap-[20px] justify-center sm:justify-start"
      >
        <div
          class="flex bg-[#F4F6F9] items-center justify-center rounded-full size-[58px]"
        >
          <BookIcon color="#D60000" />
        </div>
        <div class="flex flex-col gap-1 text-center sm:text-left">
          <h3
            class="text-[#D60000] text-left font-bold text-2xl sm:text-[32px]"
          >
            {students}+
          </h3>
          <span class="text-[16px] font-normal text-[#4D607D]">
            Medical Students & Residents
          </span>
        </div>
      </div>
    </div>
  </section>
</main>

<Footer />
