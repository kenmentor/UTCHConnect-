<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import PageLocator from "$lib/components/pageLocator.svelte";
  import SideBar from "$lib/components/SideBar.svelte";
  import { Breadcrumb } from "carbon-components-svelte";

  // local assets
  import service from "$lib/assets/services.png";
  import notification from "$lib/assets/message.png";
  import profile from "$lib/assets/avater.png";
  import settings from "$lib/assets/settings.png";

  // Carbon icons
  import type { SvelteComponent } from "svelte";
  import Dashboard from "carbon-icons-svelte/lib/Dashboard.svelte";
  import Tools from "carbon-icons-svelte/lib/Tools.svelte";

  // Type for sidebar items
  type SideItem = {
    name: string;
    link: string;
    type: "img" | "icon";
    icon: string | typeof Dashboard;
  };

  // Sidebar links
  const sideData: SideItem[] = [
    {
      name: "Overview",
      icon: Dashboard,
      type: "icon",
      link: "/staffID/slug/Overview",
    },
    {
      name: "Services",
      icon: service,
      type: "img",
      link: "/staffID/slug/Services",
    },
    {
      name: "Notification",
      icon: notification,
      type: "img",
      link: "/staffID/slug/Notification",
    },
    {
      name: "Profile",
      icon: profile,
      type: "img",
      link: "/staffID/slug/Profile",
    },
    {
      name: "Settings",
      icon: Tools,
      type: "icon",
      link: "/staffID/slug/Settings",
    },
  ];
</script>

<Header authorized={true} pageId={2} />

<main class="pt-24 fixed w-full h-full bg-gray-50">
  <!-- Breadcrumb -->
  <div class="px-[70px]">
    <Breadcrumb />
    <PageLocator />
  </div>

  <!-- Page title bar -->
  <div
    class="bg-[var(--color-primary)] text-[24px] md:text-[36px] p-[16px] md:p-[20px] text-white
           pl-0 md:pl-[332px]"
  >
    Services
  </div>

  <!-- Main content with sidebar -->
  <div class="h-svh relative">
    <SideBar {sideData} />

    <div
      class="flex-1 w-full h-svh overflow-x-scroll flex flex-col gap-3
             pb-[300px] fixed left-[70px] md:left-[380px]"
    >
      <slot />
    </div>
  </div>
</main>
