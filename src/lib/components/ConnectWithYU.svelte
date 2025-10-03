<script>
  import { Button } from "carbon-components-svelte";
  import { ArrowRight } from "carbon-icons-svelte"; // changed from ArrowLeft
  import connect from "$lib/assets/CONNECT.png";
  import minicutlin from "$lib/assets/mingcute_link-fill.png";
</script>

<section
  class="flex min-h-screen items-center justify-center bg-white py-12 px-4 sm:px-8 lg:px-16"
>
  <div
    class="flex flex-col lg:flex-row w-full max-w-6xl shadow-lg overflow-hidden"
  >
    <!-- Left Content -->
    <div class="flex flex-col gap-6 p-6 lg:p-10 flex-1">
      <div class=" ">
        <img
          src={minicutlin}
          alt="Link Icon"
          class="p-2 bg-blue-50 h-[70px] w-[70px]"
        />
      </div>

      <div class="flex flex-col gap-4">
        <h3 class="text-2xl font-semibold">Connect with YOUreka</h3>
        <p class="text-left text-gray-700">
          Establish a secure YOUreka integrated single-sign-on system for
          seamless access to all services through one account.
        </p>
      </div>

      <div>
        <button
          class="btn flex gap-[10px]"
          style="background-color: var(--color-primary);"
          >Get Started <ArrowRight />
        </button>
      </div>
    </div>

    <!-- Right Image -->
    <div class="flex-1">
      <img
        src={connect}
        alt="Connect illustration"
        class="object-cover w-full h-full aspect-[5/4] lg:aspect-auto"
      />
    </div>
  </div>
</section>
