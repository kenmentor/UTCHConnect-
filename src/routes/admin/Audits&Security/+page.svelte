<script lang="ts">
  import {
    DataTable,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableHeader,
    TableBody,
    TableCell,
    Dropdown,
    Button,
    Tag,
  } from "carbon-components-svelte";

  // Security summary stats
  let securityStats = {
    totalAlerts: 145,
    critical: 12,
    warnings: 33,
    resolved: 100,
    activeSessions: 27,
    failedLogins: 8,
  };

  // Sample security events
  let headers = [
    { key: "timestamp", header: "Timestamp", empty: false },
    { key: "event", header: "Event", empty: false },
    { key: "user", header: "User", empty: false },
    { key: "status", header: "Status", empty: false },
    { key: "action", header: "Action", empty: false },
  ];

  let events = [
    {
      id: "1",
      timestamp: "2025-09-19 12:05",
      event: "Login Failed",
      user: "chibuzor",
      status: "Critical",
    },
    {
      id: "2",
      timestamp: "2025-09-19 12:10",
      event: "File Access",
      user: "adaobi",
      status: "Warning",
    },
    {
      id: "3",
      timestamp: "2025-09-19 12:15",
      event: "Privilege Change",
      user: "emeka",
      status: "Info",
    },
  ];

  let severityFilter: null = null;
  // Use an array of objects for Dropdown items:
  const severities: { id: string; label: string }[] = [
    { id: "low", label: "Low" },
    { id: "medium", label: "Medium" },
    { id: "high", label: "High" },
  ];
</script>

<div class="p-8 bg-gray-50 min-h-screen space-y-6">
  <!-- Security Summary Cards -->
  <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
    <div class="bg-white p-6 rounded-lg shadow text-center">
      <h3 class="text-lg font-semibold">Total Alerts</h3>
      <p class="text-2xl font-bold">{securityStats.totalAlerts}</p>
    </div>
    <div class="bg-white p-6 rounded-lg shadow text-center">
      <h3 class="text-lg font-semibold">Critical</h3>
      <p class="text-2xl font-bold">{securityStats.critical}</p>
    </div>
    <div class="bg-white p-6 rounded-lg shadow text-center">
      <h3 class="text-lg font-semibold">Warnings</h3>
      <p class="text-2xl font-bold">{securityStats.warnings}</p>
    </div>
    <div class="bg-white p-6 rounded-lg shadow text-center">
      <h3 class="text-lg font-semibold">Resolved</h3>
      <p class="text-2xl font-bold">{securityStats.resolved}</p>
    </div>
    <div class="bg-white p-6 rounded-lg shadow text-center">
      <h3 class="text-lg font-semibold">Active Sessions</h3>
      <p class="text-2xl font-bold">{securityStats.activeSessions}</p>
    </div>
    <div class="bg-white p-6 rounded-lg shadow text-center">
      <h3 class="text-lg font-semibold">Failed Logins</h3>
      <p class="text-2xl font-bold">{securityStats.failedLogins}</p>
    </div>
  </div>

  <!-- Filters -->
  <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
    <Dropdown
      id="severityFilter"
      label="Filter by Severity"
      placeholder="Select Severity"
      items={severities}
      bind:selectedItem={severityFilter}
    />
    <Button
      kind="primary"
      on:click={() => console.log("Refresh Security Events")}>Refresh</Button
    >
  </div>

  <!-- Security Events Table -->
  <DataTable rows={events} {headers}>
    <TableContainer
      title="Recent Security Events"
      description="Track and monitor recent alerts"
    >
      <Table>
        <TableHead>
          <TableRow>
            {#each headers as h}
              <TableHeader>{h.header}</TableHeader>
            {/each}
          </TableRow>
        </TableHead>
        <TableBody>
          {#each events as e}
            <TableRow>
              <TableCell>{e.timestamp}</TableCell>
              <TableCell>{e.event}</TableCell>
              <TableCell>{e.user}</TableCell>
              <TableCell>
                <Tag
                  type={e.status === "Critical"
                    ? "red"
                    : e.status === "Warning"
                      ? "magenta"
                      : "green"}
                >
                  {e.status}
                </Tag>
              </TableCell>
              <TableCell class="space-x-2">
                <Button
                  kind="secondary"
                  on:click={() => alert(`View details for ${e.event}`)}
                  >View</Button
                >
                <Button
                  kind="danger-tertiary"
                  on:click={() => alert(`Resolve ${e.event}`)}>Resolve</Button
                >
              </TableCell>
            </TableRow>
          {/each}
        </TableBody>
      </Table>
    </TableContainer>
  </DataTable>
</div>
