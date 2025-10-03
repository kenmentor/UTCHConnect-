<script lang="ts">
  import {
    Button,
    TextInput,
    Dropdown,
    Toggle,
    FileUploader,
  } from "carbon-components-svelte";
  import { theme } from "$lib/stores/theme";

  // Settings state
  let settings: {
    appName: string;
    supportEmail: string;
    timezone: string;
    enable2FA: boolean;
    enableNotifications: boolean;
    logo: File | null;
    primary: string;
    secondary: string;
  } = {
    appName: "My Awesome App",
    supportEmail: "support@company.com",
    timezone: "UTC",
    enable2FA: true,
    enableNotifications: true,
    logo: null,
    primary: "#0050E6", // default
    secondary: "#FF5722", // default
  };

  let timezones = ["UTC", "GMT", "PST", "EST", "CET"];

  function handleLogoUpload(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) settings.logo = file;
  }

  function saveSettings() {
    theme.set({
      primary: settings.primary,
      secondary: settings.secondary,
    });
    alert("Theme and settings saved successfully!");
  }

  function resetSettings() {
    settings = {
      appName: "",
      supportEmail: "",
      timezone: "UTC",
      enable2FA: false,
      enableNotifications: false,
      logo: null,
      primary: "#0050E6",
      secondary: "#FF5722",
    };
    theme.set({
      primary: settings.primary,
      secondary: settings.secondary,
    });
  }
</script>

<div class="p-8 bg-gray-50 min-h-screen space-y-8">
  <h1 class="text-3xl font-bold mb-6">Admin Configuration</h1>

  <!-- General Settings Card -->
  <div class="bg-white p-6 rounded-lg shadow space-y-4">
    <h2 class="text-xl font-semibold">General Settings</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <TextInput
        labelText="Application Name"
        placeholder="Enter app name"
        bind:value={settings.appName}
      />
      <TextInput
        labelText="Support Email"
        placeholder="Enter support email"
        bind:value={settings.supportEmail}
      />
      <Dropdown
        id="timezone"
        label="Timezone"
        placeholder="Select Timezone"
        items={timezones}
        bind:selectedItem={settings.timezone}
      />

      <!-- Theme Colors -->
      <TextInput
        labelText="Primary Color"
        type="color"
        bind:value={settings.primary}
      />
      <TextInput
        labelText="Secondary Color"
        type="color"
        bind:value={settings.secondary}
      />
    </div>
  </div>

  <!-- Security & Permissions Card -->
  <div class="bg-white p-6 rounded-lg shadow space-y-4">
    <h2 class="text-xl font-semibold">Security & Permissions</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
      <Toggle labelText="Enable 2FA" bind:toggled={settings.enable2FA} />
      <Toggle
        labelText="Enable Notifications"
        bind:toggled={settings.enableNotifications}
      />
    </div>
  </div>

  <!-- File Upload Card -->
  <div class="bg-white p-6 rounded-lg shadow space-y-4">
    <h2 class="text-xl font-semibold">Branding</h2>
    <FileUploader
      labelTitle="Add file"
      multiple={false}
      accept={["image/*"]}
      on:change={handleLogoUpload}
    />
  </div>

  <!-- Action Buttons -->
  <div class="flex justify-end space-x-4">
    <Button kind="secondary" on:click={resetSettings}>Reset</Button>
    <Button kind="primary" on:click={saveSettings}>Save Settings</Button>
  </div>
</div>
