<script lang="ts">
  import logo from "$lib/assets/logo.png";
  import Dashboard from "carbon-icons-svelte/lib/Dashboard.svelte";
  import type { SvelteComponent } from "svelte";

  export let classStyle = "";

  // Type for a Svelte component constructor
  type IconComponent = typeof SvelteComponent;

  // each item can either have an img (string) or an icon (component)
  type SideItem = {
    link: string;
    icon: string | typeof Dashboard;
    type: "img" | "icon"; // keep explicit so template logic is easy
    name: string;
  };

  // default value is an array (you can keep a placeholder entry if you want)
  export let sideData: SideItem[];

  // runtime type guard: Svelte components are functions (constructor/class)
  const isComponent = (v: unknown): v is IconComponent =>
    typeof v === "function";
</script>

<!-- Sidebar -->
<div
  class={`absolute top-0 bottom-0 left-0 bg-[#0050E614] flex flex-col
         w-[80px] md:w-[380px] transition-all duration-300 ${classStyle}`}
>
  <nav class="flex-1 pt-6">
    <ul class="flex flex-col items-center md:items-start w-full">
      {#each sideData as item}
        <li class="w-full mb-4">
          <a
            href={`${item.link}`}
            class="py-3 px-2 md:px-[70px] hover:bg-white w-full flex justify-center md:justify-start transition"
          >
            <div
              class="flex items-center gap-0 md:gap-2 text-[12px] md:text-[22px] text-black"
            >
              {#if item.type === "img"}
                <!-- item.icon must be a string when type === "img" -->
                <img
                  src={item.icon as string}
                  alt={item.name}
                  class="w-6 h-6 md:w-8 md:h-8"
                />
              {:else}
                <!-- for icons, use svelte:component and guard it -->
                {#if isComponent(item.icon)}
                  <svelte:component
                    this={item.icon}
                    class="w-6 h-6 md:w-8 md:h-8 text-gray-800"
                  />
                {:else}
                  <!-- fallback if something is wrong -->
                  <span class="inline-block w-6 h-6 md:w-8 md:h-8 bg-gray-200"
                  ></span>
                {/if}
              {/if}
              <span class="hidden md:inline text-[22px] font-medium"
                >{item.name}</span
              >
            </div>
          </a>
        </li>
      {/each}
    </ul>

    <!-- Footer (logo + brand) -->
    <div
      class="pl-4 border-t border-gray-300 flex flex-col md:flex-row items-center md:items-center gap-2"
    >
      <img src={logo} alt="logo" class="md:w-[40px] h-full object-cover" />
      <h2 class="hidden md:block text-black text-[22px]">
        <span class="text-[var(--color-primary)]">UCTH</span> IDID
      </h2>
    </div>
  </nav>
</div>
