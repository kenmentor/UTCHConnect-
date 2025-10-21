<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import {
    Button,
    Tile,
    Grid,
    Row,
    Column,
    ContentSwitcher,
    Switch,
  } from "carbon-components-svelte";
  import {
    Rocket,
    Collaborate,
    Accessibility,
    Idea,
    IotConnect,
  } from "carbon-icons-svelte";

  // Team values
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

  // Timeline items
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

  // Team members
  const team = [
    {
      name: "Elihu Osim",

      img: "/team/mentor.jpg",
    },
    { name: "Foluso Adebisi", role: "", img: "/team/jane.jpg" },
  ];
</script>

<Header pageId={3} />
<!-- Hero -->
<Hero
  subtitle="Comprehensive digital identity and authentication services designed to enhance security, accountability, and service delivery at UCTH"
>
  <h1 class="w-full max-w-2xl text-4xl sm:text-5xl lg:text-6xl font-bold">
    Our <span class="text-blue-600"> About Us</span>
  </h1>
</Hero>

<!-- Values -->

<!-- Timeline -->
<main class="">
  <section class="flex px-[130px] gap-[190px] pt-[80px] pb-[225px]">
    <div class=" flex-1 flex gap-[30px] flex-col">
      <h3 class="font-semibold !text-[var(--color-primary)] p-0 m-0">
        THE GENESIS OF TRANSFORMATION
      </h3>
      <h1 class="font-semibold">Born from Excellence, Built for Innovations</h1>

      <p class=" text-[24px] font-[500] text-[#333333] text-left max-w-[570px]">
        In the bustling medical corridors of YOUreka Technologies, a profound
        realization sparked a revolution: millions of Nigerian patients were
        invisible to the very healthcare systems meant to serve them. <br />
        Traditional healthcare infrastructure was fragmented, inefficient, and left
        entire communities digitally stranded. While the world built apps for convenience,
        we asked a different question: What if technology could thrive where healthcare
        barely exists?<br />
        <span class=" text italic font-semibold">
          "Every patient deserves to be seen, supported, and successful –
          regardless of their location, their economic status, or their family's
          medical history."
        </span>
      </p>
    </div>
    <div class=" flex flex-1 flex-col gap-[45px] max-w-[480px]">
      <div
        class=" text-center max-w-[476px] bg-[#D8DAE5] text-[#0057B8] font-semibold text-[34px] px-[29px] py-[60px]"
      >
        Every Patient Visible 75,000+ Patients Connected
      </div>
      <div
        class=" text-center max-w-[476px] bg-[#D8DAE5] text-[#0057B8] font-semibold text-[34px] px-[29px] py-[60px]"
      >
        Every Department Smart 45+ Departments Digitized
      </div>
      <div
        class=" text-center max-w-[476px] bg-[#D8DAE5] text-[#0057B8] font-semibold text-[34px] px-[29px] py-[60px]"
      >
        Every Future Possible 25 States Reached
      </div>
    </div>
  </section>

  <section class=" flex flex-col gap-[45px] px-[125px] bg-[#F9F9F9] py-[65px]">
    <div>
      <h1 class="font-bold text-[#333333] text-center">
        The Revolution in Numbers
      </h1>
    </div>
    <div class="p-[34px] shadow-md flex justify-between gap-5">
      <div class="flex gap-[20px]">
        <div
          class=" flex bg-[#F4F6F9] items-center justify-center rounded-full size-[58px]"
        >
          icon
        </div>
        <div class="flex flex-col gap-[7px]">
          <h3 class="text-[#27B94E] font-bold text-[32px]">850+</h3>
          <span class="text-[16px] font-normal text-[#4D607D]">
            Bed Available
          </span>
        </div>
      </div>
      <div class="flex gap-[20px]">
        <div
          class=" flex bg-[#F4F6F9] items-center justify-center rounded-full size-[58px]"
        >
          icon
        </div>
        <div class="flex flex-col gap-[7px]">
          <h3 class="text-[#FFA41B] font-bold text-[32px]">2,500+</h3>
          <span class="text-[16px] font-normal text-[#4D607D]">
            Healthcare Professionals
          </span>
        </div>
      </div>
      <div class="flex gap-[20px]">
        <div
          class=" flex bg-[#F4F6F9] items-center justify-center rounded-full size-[58px]"
        >
          icon
        </div>
        <div class="flex flex-col gap-[7px]">
          <h3 class="text-[#D60000] font-bold text-[32px]">1,200+</h3>
          <span class="text-[16px] font-normal text-[#4D607D]">
            Medical Students & Residents
          </span>
        </div>
      </div>
    </div>
  </section>
</main>
<Footer />
