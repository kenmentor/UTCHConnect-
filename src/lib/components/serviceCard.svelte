<script context="module" lang="ts">
  // filepath: serviceCard.svelte
  export interface ServiceCardProps {
    Icon?: ConstructorOfATypedSvelteComponent;
    color?: string;
    title: string;
    desc?: string;
    features?: { name: string; list: string[] };
    price?: string;
    buttonText?: string;
    link: string;
  }
</script>

<script lang="ts">
  import { Button } from "carbon-components-svelte";
  import type { Component } from "lucide-svelte";

  // Predefined color palette
  const palette = [
    "#2563eb", // blue-600
    "#16a34a", // green-600
    "#dc2626", // red-600
    "#9333ea", // purple-600
    "#f59e0b", // amber-500
    "#0891b2", // cyan-600
  ];

  export let data: ServiceCardProps;

  // Auto-fallbacks
  const color =
    data.color || palette[Math.floor(Math.random() * palette.length)];
  const buttonText = data.buttonText ?? "Learn more";
</script>

<div
  class="px-[34px] py-[46px] m-3.5 flex flex-col gap-[24px] outline md:h-[600px] shadow flex-1 w-full max-w-[567px]"
  style={`outline-color: ${color};`}
>
  <!-- Header -->
  <div class="flex gap-3 items-center">
    {#if data.Icon}
      <div
        class="p-2 size-[54px] flex items-center justify-center"
        style={`background-color: ${color};`}
      >
        <!-- <img
          src={data.icon}
          alt={data.title}
          class="max-h-full max-w-full object-contain"
        /> -->
        <data.Icon size={25} color={"white"} />
      </div>
    {/if}
    <div>
      <h2
        class=" text-left font-medium text-[28px] text-[#333333] text-lg lg:text-[30px]"
      >
        {data.title}
      </h2>
    </div>
  </div>
  <p class="text-[#333333] text-[22px] text-left">
    {data.desc}
  </p>

  <!-- Features -->
  <div>
    <h3 class=" font-semibold text-[22px] text-[#333333]">Features:</h3>
  </div>
  {#if data.features?.list?.length}
    <ul
      class="list-disc text-[22px] flex flex-col text-[#333333] gap-[18px] pl-6 flex-grow"
    >
      {#each data.features.list as feature}
        <li>{feature}</li>
      {/each}
    </ul>
  {/if}

  <!-- Price -->
  {#if data.price}
    <h2 class="font-bold text-xl mt-auto" style={`color: ${color};`}>
      {data.price}
    </h2>
  {/if}

  <!-- CTA Button -->
  <div>
    <a href={`${data.link}`}>
      <button
        class=" text-[22px] !w-full !flex !items-center !justify-center font-medium !px-[18px]"
        style={`background-color: ${color};`}
      >
        {buttonText}
      </button>
    </a>
  </div>
</div>
