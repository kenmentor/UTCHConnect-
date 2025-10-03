<script lang="ts">
  import {
    Button,
    TextInput,
    Toggle,
    Select,
    SelectItem,
    PasswordInput,
  } from "carbon-components-svelte";

  // Example settings data (to be fetched from API)
  let settings = {
    notifications: true,
    darkMode: false,
    language: "en",
    timezone: "Africa/Lagos",
    email: "mentor@example.com",
    phone: "+234 812 345 6789",
    altContact: "",
    staffId: "UTCH-04567",
    role: "Software Engineer",
    department: "ICT",
    accessLevel: "Staff",
    twoFactorAuth: false,
    shareData: true,
  };

  function saveSettings() {
    console.log("Saving settings:", settings);
    // TODO: Hook into backend
  }

  function logoutOtherDevices() {
    console.log("Logged out of other sessions");
  }

  function downloadData() {
    console.log("Downloading staff data...");
  }

  function requestDeletion() {
    console.log("Data deletion requested");
  }
</script>

<!-- Settings Page -->
<div class="w-full px-10 py-8 text-gray-800 space-y-12">
  <!-- Header -->
  <header class="pb-6 border-b border-gray-200">
    <h1 class="text-2xl font-semibold">Settings</h1>
    <p class="text-gray-600 mt-1">
      Manage your account preferences, security, and system access.
    </p>
  </header>

  <!-- Preferences -->
  <section class="space-y-6">
    <h2 class="text-lg font-medium text-gray-700 border-b border-gray-200 pb-2">
      Preferences
    </h2>
    <div class="flex items-center justify-between py-2">
      <label class="text-gray-700 font-medium">Notifications</label>
      <Toggle bind:toggled={settings.notifications} />
    </div>
    <div class="flex items-center justify-between py-2">
      <label class="text-gray-700 font-medium">Dark Mode</label>
      <Toggle bind:toggled={settings.darkMode} />
    </div>
    <div>
      <Select
        labelText="Language"
        id="language"
        bind:selected={settings.language}
      >
        <SelectItem value="en" text="English" />
        <SelectItem value="fr" text="French" />
        <SelectItem value="es" text="Spanish" />
      </Select>
    </div>
    <div>
      <Select
        labelText="Timezone"
        id="timezone"
        bind:selected={settings.timezone}
      >
        <SelectItem value="Africa/Lagos" text="Africa/Lagos" />
        <SelectItem value="UTC" text="UTC" />
        <SelectItem value="America/New_York" text="America/New_York" />
        <SelectItem value="Europe/London" text="Europe/London" />
      </Select>
    </div>
  </section>

  <!-- Account Info -->
  <section class="space-y-6">
    <h2 class="text-lg font-medium text-gray-700 border-b border-gray-200 pb-2">
      Account
    </h2>
    <TextInput
      id="email"
      type="email"
      labelText="Email Address"
      bind:value={settings.email}
    />
    <TextInput
      id="phone"
      type="tel"
      labelText="Phone Number"
      bind:value={settings.phone}
    />
    <TextInput
      id="altContact"
      type="tel"
      labelText="Alternate Contact"
      bind:value={settings.altContact}
    />
    <TextInput
      id="staffId"
      labelText="Staff ID"
      value={settings.staffId}
      disabled
    />
  </section>

  <!-- Security -->
  <section class="space-y-6">
    <h2 class="text-lg font-medium text-gray-700 border-b border-gray-200 pb-2">
      Security
    </h2>
    <PasswordInput id="currentPassword" labelText="Current Password" />
    <PasswordInput id="newPassword" labelText="New Password" />
    <PasswordInput id="confirmPassword" labelText="Confirm New Password" />

    <div class="flex items-center justify-between py-2">
      <label class="text-gray-700 font-medium">Two-Factor Authentication</label>
      <Toggle bind:toggled={settings.twoFactorAuth} />
    </div>

    <div class="flex items-center justify-between py-2">
      <span class="text-gray-700">Session Management</span>
      <Button kind="secondary" on:click={logoutOtherDevices}
        >Logout Other Devices</Button
      >
    </div>
  </section>

  <!-- System Access -->
  <section class="space-y-6">
    <h2 class="text-lg font-medium text-gray-700 border-b border-gray-200 pb-2">
      System Access
    </h2>
    <TextInput id="role" labelText="Role" value={settings.role} disabled />
    <TextInput
      id="department"
      labelText="Department"
      value={settings.department}
      disabled
    />
    <TextInput
      id="accessLevel"
      labelText="Access Level"
      value={settings.accessLevel}
      disabled
    />

    <div class="flex items-center justify-between py-2">
      <span class="text-gray-700">API Key</span>
      <Button kind="secondary">Generate Key</Button>
    </div>
  </section>

  <!-- Data & Privacy -->
  <section class="space-y-6">
    <h2 class="text-lg font-medium text-gray-700 border-b border-gray-200 pb-2">
      Data & Privacy
    </h2>
    <div class="flex items-center justify-between py-2">
      <label class="text-gray-700 font-medium">Allow Data Sharing</label>
      <Toggle bind:toggled={settings.shareData} />
    </div>

    <Button kind="secondary" on:click={downloadData}>Download My Data</Button>
    <Button kind="danger" on:click={requestDeletion}
      >Request Data Deletion</Button
    >
  </section>

  <!-- Save -->
  <div class="flex justify-end border-t border-gray-200 pt-6">
    <Button
      size="lg"
      kind="primary"
      class="!bg-[var(--color-primary)]"
      on:click={saveSettings}>Save All Changes</Button
    >
  </div>

  <!-- Danger Zone -->
  <section class="space-y-4 border-t border-gray-200 pt-6">
    <h2 class="text-lg font-medium text-red-600">Danger Zone</h2>
    <p class="text-gray-600">Be careful! These actions are irreversible.</p>
    <div class="flex gap-4">
      <Button kind="danger">Deactivate Account</Button>
      <Button kind="danger-tertiary">Delete Account Permanently</Button>
    </div>
  </section>
</div>
