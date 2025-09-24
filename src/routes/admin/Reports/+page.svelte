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
    TextInput,
    DatePickerInput,
    Checkbox,
    Button,
    Dropdown,
  } from "carbon-components-svelte";

  // Sample report filters
  let filters = {
    search: "",
    startDate: "",
    endDate: "",
    category: "",
    department: "",
  };

  let categories = ["All", "Finance", "HR", "IT", "Operations"];
  let departments = ["All", "Admin", "Engineering", "Marketing", "Support"];

  // Sample report data
  let rows = [
    {
      id: "1",
      date: "2025-09-19",
      category: "IT",
      department: "Engineering",
      report: "Server downtime report",
    },
    {
      id: "2",
      date: "2025-09-18",
      category: "HR",
      department: "Admin",
      report: "Staff recruitment report",
    },
    {
      id: "3",
      date: "2025-09-17",
      category: "Finance",
      department: "Finance",
      report: "Quarterly budget report",
    },
    // add more rows as needed
  ];

  let headers = [
    { key: "date", header: "Date", empty: false },
    { key: "category", header: "Category", empty: false },
    { key: "department", header: "Department", empty: false },
    { key: "report", header: "Report Details", empty: false },
  ];

  function exportReport() {
    console.log("Exporting report...");
    // Implement CSV/PDF export
  }
</script>

<div class="p-8 bg-gray-50 min-h-screen space-y-6">
  <!-- Summary Cards -->
  <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
    <div class="bg-white p-6 rounded-lg shadow text-center">
      <h3 class="text-lg font-semibold">Total Reports</h3>
      <p class="text-2xl font-bold">120</p>
    </div>
    <div class="bg-white p-6 rounded-lg shadow text-center">
      <h3 class="text-lg font-semibold">IT Reports</h3>
      <p class="text-2xl font-bold">35</p>
    </div>
    <div class="bg-white p-6 rounded-lg shadow text-center">
      <h3 class="text-lg font-semibold">HR Reports</h3>
      <p class="text-2xl font-bold">20</p>
    </div>
    <div class="bg-white p-6 rounded-lg shadow text-center">
      <h3 class="text-lg font-semibold">Finance Reports</h3>
      <p class="text-2xl font-bold">25</p>
    </div>
  </div>

  <!-- Filters -->
  <div class="grid grid-cols-1 md:grid-cols-5 gap-4">
    <TextInput
      labelText="Search Reports"
      placeholder="Search..."
      bind:value={filters.search}
    />
    <DatePickerInput
      labelText="Start Date"
      placeholder="Start Date"
      bind:value={filters.startDate}
    />
    <DatePickerInput
      labelText="End Date"
      placeholder="End Date"
      bind:value={filters.endDate}
    />
    <Dropdown
      id="category"
      label="Category"
      items={categories}
      bind:selectedItem={filters.category}
    />
    <Dropdown
      id="department"
      label="Department"
      items={departments}
      bind:selectedItem={filters.department}
    />
  </div>

  <!-- Actions -->
  <div class="flex justify-end space-x-4">
    <Button kind="secondary" on:click={() => console.log("Filters applied")}
      >Apply Filters</Button
    >
    <Button kind="primary" on:click={exportReport}>Export Report</Button>
  </div>

  <!-- Data Table -->
  <DataTable {rows} {headers}>
    <TableContainer
      title="Reports Overview"
      description="List of all reports with details"
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
          {#each rows as row}
            <TableRow>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell>{row.department}</TableCell>
              <TableCell>{row.report}</TableCell>
            </TableRow>
          {/each}
        </TableBody>
      </Table>
    </TableContainer>
  </DataTable>
</div>
