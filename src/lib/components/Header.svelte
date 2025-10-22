<script lang="ts">
  import { Button } from "carbon-components-svelte";
  import { Menu, Close } from "carbon-icons-svelte";
  // import YOUreka from "$lib/assets/YOUREKA.png";
  import not from "$lib/assets/avater.png";

  export let authorized: boolean = false;
  export let pageId: number = 1;

  let mobileMenuOpen: boolean = false;
  const YOUreka = "https://your-logo-url.com/YOUREKA.png"; // Replace with actual logo URL
  // Navigation links
  let navigation = [
    { link: "/", name: "Home", id: 1 },
    { link: "/service", name: "Service", id: 2 },
    { link: "/about-us", name: "About Us", id: 3 },
    { link: "/informationDesk", name: "Info Desk", id: 4 },
  ];
</script>

<header
  class="z-20 p-3 sm:px-6 md:px-2 lg:px-20 xl:px-[140px]
         bg-white/30 backdrop-blur-md flex items-center
         top-0 left-0 fixed right-0 justify-between
         border-b border-white/20 shadow-sm"
>
  <!-- Logo + Title -->
  <div class="flex items-center text-[14px] sm:text-[16px] gap-4 sm:gap-10">
    <div>
      <img src={YOUreka} alt="" class="h-[40px] sm:h-[50px] lg:h-[70px]" />
    </div>
    <div class=" xs:flex items-center text-[16px] font-medium">
      YOUreka <span style="color: var(--color-primary);"
        >&nbsp;IDID Service</span
      >
    </div>
  </div>

  <!-- Desktop Navigation -->
  <ul class="hidden md:flex gap-6 lg:gap-10 text-[14px] sm:text-[16px]">
    {#each navigation as item}
      <li class="text-red-700 font-medium text-[16px]">
        <a
          href={item.link}
          class={pageId === item.id
            ? "text-[var(--color-primary)]"
            : "text-[#333333]"}
        >
          {item.name}
        </a>
      </li>
    {/each}
  </ul>

  <!-- Auth Section (Desktop only) -->
  <div class="hidden md:flex gap-2 sm:gap-3">
    {#if !authorized}
      <a href="/login" class="signup btn font-medium">Login</a>
      <a class="btn" href="/signup">Sign Up</a>
    {:else}
      <div class="flex items-center gap-2 sm:gap-4 px-2">
        <img
          src={not}
          alt=""
          class="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
        />
        <div
          class="flex items-center gap-2 sm:gap-4 bg-[#0050E60F] p-2 rounded-md outline outline-[var(--color-primary)]"
        >
          <img
            src={not}
            alt=""
            class="size-[28px] sm:size-[32px] object-cover rounded-full"
          />
          <div>
            <h2 class="text-[14px] sm:text-[16px] lg:text-[18px]">Joy Peace</h2>
            <h4 class="text-[12px] sm:text-[14px]">Staff Member</h4>
          </div>
        </div>
      </div>
    {/if}
  </div>

  <!-- Mobile Menu Button -->
  <button
    class="md:hidden p-2 rounded-lg !bg-transparent"
    on:click={() => (mobileMenuOpen = !mobileMenuOpen)}
  >
    {#if mobileMenuOpen}
      <Close size={24} />
    {:else}
      <Menu size={24} />
    {/if}
  </button>
</header>

<!-- Overlay + Sidebar -->
{#if mobileMenuOpen}
  <!-- Backdrop -->
  <div
    class="fixed inset-0 bg-black/40 backdrop-blur-sm z-10 transition-opacity duration-300"
    role="button"
    tabindex="0"
    aria-label="Close menu"
    on:click={() => (mobileMenuOpen = false)}
    on:keydown={(e) => {
      if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
        mobileMenuOpen = false;
      }
    }}
  ></div>

  <!-- Sidebar -->
  <aside
    class="fixed top-0 left-0 w-64 h-full bg-white/95 shadow-xl z-20 p-6 flex flex-col gap-6 border-r border-gray-200 animate-slideIn"
  >
    <!-- Header -->
    <div
      class="flex justify-between items-center mb-6 border-b border-gray-100 pb-4"
    >
      <div class="flex items-center gap-2">
        <img src={YOUreka} alt="YOUreka" class="h-9" />
        <span class="font-semibold text-[16px] text-[var(--color-primary)]"
          >YOUreka</span
        >
      </div>
      <button
        on:click={() => (mobileMenuOpen = false)}
        class="p-2 rounded-full hover:bg-gray-100 transition-colors"
      >
        <Close size={24} />
      </button>
    </div>

    <!-- Navigation -->
    <nav class="flex flex-col gap-4 text-[16px] font-medium">
      {#each navigation as item}
        <a
          href={item.link}
          class={pageId === item.id
            ? "text-[var(--color-primary)] font-medium"
            : "text-[#333333] hover:text-[var(--color-primary)] transition-colors duration-200"}
          on:click={() => (mobileMenuOpen = false)}
        >
          {item.name}
        </a>
      {/each}
    </nav>

    <!-- Divider -->
    <div class="border-t border-gray-200 my-6"></div>

    <!-- Auth Section -->
    <div class="mt-auto">
      {#if !authorized}
        <Button
          href="/login"
          class="w-full !flex !justify-center !bg-[var(--color-primary)] !text-white"
        >
          Login
        </Button>
        <Button
          href="/signup"
          class="w-full !flex !justify-center mt-3 !bg-gray-100 !text-black hover:!bg-gray-200"
        >
          Sign Up
        </Button>
      {:else}
        <div class="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
          <img src={not} alt="" class="w-10 h-10 rounded-full object-cover" />
          <div>
            <h2 class="text-[15px] font-semibold">Joy Peace</h2>
            <h4 class="text-[13px] text-gray-500">Staff Member</h4>
          </div>
        </div>
      {/if}
    </div>
  </aside>

  <style>
    @keyframes slideIn {
      from {
        transform: translateX(-100%);
        opacity: 0.4;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    .animate-slideIn {
      animation: slideIn 0.35s ease-out forwards;
    }
  </style>
{/if}

<style>
  @keyframes slideIn {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }
  .animate-slideIn {
    animation: slideIn 0.3s ease-out forwards;
  }

  .signup {
    background: transparent;
    color: black;
  }
</style>
