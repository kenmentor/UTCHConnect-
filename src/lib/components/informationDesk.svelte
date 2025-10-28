<script lang="ts">
  type Data = {
    img: string;
    title: string;
    description: string;
    id: string;
  };

  import info from "$lib/assets/info.png";
  import Information from "./Information.svelte";
  export let isReadmore = false;
  export let title: string = "Information Desk";
  export let desc: string = "";
  export let row = 3;
  export let displayHeader = false;
  export let data: Data[];
</script>

<section
  class="min-h-screen flex flex-col items-center justify-center md:py-16 p-4"
>
  {#if displayHeader}
    <div>
      <h5 class="pb-5 text-[16px] font-medium">
        Blog <span class="text-[var(--color-primary)]">Center</span>
      </h5>
    </div>
    <h1
      class="  text-2xl sm:text-3xl md:text-4xl lg:text-[42px] mb-6 text-center font-semibold"
    >
      {title}
    </h1>

    <p
      class="font-medium text-base sm:text-lg md:text-xl mb-10 text-[#00000099] w-full sm:w-4/5 md:w-3/5 lg:w-1/2 text-center"
    >
      {desc}
    </p>
  {/if}
  <!-- Responsive grid: 1 col on small, 2 cols on medium, 3 cols on lg+ -->
  <div
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-{row} gap-6 w-full max-w-7xl md:px-4"
  >
    {#each data as item}
      <Information
        thumbnail={item.img}
        title={item.title}
        desc={item.description}
        id={item.id}
      />
    {/each}
  </div>

  {#if isReadmore}
    <div class="py-12 px-10 flex w-full justify-end">
      <a
        href="/informationDesk"
        class="font-bold text-gray-600 text-[16px] underline">Read more</a
      >
    </div>
  {/if}
</section>
