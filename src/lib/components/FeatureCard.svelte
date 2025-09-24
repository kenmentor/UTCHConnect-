<!--
  FeatureCard.svelte
  Premium, reusable card for services grid.
  Props: title, desc, icon (URL), href
-->
<script lang="ts">
  export let title: string;
  export let desc: string;
  export let href: string = "#";
  export let icon: string | null = null;

  import { Button } from "carbon-components-svelte";
  import { ArrowRight } from "carbon-icons-svelte";
</script>

<div
  class="m-3.5 shadow-xl bg-[#E8EFFE57] p-10 flex flex-col items-center gap-5 w-full h-full"
>
  <!-- Icon section -->
  {#if icon}
    <div class="p-3 bg-white">
      <img src={icon} alt={`${title} icon`} class="h-12 w-12 object-contain" />
    </div>
  {/if}

  <!-- Title -->
  <h2 class="text-xl font-semibold text-center">{title}</h2>

  <!-- Description -->
  <p class="text-[16px] text-center text-gray-700">{desc}</p>

  <!-- Action -->
  <div>
    <Button icon={ArrowRight} {href}>Get Started</Button>
  </div>
</div>
