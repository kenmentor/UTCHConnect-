<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import { Button } from "carbon-components-svelte";
  import { ArrowLeft } from "carbon-icons-svelte";

  const goBack = () => {
    window.history.back();
  };
</script>

<section
  class="min-h-screen flex flex-col items-center justify-center bg-white text-center px-6"
>
  <div class="flex flex-col items-center">
    <h1
      class="text-[140px] font-bold leading-none text-[var(--color-primary)] animate-pulse"
    >
      404
    </h1>
    <h2 class="text-2xl font-semibold text-gray-800 mt-2">Page Not Found</h2>
    <p class="text-gray-500 mt-3 max-w-md">
      Sorry, the page you’re looking for doesn’t exist or has been moved. Try
      going back or return to the homepage.
    </p>

    <div class="flex gap-4 mt-8">
      <Button
        kind="secondary"
        class="flex items-center gap-2 text-[var(--color-primary)] border-[var(--color-primary)]"
        on:click={goBack}
      >
        <ArrowLeft /> Go Back
      </Button>

      <a href="/" class="no-underline">
        <Button
          kind="primary"
          class="bg-[var(--color-primary)] hover:opacity-90"
        >
          Go Home
        </Button>
      </a>
    </div>
  </div>
</section>
<Footer />
