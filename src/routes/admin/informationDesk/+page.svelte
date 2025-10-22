<script lang="ts">
  import {
    Button,
    TextInput,
    DatePicker,
    Checkbox,
    TextArea,
    FileUploaderDropContainer,
  } from "carbon-components-svelte";

  let news = {
    office: "",
    category: "",
    heading: "",
    content: "",
    image: [] as readonly File[],
    audience: {
      allStaff: true,
      clinical: false,
      nonClinical: false,
      public: false,
      department: false,
      patients: false,
    },
    startDate: "",
    endDate: "",
  };

  function handleImageChange(e: Event) {
    const file = (e.target as HTMLInputElement).files?.[0];
    if (file) news.image = [file];
  }

  function createNews() {
    console.log("News created:", news);
    // Connect to backend API
  }

  function handleFileUpload(e: CustomEvent<readonly File[]>): void {
    throw new Error("Function not implemented.");
  }
</script>

<div class="flex-1 p-8 bg-white rounded-lg shadow space-y-6">
  <h2 class="text-xl font-semibold">Basic Information</h2>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <TextInput
      id="office"
      labelText="Office/Department"
      placeholder="Select Office"
      bind:value={news.office}
    />
    <TextInput
      id="category"
      labelText="Category"
      placeholder="Select Category"
      bind:value={news.category}
    />
    <TextInput
      id="heading"
      labelText="Heading/Title"
      placeholder="Enter the News Heading"
      bind:value={news.heading}
    />
  </div>

  <!-- Proper Carbon Textarea -->

  <TextArea
    id="content"
    labelText="Content"
    placeholder="Enter news content"
    bind:value={news.content}
    rows={8}
  />

  <div class=" ">
    <!-- h-64 is example height; adjust as needed -->
    <FileUploaderDropContainer
      labelText="Drag and drop image or click to upload"
      multiple={false}
      accept={["image/*"]}
      bind:files={news.image}
      on:change={handleFileUpload}
    />
  </div>

  <div class="space-y-2">
    <label for="target" class="font-medium">Target Audience</label>
    <div id="target" class=" grid grid-cols-2 md:grid-cols-3 gap-4">
      <Checkbox labelText="All staff" bind:checked={news.audience.allStaff}
        >All Staff</Checkbox
      >
      <Checkbox labelText="Clinical Staff" bind:checked={news.audience.clinical}
        >Clinical Staff</Checkbox
      >
      <Checkbox
        labelText="Non-Clinical Staff"
        bind:checked={news.audience.nonClinical}
      ></Checkbox>
      <Checkbox labelText="Public" bind:checked={news.audience.public}
      ></Checkbox>
      <Checkbox
        labelText="Department Specific"
        bind:checked={news.audience.department}
      ></Checkbox>
      <Checkbox labelText="Patients" bind:checked={news.audience.patients}
      ></Checkbox>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <DatePicker
      id="start-date"
      placeholder="Start Date"
      bind:value={news.startDate}
    />
    <DatePicker
      id="end-date"
      placeholder="End Date"
      bind:value={news.endDate}
    />
  </div>

  <Button kind="primary" on:click={createNews}>Create News</Button>
</div>

<style>
  /* Make drop container take full width and height */
  :global(.bx--file__drop-container) {
    width: 100% !important;
    height: 100% !important;
    min-height: 0; /* remove default min-height */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  /* Optional: make text centered and fill space */
  :global(.bx--file__selected-file) {
    width: 100%;
  }
</style>
