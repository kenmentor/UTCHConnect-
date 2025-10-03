<script lang="ts">
  import info from "$lib/assets/info.png";
  import Information from "./Information.svelte";

  export let title: string = "Latest News & Updates";
  export let desc: string =
    "Stay informed with the latest developments, policy changes, and important announcements from UCTH";

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
</section>
