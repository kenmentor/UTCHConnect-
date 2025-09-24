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
    Dropdown,
    Button,
    Tag,
    Modal,
  } from "carbon-components-svelte";

  // Summary stats
  let userStats = {
    total: 120,
    active: 90,
    inactive: 30,
    admins: 15,
  };

  // Filters
  let filters = {
    search: "",
    role: "All",
    department: "All",
    name: "",
    email: "",
  };

  let roles: string[] = ["All", "Admin", "Manager", "Staff"];
  let departments = ["All", "Engineering", "HR", "Finance", "Marketing"];

  // Make sure this is either null or one of the items
  let selectedRole: string | null = null;

  // Sample users
  let users = [
    {
      id: 1,
      name: "Adaobi Okafor",
      email: "adaobi@company.com",
      role: "Admin",
      department: "Engineering",
      status: "Active",
    },
    {
      id: 2,
      name: "Chibuike Eze",
      email: "chibuike@company.com",
      role: "Staff",
      department: "HR",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Emeka Udo",
      email: "emeka@company.com",
      role: "Manager",
      department: "Finance",
      status: "Active",
    },
  ];

  let headers = [
    { key: "name", header: "Name" },
    { key: "email", header: "Email" },
    { key: "role", header: "Role" },
    { key: "department", header: "Department" },
    { key: "status", header: "Status" },
    { key: "actions", header: "Actions" },
  ];

  let showModal = false;

  function openModal() {
    filters.name = "";
    filters.email = "";
    filters.role = "All";
    filters.department = "All";
    showModal = true;
  }

  function closeModal() {
    showModal = false;
  }

  function addUser(user) {
    users = [...users, { ...user, id: users.length + 1 }];
    // optionally update stats
    userStats.total += 1;
    if (user.status === "Active") userStats.active += 1;
    if (user.role === "Admin") userStats.admins += 1;
    closeModal();
  }

  function deleteUser(id) {
    const user = users.find((u) => u.id === id);
    if (!user) return;
    if (user.status === "Active") userStats.active -= 1;
    if (user.role === "Admin") userStats.admins -= 1;
    userStats.total -= 1;
    users = users.filter((u) => u.id !== id);
  }
</script>

<div class="p-8 bg-gray-50 min-h-screen space-y-6">
  <!-- User summary cards -->
  <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
    <div class="bg-white p-6 rounded-lg shadow text-center">
      <h3 class="text-lg font-semibold">Total Users</h3>
      <p class="text-2xl font-bold">{userStats.total}</p>
    </div>
    <div class="bg-white p-6 rounded-lg shadow text-center">
      <h3 class="text-lg font-semibold">Active Users</h3>
      <p class="text-2xl font-bold">{userStats.active}</p>
    </div>
    <div class="bg-white p-6 rounded-lg shadow text-center">
      <h3 class="text-lg font-semibold">Inactive Users</h3>
      <p class="text-2xl font-bold">{userStats.inactive}</p>
    </div>
    <div class="bg-white p-6 rounded-lg shadow text-center">
      <h3 class="text-lg font-semibold">Admins</h3>
      <p class="text-2xl font-bold">{userStats.admins}</p>
    </div>
  </div>

  <!-- Filters and Add User -->
  <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1">
      <TextInput
        labelText="Search Users"
        placeholder="Search by name or email"
        bind:value={filters.search}
      />
    </div>
    <Button kind="primary" on:click={openModal}>Add New User</Button>
  </div>

  <!-- Users Table -->
  <DataTable {users} {headers}>
    <TableContainer title="Users" description="Manage all users in the system">
      <Table>
        <TableHead>
          <TableRow>
            {#each headers as h}
              <TableHeader>{h.header}</TableHeader>
            {/each}
          </TableRow>
        </TableHead>
        <TableBody>
          {#each users as user}
            <TableRow>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{user.department}</TableCell>
              <TableCell>
                <Tag type={user.status === "Active" ? "green" : "red"}
                  >{user.status}</Tag
                >
              </TableCell>
              <TableCell class="space-x-2">
                <Button
                  kind="secondary"
                  size="sm"
                  on:click={() => alert(`Edit ${user.name}`)}>Edit</Button
                >
                <Button
                  kind="danger--tertiary"
                  size="sm"
                  on:click={() => deleteUser(user.id)}>Delete</Button
                >
              </TableCell>
            </TableRow>
          {/each}
        </TableBody>
      </Table>
    </TableContainer>
  </DataTable>
</div>

<!-- Add User Modal -->
<Modal
  bind:open={showModal}
  modalLabel="Add User"
  modalHeading="Create a New User"
  passiveModal={false}
>
  <div class="space-y-4 p-4">
    <TextInput
      labelText="Name"
      placeholder="Enter full name"
      bind:value={filters.name}
    />
    <TextInput
      labelText="Email"
      placeholder="Enter email"
      bind:value={filters.email}
    />
    <Dropdown
      id="modal-role"
      label="Role"
      items={roles}
      bind:selectedItem={filters.role}
    />
    <Dropdown
      id="modal-dept"
      label="Department"
      items={departments}
      bind:selectedItem={filters.department}
    />
  </div>

  <!-- Footer buttons manually -->
  <div class="flex justify-end space-x-2 p-4 border-t border-gray-200">
    <Button kind="secondary" on:click={closeModal}>Cancel</Button>
    <Button
      kind="primary"
      on:click={() =>
        addUser({
          name: filters.name,
          email: filters.email,
          role: filters.role,
          department: filters.department,
          status: "Active",
        })}>Create User</Button
    >
  </div>
</Modal>
