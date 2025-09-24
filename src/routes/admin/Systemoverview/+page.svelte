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

<div class="fixed right-0 w-full h-[650px] left-[300px] flex">
  <!-- Main Content -->
  <div
    class="flex flex-col overflow-y-scroll flex-1 px-[50px] py-[40px] pb-[200px]"
  >
    <!-- Metrics -->
    <h2 class="px-[50px] mb-3">Monitor system health and key metrics</h2>
    <Grid>
      <Row>
        {#each metrics as item}
          <Column sm={4} md={8} lg={8}>
            <div
              class="bg-[#F9F9F9] shadow-md flex m-[20px] p-[22px] items-center gap-5 lg"
            >
              <div
                class=" {item.color} p-3 flex items-center justify-center text-white"
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

    <!-- Quick Actions -->

    <div class=" px-[50px] flex flex-col gap-[20px]">
      <div class="bg-[#F9F9F9] shadow-md flex flex-col gap-5 lg p-[20px]">
        <h2 class="text-left">Quick Action</h2>
        <Grid class="!p-0">
          <Row>
            {#each quickActions as action}
              <Column sm={4} md={8} lg={8}>
                <div
                  class="bg-white md shadow-sm m-3 flex items-center gap-3 p-[20px] hover:bg-gray-100 transition"
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

      <div
        class="bg-[#F9F9F9] shadow-md flex flex-col gap-3 w-[395px] p-[20px] lg"
      >
        <h2>Quick Stats</h2>
        <div class="flex justify-between">
          <div
            class="flex flex-col items-center bg-white shadow-sm md py-[20px]"
          >
            <h2 class="text-blue-600 text-xl">5</h2>
            <p class="!text-[16px]">Pending Tasks</p>
          </div>
          <div
            class="flex flex-col items-center bg-white shadow-sm md py-[20px] px-4"
          >
            <h2 class="text-blue-600 text-xl">12</h2>
            <p class="!text-[16px]">Completed Today</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Side Cards -->
  <div
    class="flex flex-1 flex-col p-6 gap-6 top-0 h-full bottom-0 border-l max-w-[900px]"
  >
    {#each sideCards as card}
      <div
        class="  items-center bg-[#F9F9F9] p-[18px] flex flex-col w-full gap-2 lg max-w-[410px] shadow-md"
      >
        <h2 class="text-lg font-semibold">{card.title}</h2>
        <p class="text-sm text-gray-600">{card.subtitle}</p>
        <div class="flex justify-center my-3">
          <card.icon size={32} class="text-blue-600" />
        </div>
        <h2 class="!text-[20px] text-center text-[#333333]">{card.title}</h2>
        <p class="text-[15px] text-center text-[#333333]">{card.desc}</p>
      </div>
    {/each}
  </div>
</div>

<style>
  h2 {
    font-family: IBM Plex Sans;
    font-weight: 600;
    font-style: SemiBold;
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
