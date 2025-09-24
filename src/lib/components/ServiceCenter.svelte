<script>
  import ServicesGrid from "./ServicesGrid.svelte";
</script>

<section class="flex flex-col items-center bg-white justify-center">
  <div class="w-[710px] text-center py-5">
    <h5 class="pb-5 text-[16px]">
      service <span class="text-blue-500">Center</span>
    </h5>
    <h2 class="text-4xl text-[32px]">What service do you need today?</h2>
    <p class=" pt-[20px]">
      Access our comprehensive digital services designed to streamline your
      hospital experience. Choose from our range of secure, efficient, and
      user-friendly solutions.
    </p>
  </div>
  <ServicesGrid />
</section>
