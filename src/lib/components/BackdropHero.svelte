<script lang="ts">
  export let subtitle: string = "Hero Subtitle";

  import backgroundimage from "$lib/assets/backgroundimage.jpg";
</script>

<section
  class="relative flex flex-col-reverse items-center justify-center
         text-center gap-8 sm:gap-10 lg:gap-16
         min-h-[60vh] sm:min-h-[65vh] md:min-h-[15vh] lg:min-h-[20vh]
         pt-[120px] sm:pt-[140px] md:pt-[160px] lg:pt-[180px]
         px-4 sm:px-8 md:px-12 lg:px-20 xl:px-[140px]
         bg-cover bg-center transition-all duration-500 ease-out"
  style="background-image: url({backgroundimage}); background-position: center;"
>
  <!-- Overlay -->
  <div
    class="absolute inset-0 z-0 bg-gradient-to-t from-white/100 via-white/95 to-white/50"
  ></div>

  <!-- Content -->
  <div class="relative z-10 flex flex-col items-center justify-center w-full">
    <h1
      class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900"
    >
      <slot />
    </h1>

    <p
      class="mt-4 sm:mt-6 text-center font-medium
              text-[#00000099] text-base sm:text-lg md:text-xl lg:text-2xl w-full max-w-[717px]"
    >
      {subtitle}
    </p>

    <div
      class="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-4"
    ></div>
  </div>
</section>
