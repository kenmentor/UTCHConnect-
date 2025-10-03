<script lang="ts">
  let { children } = $props();

  import Header from "$lib/components/Header.svelte";
  import PageLocator from "$lib/components/pageLocator.svelte";
  import SideBar from "$lib/components/SideBar.svelte";
  import { Breadcrumb } from "carbon-components-svelte";
  import {
    ArrowRight,
    Home,
    IbmEngineeringSystemsDesignRhapsodyModelManager,
  } from "carbon-icons-svelte";
  import logo from "$lib/assets/logo.png";
  import { CicsSystemGroup } from "carbon-icons-svelte";
  import service from "$lib/assets/services.png";
  import settings from "$lib/assets/settings.png";
  import UserAdmin from "carbon-icons-svelte/lib/UserAdmin.svelte";
  import Information from "carbon-icons-svelte/lib/Information.svelte";
  import Document from "carbon-icons-svelte/lib/Document.svelte";
  import Security from "carbon-icons-svelte/lib/Security.svelte";
  import { DocumentConfiguration } from "carbon-icons-svelte";
  import { Dashboard } from "carbon-icons-svelte";
  import type { SvelteComponent } from "svelte";

  type SideItem = {
    name: string;
    link: string;
    type: "icon" | "img";
    icon: typeof SvelteComponent | string;
  };

  const sideData = [
    {
      name: "System Overview",
      type: "icon",
      icon: Dashboard,
      link: "/admin/Systemoverview",
    },
    {
      name: "User Management",
      type: "icon",
      icon: UserAdmin,
      link: "/admin/Usermanagement",
    },
    {
      name: "Information Desk",
      type: "icon",
      icon: Information,
      link: "/admin/informationDesk",
    },
    {
      name: "Configuration",
      type: "icon",
      icon: DocumentConfiguration,
      link: "/admin/Configuration",
    },
    { name: "Reports", type: "icon", icon: Document, link: "/admin/Reports" },
    {
      name: "Audits & Security",
      type: "icon",
      icon: Security,
      link: "/admin/Audits&Security",
    },
  ];

  let sidebarOpen = false;
</script>

<Header authorized={true} />

<main class="pt-24 fixed w-full h-full">
  <!-- Breadcrumb -->
  <div class="px-[70px]">
    <Breadcrumb />
    <PageLocator />
  </div>

  <!-- Page title bar -->
  <div
    style="background-color: var(--color-primary);"
    class="text-[24px] md:text-[36px] p-[16px] md:p-[20px] text-white
           pl-0 md:pl-[332px]"
  >
    Services
  </div>

  <!-- Main content with sidebar -->
  <div class="h-svh relative flex">
    <SideBar classStyle="w-[80px] md:w-[360px]" {sideData} />

    <div
      class="flex-1 w-full h-full overflow-x-scroll flex flex-col gap-3
             md:pl-[332px] pl-[70px] md:pb-[300px] pb-[300px]"
    >
      {@render children?.()}
    </div>
  </div>
</main>
