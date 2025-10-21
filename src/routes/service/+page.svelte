<script>
  import Header from "$lib/components/Header.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import ServicesGrid from "$lib/components/ServicesGrid.svelte";
  import { Button } from "carbon-components-svelte";
</script>

<Header pageId={2} />

<Hero
  subtitle="Comprehensive digital identity and authentication services designed to enhance security, accountability, and service delivery at UCTH"
>
  <h1 class="w-full max-w-2xl text-4xl sm:text-5xl lg:text-6xl font-bold">
    Our <span class="text-blue-600">Services</span>
  </h1>
</Hero>
<section
  class="flex gap-[90px] justify-center items-center flex-col pt-[5px] pb-[200px]"
>
  <h1 class="font-semibold text-[48px]">THE UCTH DIGITAL REVOLUTION</h1>
  <p class="text-[20px] max-w-[869px] font-medium text-[#00000099]">
    What Epic is to Healthcare Systems, UCTH IDID is to African Medical Identity
    We're not just building healthcare software – we're architecting the future
    of African medical services. Through intelligent innovation and inclusive
    design, we make enterprise-grade healthcare identity technology work even
    where infrastructure is challenging, connecting every patient, doctor, and
    healthcare worker from the most remote clinic to world-class medical
    opportunities through secure digital identity and multi-platform
    accessibility.
  </p>
</section>

<section class="  py-[70px]">
  <div class="flex flex-col justify-center items-center gap-[27px]">
    <h3
      class="font-semibold text-[36px] max-w-[612px] text-center text-[#333333]"
    >
      The Four Pillars of UCTH Transformation
    </h3>

    <p class="text-[#333333] text-[25px] max-w-[863px]">
      Each platform is a masterpiece of engineering, designed to work
      independently yet thrive together in perfect digital harmony.
    </p>
  </div>
  <ServicesGrid />
</section>

<section
  class="flex flex-col text-center justify-center items-center gap-[40px]"
>
  <h1 class=" font-bold text-[52px] text-center max-w-[580px]">
    Ready to Revolutionize Healthcare?
  </h1>
  <p class=" text-[24px] text-[#333333] max-w-[986px] text-center">
    Join the digital transformation movement that's rewriting the future of
    African healthcare. Whether you're one clinic or one thousand hospitals, one
    patient or one million patients – your journey to medical excellence starts
    with a single click.
  </p>
  <div class="flex justify-center items-center pt-[50px] pb-[115px]">
    <div class="flex gap-[90px]">
      <button class="btn-transperent text-[20px] !px-[60px]">Log In</button>
      <button class="btn text-[20px] !px-[60px]">Sign Up</button>
    </div>
  </div>
</section>
