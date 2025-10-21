<!--
  FeatureCard.svelte
   reusable card for services grid.
  Props: title, desc, icon (URL), href
-->
<script lang="ts">
  export let title: string;
  export let desc: string;
  export let href: string = "#";
  export let icon: string | null = null;
  export let subtitle: string = "";
  export let features: string[] = [];

  import { Button } from "carbon-components-svelte";
  import { ArrowRight, Earth } from "carbon-icons-svelte";
</script>

<div
  class="m-3.5 shadow-xl bg-[#E8EFFE80] p-10 flex flex-col items-center gap-5 w-full h-full"
>
  <!-- Icon section -->
  {#if icon}
    <div class="p-3 bg-white">
      <img src={icon} alt={`${title} icon`} class="h-12 w-12 object-contain" />
    </div>
  {/if}

  <!-- Title -->
  <div class=" ">
    <h2 class=" font-semibold text-center text-[32px] font-medium">{title}</h2>

    <!-- Description -->
    <p class="text-[20px] text-center text-gray-700 font-medium">{desc}</p>
  </div>
  <div class=" flex flex-col items-center">
    <p class="text-[18px] text-[#00000099] font-medium py-0">
      {subtitle}:
    </p>
    <div class=" w-[55%] text-center">
      {#each features as item}
        <span class=" text-[16px] text-[#00000099] font-medium"
          >{""} •{item}</span
        >
      {/each}
    </div>
  </div>
  <!-- <h1 class="font-plex font-semibold text-3xl">Heading from Figma</h1>
  <p class="font-plex text-base font-medium">Body text from Figma</p> -->

  <!-- Action -->
  <div>
    <a {href}>
      <button
        class="  btn flex gap-[10px] !bg-transparent !text-[var(--color-primary)] items-center"
        >Get Started <ArrowRight />
      </button>
    </a>
  </div>
</div>

<style>
  .btn {
    padding: 15px 30px;
    font-size: 16px;

    font-weight: 600;
    font-size: 16px;

    line-height: 30px;
    letter-spacing: 0%;
  }
</style>
