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
  export let title: string = "Latest News & Updates";
  export let desc: string = "";

  export let data: Data[];
</script>

<section
  class="min-h-screen flex flex-col items-center justify-center bg-zinc-50 py-16"
>
  <h1
    class="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] mb-6 text-center font-semibold"
  >
    {title}
  </h1>

  <p
    class="font-medium text-base sm:text-lg md:text-xl mb-10 text-[#00000099] w-full sm:w-4/5 md:w-3/5 lg:w-1/2 text-center"
  >
    {desc}
  </p>

  <!-- Responsive grid: 1 col on small, 2 cols on medium, 3 cols on lg+ -->
  <div
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl px-4"
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
