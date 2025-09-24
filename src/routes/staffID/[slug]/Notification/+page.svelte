<script context="module" lang="ts">
  export type NotificationType = "info" | "success" | "warning" | "error";

  export interface Notification {
    id: number;
    title: string;
    message: string;
    time: string;
    type: NotificationType;
  }
</script>

<script lang="ts">
  // Default/demo notifications (you can override by passing `notifications` prop)
  const defaultNotifications: Notification[] = [
    {
      id: 1,
      title: "New Login",
      message: "You logged in from a new device (Chrome on Windows).",
      time: "2h ago",
      type: "info",
    },
    {
      id: 2,
      title: "ID Renewal Approved",
      message: "Your ID renewal has been approved.",
      time: "Yesterday",
      type: "success",
    },
    {
      id: 3,
      title: "Password Expiring",
      message: "Your account password will expire in 5 days.",
      time: "3d ago",
      type: "warning",
    },
    {
      id: 4,
      title: "Payment Failed",
      message: "We couldn't process your last payment — update billing.",
      time: "1w ago",
      type: "error",
    },
  ];

  // exportable prop so parent can pass real data
  export let notifications: Notification[] = defaultNotifications;

  // helpers to return hex color per type (used for left border & icon color)
  const borderColor = (t: NotificationType) => {
    switch (t) {
      case "info":
        return "#2563eb"; // blue
      case "success":
        return "#16a34a"; // green
      case "warning":
        return "#f59e0b"; // amber
      case "error":
        return "#dc2626"; // red
    }
  };

  const iconColor = (t: NotificationType) => borderColor(t);
</script>

<!-- Page layout: sidebar (360px) + main (fills rest) -->
<div class="flex w-full h-screen bg-gray-50">
  <!-- Sidebar: fixed width, hidden on small screens -->

  <!-- Main content (fills remaining space) -->
  <main class="flex-1 p-8 overflow-y-auto">
    <header class="flex items-center justify-between mb-8">
      <div>
        <h1 class="text-3xl font-semibold text-gray-900">Notifications</h1>
        <p class="text-sm text-gray-500 mt-1">
          Recent system and account updates. Click a notification to view
          details.
        </p>
      </div>
      <!-- small UI action example -->
      <div class="text-sm text-gray-600">
        Showing {notifications.length} items
      </div>
    </header>

    <!-- Notifications grid: 1 column on small, 2 on large -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
      {#each notifications as n (n.id)}
        <article
          role="article"
          aria-labelledby={"notif-" + n.id}
          class="flex gap-4 p-5 bg-white border-l"
          style={`border-left: 4px solid ${borderColor(n.type)}; min-height: 120px;`}
        >
          <!-- Icon block -->
          <div
            class="flex-shrink-0 w-10 h-10 flex items-center justify-center"
            style={`color: ${iconColor(n.type)};`}
          >
            {#if n.type === "info"}
              <!-- info icon -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
            {:else if n.type === "success"}
              <!-- check -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            {:else if n.type === "warning"}
              <!-- triangle -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path
                  d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
                ></path>
                <line x1="12" y1="9" x2="12" y2="13"></line>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
            {:else}
              <!-- error / x -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="15" y1="9" x2="9" y2="15"></line>
                <line x1="9" y1="9" x2="15" y2="15"></line>
              </svg>
            {/if}
          </div>

          <!-- Content -->
          <div class="flex flex-col flex-1">
            <div class="flex justify-between items-start gap-4">
              <h2
                id={"notif-" + n.id}
                class="text-base font-semibold text-gray-900"
              >
                {n.title}
              </h2>
              <time class="text-xs text-gray-400">{n.time}</time>
            </div>
            <p class="text-sm text-gray-600 mt-2">{n.message}</p>

            <!-- actions (optional) -->
            <div class="mt-auto pt-3 flex gap-3">
              <button
                class="text-sm px-3 py-1 border border-gray-200 hover:bg-gray-100"
                >Mark read</button
              >
              <button
                class="text-sm px-3 py-1 border border-gray-200 hover:bg-gray-100"
                >View</button
              >
            </div>
          </div>
        </article>
      {/each}
    </div>
  </main>
</div>
