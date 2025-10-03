<script lang="ts">
  import { Button, TextInput } from "carbon-components-svelte";
  import { onMount } from "svelte";

  let isEditing = false;

  // Example staff profile data
  let profile = {
    avatar: "/logo.png",
    name: "Dr. Adaobi Okafor",
    department: "Internal Medicine",
    email: "adaobi.okafor@utchconnect.org",
    phone: "+234 812 345 6789",
    gender: "Female",
    staffID: "UTCH-2025-0021",
    role: "Consultant Physician",
    specialization: "Cardiology",
    hireDate: "2021-04-15",
  };

  function handleAvatarChange(e: Event) {
    const file = (e.target as HTMLInputElement).files?.[0];
    if (file) profile.avatar = URL.createObjectURL(file);
  }

  function toggleEdit() {
    isEditing = !isEditing;
  }

  function saveProfile() {
    console.log("Saved profile:", profile);
    isEditing = false;
    // TODO: Hook up to backend API
  }
</script>

<div class="w-full px-10 py-8 text-gray-800 space-y-12">
  <!-- Header -->
  <div class="flex items-center gap-8">
    <div class="relative">
      <img
        src={profile.avatar}
        alt="Profile Avatar"
        class="w-28 h-28 rounded-full object-cover border-4 border-gray-200 transition-transform duration-300 hover:scale-105"
      />
      {#if isEditing}
        <label
          for="avatar-upload"
          class="absolute bottom-0 right-0 bg-[var(--color-primary)] p-2 rounded-full cursor-pointer hover:bg-[var(--color-primary)] transition"
        >
          <span class="text-white text-xs font-bold">📷</span>
        </label>
        <input
          id="avatar-upload"
          type="file"
          accept="image/*"
          class="hidden"
          on:change={handleAvatarChange}
        />
      {/if}
    </div>

    <div class="flex-1">
      <h1 class="text-2xl font-semibold">{profile.name}</h1>
      <p class="text-gray-600">{profile.role} – {profile.department}</p>
      <div class="flex gap-3 mt-3">
        <Button
          kind="tertiary"
          on:click={toggleEdit}
          class="!text-[var(--color-primary)] !outline-[var(--color-primary)] "
        >
          {isEditing ? "Cancel" : "Edit Profile"}
        </Button>
        {#if isEditing}
          <Button
            kind="primary"
            on:click={saveProfile}
            class="!bg-[var(--color-primary)]">Save</Button
          >
        {/if}
      </div>
    </div>
  </div>

  <!-- Info Grid -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
    <!-- Left: Personal Info -->
    <div class="space-y-6">
      <h2
        class="text-lg font-medium text-gray-700 border-b border-gray-200 pb-2"
      >
        Personal Info
      </h2>

      {#if isEditing}
        <TextInput id="email" labelText="Email" bind:value={profile.email} />
        <TextInput id="phone" labelText="Phone" bind:value={profile.phone} />
        <TextInput id="gender" labelText="Gender" bind:value={profile.gender} />
      {:else}
        <div class="flex justify-between py-2">
          <span class="text-gray-600">Email</span>
          <span class="font-medium">{profile.email}</span>
        </div>
        <div class="flex justify-between py-2">
          <span class="text-gray-600">Phone</span>
          <span class="font-medium">{profile.phone}</span>
        </div>
        <div class="flex justify-between py-2">
          <span class="text-gray-600">Gender</span>
          <span class="font-medium">{profile.gender}</span>
        </div>
      {/if}

      <div class="flex justify-between py-2 border-t border-gray-200">
        <span class="text-gray-600">Staff ID</span>
        <span class="font-medium">{profile.staffID}</span>
      </div>
    </div>

    <!-- Right: Professional Info -->
    <div class="space-y-6">
      <h2
        class="text-lg font-medium text-gray-700 border-b border-gray-200 pb-2"
      >
        Professional Info
      </h2>

      {#if isEditing}
        <TextInput
          id="department"
          labelText="Department"
          bind:value={profile.department}
        />
        <TextInput
          id="role"
          labelText="Role / Position"
          bind:value={profile.role}
        />
        <TextInput
          id="specialization"
          labelText="Specialization"
          bind:value={profile.specialization}
        />
        <TextInput
          id="hireDate"
          type="date"
          labelText="Hire Date"
          bind:value={profile.hireDate}
        />
      {:else}
        <div class="flex justify-between py-2">
          <span class="text-gray-600">Department</span>
          <span class="font-medium">{profile.department}</span>
        </div>
        <div class="flex justify-between py-2">
          <span class="text-gray-600">Role / Position</span>
          <span class="font-medium">{profile.role}</span>
        </div>
        <div class="flex justify-between py-2">
          <span class="text-gray-600">Specialization</span>
          <span class="font-medium">{profile.specialization}</span>
        </div>
        <div class="flex justify-between py-2">
          <span class="text-gray-600">Hire Date</span>
          <span class="font-medium">{profile.hireDate}</span>
        </div>
      {/if}
    </div>
  </div>
</div>
