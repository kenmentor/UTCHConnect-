<!-- Hero.svelte -->
<script lang="ts">
  export let subtitle: string = "Hero Subtitle";

  import logo from "$lib/assets/logo.png";
  import backgroundimage from "$lib/assets/backgroundimage.jpg";
  import { ArrowRight } from "carbon-icons-svelte";
</script>

<section
  class="relative flex flex-col-reverse lg:flex-row min-h-screen items-center justify-between
         gap-10 lg:gap-20 bg-center bg-cover px-4 sm:px-8 md:px-12 lg:px-20 xl:px-[140px]"
  style="background-image: url({backgroundimage}); background-position: center;"
>
  <!-- Overlay -->
  <div
    class="absolute inset-0 z-0 bg-gradient-to-t from-white/100 via-white/95 to-white/50"
  ></div>

  <!-- Left Content -->
  <div
    class="z-10 flex flex-col gap-6 sm:gap-8 lg:gap-10 flex-1 text-center lg:text-left"
  >
    <span class="text-left">
      <slot />
    </span>
    <p
      class="text-[22px] lg:text-left font-light md:text-lg lg:text-[22px] sm:text-left"
    >
      {subtitle}
    </p>
    <div>
      <button
        class=" btn mx-auto lg:mx-0 !px-[25px] flex gap-[10px] text-white py-[11px] text-[16px]"
        color="red"
      >
        Get Started <ArrowRight />
      </button>
    </div>
  </div>

  <!-- Right Image -->
  <div
    class="z-10 flex-1 flex items-center pt-24 justify-center lg:justify-end lg:pt-[0px]"
  >
    <img
      src={logo}
      alt="Logo"
      class="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[355px] object-contain"
    />
  </div>
</section>

<style>
  .btn {
    padding: 15px 30px;
    background: var(--color-primary);
    color: white;
  }
</style>
