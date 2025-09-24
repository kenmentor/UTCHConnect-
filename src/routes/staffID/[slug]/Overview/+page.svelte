<script>
  import Notification from "$lib/components/Notification.svelte";
  import { Column, Grid, Row } from "carbon-components-svelte";
  import doctor from "$lib/assets/doctor.png";
  import cash from "$lib/assets/fluent_payment-20-filled.png";

  // Carbon icons
  import {
    Information,
    DocumentTasks,
    Checkmark,
    Money,
    Policy,
  } from "carbon-icons-svelte";

  const data = [
    {
      icon: doctor,
      title: " New Policy Updates.",
      description:
        "Important policy changes from the Chief Medical Director's office regarding...",
      link: "/",
      percent: 23,
    },
    {
      icon: cash,
      title: "New Task Assigned",
      description:
        "You have been assigned to handle a new department audit task.",
      link: "/tasks",
      percent: 45,
    },
    {
      icon: doctor,
      title: "Payment Processed",
      description: "A payment was successfully processed for ward supplies.",
      link: "/payments",
      percent: 60,
    },
    {
      icon: doctor,
      title: "Task Completed",
      description: "Your request for system upgrade has been completed.",
      link: "/completed",
      percent: 100,
    },
  ];

  const recentActivity = [
    {
      color: "bg-[#30BA0E]",
      icon: Checkmark,
      text: "Payment processed successfully",
      time: "2 Minutes ago",
    },
    {
      color: "bg-[#BA0EA6]",
      icon: DocumentTasks,
      text: "New task assigned to you",
      time: "10 Minutes ago",
    },
    {
      color: "bg-[#3373EB]",
      icon: Policy,
      text: "Policy update notification",
      time: "30 Minutes ago",
    },
  ];
</script>

<div class="fixed">
  <div class="w-full gap-3 flex h-[650px]">
    <!-- Left section -->
    <div class="flex flex-col overflow-y-scroll flex-1 pb-[300px]">
      <div class="px-[30px] flex flex-col gap-2">
        <h1>My Services</h1>
        <a href=""> View All</a>
      </div>
      <Grid>
        <Row>
          {#each data as item, i}
            <Column sm={4} md={8} lg={8}>
              <Notification
                image={item.icon}
                index={i}
                percent={item.percent}
                title={item.title}
                desc={item.description}
              />
            </Column>
          {/each}
        </Row>
      </Grid>
    </div>

    <!-- Right section -->
    <div class="flex flex-col gap-6 top-0 h-full bottom-0 p-[30px] border-l">
      <!-- Recent Activity -->
      <div class="flex flex-col gap-5">
        <h2>Recent Activity</h2>
        <div class="bg-[#F9F9F9] p-[38px] flex flex-col gap-4">
          {#each recentActivity as act}
            <div class="flex gap-2 items-start">
              <div class={`${act.color} p-2 rounded-md`}>
                <act.icon class="text-white" />
              </div>
              <div class="flex flex-col">
                <p class="text-left">{act.text}</p>
                <h4 class="text-left">{act.time}</h4>
              </div>
            </div>
          {/each}
        </div>
      </div>

      <!-- Quick Stats -->
      <div class="bg-[#F9F9F9] p-[38px] flex flex-col gap-3">
        <h2>Quick Stats</h2>
        <div class="flex justify-between gap-4">
          <div class="flex flex-col items-center bg-white p-4 rounded-md w-1/2">
            <DocumentTasks class="w-6 h-6 text-blue-600 mb-1" />
            <h2 class="text-blue-600">5</h2>
            <p class="!text-[16px]">Pending Tasks</p>
          </div>
          <div class="flex flex-col items-center bg-white p-4 rounded-md w-1/2">
            <Checkmark class="w-6 h-6 text-green-600 mb-1" />
            <h2 class="text-blue-600">12</h2>
            <p class="!text-[16px]">Completed Today</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- https://meet.google.com/gwb-xvmy-sbd -->

<style>
  h2 {
    font-family: IBM Plex Sans;
    font-weight: 600;
    font-size: 28px;
    line-height: 100%;
  }
  h4 {
    font-family: IBM Plex Sans;
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    color: #8c8c8c;
  }
  p {
    font-family: IBM Plex Sans;
    font-weight: 400;
    font-size: 17px;
    line-height: 100%;
  }
</style>
