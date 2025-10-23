<script lang="ts">
  export let title: string;
  export let desc: string;
  export let id: string = "/";
  export let thumbnail: string;
  // new date prop with default
  export let date: string | Date = new Date();

  // Format date
  const dateObj = new Date(date);

  const day = dateObj.getDate().toString().padStart(2, "0"); // "30"
  const month = dateObj.toLocaleString("default", { month: "short" }); // "Nov"
  const year = dateObj.getFullYear(); // "2021"
</script>

<div class="flex flex-col gap-3.5 shadow-lg relative bg-white overflow-hidden">
  <!-- Date Badge -->
  <div
    class="bg-white/80 absolute left-3 top-3 z-10 p-2 text-center text-sm sm:text-base shadow"
  >
    <h2 class="text-[22px] font-medium">{day}</h2>
    <h2 class="text-[16px]">{month}</h2>
    <h2 class="text-[16px]">{year}</h2>
  </div>

  <!-- Thumbnail -->
  <img src={thumbnail} alt="" class="aspect-video object-cover w-full" />

  <!-- Content -->
  <div class="p-4 sm:p-6">
    <h4
      class="overflow-hidden text-ellipsis whitespace-nowrap text-lg sm:text-xl md:text-[22px] font-medium mb-2 text-[#333333]"
    >
      {title}
    </h4>
    <p
      class="text-[11px] sm:text-base md:text-lg text-left text-[#494949] mb-3"
    >
      {desc}
    </p>
    <a
      href={`/informationDesk/${id}/`}
      class="text-[var(--color-primary)] text-[16px] hover:underline font-medium underline"
    >
      Read More
    </a>
  </div>
</div>
