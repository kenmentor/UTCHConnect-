<script lang="ts">
  export let title: string;
  export let desc: string;
  export let id: string = "/";
  export let thumbnail: string;
</script>

<div class="flex flex-col gap-3.5 shadow-lg relative bg-white overflow-hidden">
  <!-- Date Badge -->
  <div
    class="bg-white/80 absolute left-3 top-3 z-10 p-2 text-center text-sm sm:text-base shadow"
  >
    <h2 class="font-bold">30</h2>
    <h2>Nov</h2>
    <h2>2021</h2>
  </div>

  <!-- Thumbnail -->
  <img src={thumbnail} alt="" class="aspect-video object-cover w-full" />

  <!-- Content -->
  <div class="p-4 sm:p-6">
    <h4 class="text-lg sm:text-xl md:text-2xl font-semibold mb-2">{title}</h4>
    <p class="text-sm sm:text-base md:text-lg text-left mb-3">
      {desc}
    </p>
    <a
      href={`/informationDesk/${id}/`}
      class="text-blue-600 hover:underline font-medium"
    >
      Read More
    </a>
  </div>
</div>
