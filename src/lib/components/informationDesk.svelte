<script lang="ts">
  import info from "$lib/assets/info.png";
  import Information from "./Information.svelte";

  export let title: string = "Information Desk";

  const data = [
    {
      img: info,
      title: "CMD Office: New Policy Updates.",
      description:
        "Important policy changes from the Chief Medical Director's office regarding patient care protocols and staff guidelines.",
      id: "1",
    },
    {
      img: info,
      title: "CMD Office: New Policy Updates.",
      description:
        "Important policy changes from the Chief Medical Director's office regarding patient care protocols and staff guidelines.",
      id: "2",
    },
    {
      img: info,
      title: "CMD Office: New Policy Updates.",
      description:
        "Important policy changes from the Chief Medical Director's office regarding patient care protocols and staff guidelines.",
      id: "3",
    },
    {
      img: info,
      title: "CMD Office: New Policy Updates.",
      description:
        "Important policy changes from the Chief Medical Director's office regarding patient care protocols and staff guidelines.",
      id: "4",
    },
  ];
</script>

<section
  class="min-h-screen flex flex-col items-center justify-center bg-zinc-50 py-16"
>
  <h2 class="text-2xl sm:text-3xl font-bold mb-10 text-center">
    {title}
  </h2>

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
</section>
