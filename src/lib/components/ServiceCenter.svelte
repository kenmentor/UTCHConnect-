<script>
  import ServicesGrid from "./ServicesGrid.svelte";
</script>

<section
  class="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-zinc-50"
>
  <div class="w-full max-w-[710px] text-center py-5">
    <h5 class="pb-5 text-[16px] font-medium">
      Service <span class="text-[var(--color-primary)]">Center</span>
    </h5>
    <h2 class="text-2xl sm:text-3xl md:text-4xl font-medium">
      What service do you need today?
    </h2>
    <p
      class="pt-[20px] text-[#00000099] text-[15px] sm:text-[16px] font-medium leading-relaxed"
    >
      Access our comprehensive digital services designed to streamline your
      hospital experience. Choose from our range of secure, efficient, and
      user-friendly solutions.
    </p>
  </div>

  <ServicesGrid />
</section>
