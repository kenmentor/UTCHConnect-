<script lang="ts">
  import { Home, ArrowRight } from "carbon-icons-svelte";
  import { page } from "$app/stores"; // works in SvelteKit
  export let segments = [""];
  // reactive URL parts

  $: if ($page?.url && !segments) {
    // split pathname into segments, remove empty strings
    segments = $page.url.pathname.split("/").filter(Boolean);
  }

  // helper to build link for each segment
  function buildPath(index: number) {
    return "/" + segments.slice(0, index + 1).join("/");
  }
</script>

<nav aria-label="Breadcrumb" class="py-4">
  <ol class="flex flex-wrap items-center gap-2 text-[16px] md:text-[18px]">
    <!-- Home link -->
    <li class="flex items-center gap-1">
      <a href="/" class="flex items-center gap-1 text-blue-600 hover:underline">
        <Home class="size-[20px] md:size-[24px]" aria-hidden="true" />
        <span>Home</span>
      </a>
    </li>

    <!-- Dynamic segments -->
    {#each segments as segment, i}
      <li class="flex items-center gap-2">
        <ArrowRight
          class="text-gray-400 size-[18px] md:size-[22px]"
          aria-hidden="true"
        />

        {#if i < segments.length - 1}
          <a
            href={buildPath(i)}
            class="text-blue-600 hover:underline capitalize"
          >
            {segment.replace(/-/g, " ")}
          </a>
        {:else}
          <span class="text-gray-700 font-medium capitalize">
            {segment.replace(/-/g, " ")}
          </span>
        {/if}
      </li>
    {/each}
  </ol>
</nav>
