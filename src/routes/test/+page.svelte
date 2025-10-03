<script>
  import { Column, Grid, Row } from "carbon-components-svelte";
  import {
    UserFilled,
    InformationFilled,
    IbmCloud,
    DocumentBlank,
    AddFilled,
    UserFollow,
    Report,
    Locked,
    Settings,
  } from "carbon-icons-svelte";

  // Metrics Data
  const metrics = [
    {
      title: "Total Users",
      number: 1045,
      color: "bg-blue-600",
      icon: UserFilled,
    },
    {
      title: "Active Notices",
      number: 24,
      color: "bg-green-500",
      icon: InformationFilled,
    },
    {
      title: "Active Services",
      number: 7,
      color: "bg-orange-500",
      icon: IbmCloud,
    },
    {
      title: "Report Generated",
      number: 156,
      color: "bg-purple-500",
      icon: DocumentBlank,
    },
  ];

  // Quick Actions
  const quickActions = [
    { title: "Create Notice", icon: AddFilled },
    { title: "Add User", icon: UserFollow },
    { title: "Generate Report", icon: Report },
    { title: "View Logs", icon: Locked },
  ];

  // Side Cards
  const sideCards = [
    {
      title: "User Management",
      subtitle: "Manage system users and roles",
      icon: UserFilled,
      desc: "This section is under development",
    },
    {
      title: "System Configuration",
      subtitle: "Configure system settings",
      icon: Settings,
      desc: "This section is under development",
    },
  ];
</script>

<!-- Wrapper for content beside sidebar -->
<div class="flex flex-col lg:flex-row w-full min-h-screen lg:pl-[300px]">
  <!-- Main Content -->
  <div class="flex-1 flex flex-col px-6 py-8 gap-8 overflow-y-auto">
    <!-- Metrics -->
    <div>
      <h2 class="mb-3">Monitor system health and key metrics</h2>
      <Grid>
        <Row>
          {#each metrics as item}
            <Column sm={4} md={8} lg={8}>
              <div
                class="bg-[#F9F9F9] shadow-md flex m-3 p-5 items-center gap-5"
              >
                <div
                  class="{item.color} p-3 flex items-center justify-center text-white rounded-full"
                >
                  <svelte:component this={item.icon} size={24} />
                </div>
                <div class="flex flex-col">
                  <h1 class="text-2xl font-semibold">{item.number}</h1>
                  <p>{item.title}</p>
                </div>
              </div>
            </Column>
          {/each}
        </Row>
      </Grid>
    </div>

    <!-- Quick Actions -->
    <div class="bg-[#F9F9F9] shadow-md flex flex-col gap-5 p-5">
      <h2>Quick Actions</h2>
      <Grid class="!p-0">
        <Row>
          {#each quickActions as action}
            <Column sm={4} md={8} lg={8}>
              <div
                class="bg-white shadow-sm m-2 flex items-center gap-3 p-4 hover:bg-gray-100 transition"
              >
                <action.icon size={24} class="text-blue-600" />
                <p>{action.title}</p>
              </div>
            </Column>
          {/each}
        </Row>
      </Grid>
    </div>

    <!-- Quick Stats -->
    <div class="bg-[#F9F9F9] shadow-md p-5">
      <h2>Quick Stats</h2>
      <div class="flex gap-4 mt-3 flex-wrap">
        <div class="flex flex-col items-center bg-white shadow-sm p-4 flex-1">
          <h2 class="text-blue-600 text-xl">5</h2>
          <p>Pending Tasks</p>
        </div>
        <div class="flex flex-col items-center bg-white shadow-sm p-4 flex-1">
          <h2 class="text-blue-600 text-xl">12</h2>
          <p>Completed Today</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Side Cards -->
  <aside class="flex flex-col gap-6 p-6 border-l w-full lg:w-[400px] bg-white">
    {#each sideCards as card}
      <div class="items-center bg-[#F9F9F9] p-5 flex flex-col gap-2 shadow-md">
        <h2 class="text-lg font-semibold">{card.title}</h2>
        <p class="text-sm text-gray-600">{card.subtitle}</p>
        <div class="flex justify-center my-3">
          <card.icon size={32} class="text-blue-600" />
        </div>
        <p class="text-[15px] text-center text-[#333333]">{card.desc}</p>
      </div>
    {/each}
  </aside>
</div>

<style>
  h2 {
    font-family: IBM Plex Sans;
    font-weight: 600;
    font-size: 22px;
    line-height: 120%;
  }
  p {
    font-family: IBM Plex Sans;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
  }
</style>
