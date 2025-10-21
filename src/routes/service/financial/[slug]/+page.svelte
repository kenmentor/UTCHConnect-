<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import { TextInput } from "carbon-components-svelte";
  import { ArrowLeft } from "carbon-icons-svelte";
  import { fade } from "svelte/transition";

  interface Profile {
    matricNumber: string;
    department: string;
  }

  let step = 1;
  let profile: Profile = { matricNumber: "", department: "" };
  let errorMessage = "";

  function next() {
    if (step === 1 && !profile.matricNumber.trim()) {
      errorMessage = "Please enter your Matric/Staff Number";
      return;
    }
    if (step === 2 && !profile.department.trim()) {
      errorMessage = "Please enter your Department";
      return;
    }
    errorMessage = "";
    step = Math.min(step + 1, 3);
  }

  function back() {
    errorMessage = "";
    step = Math.max(step - 1, 1);
  }

  function confirmPayment() {
    alert("✅ Payment confirmed!");
  }
</script>

<Header />

<main
  class="flex flex-1 flex-col justify-between items-center
         px-2 sm:px-8 md:px-12 lg:px-20 xl:px-32
         pt-28 pb-24 bg-gray-50 text-gray-900
         transition-all duration-700 ease-out overflow-x-hidden"
>
  <div
    class="bg-white w-full max-w-2xl rounded-2xl shadow-md border border-gray-200 p-8 transition-all"
  >
    <div class="flex items-center gap-3">
      <ArrowLeft />
      <h4>back</h4>
    </div>
    <!-- Stepper -->
    <div class="flex justify-between items-center mb-2 relative">
      {#each ["Search", "Select", "Pay"] as label, i}
        {@const index = i + 1}
        <div class="flex flex-col items-center w-1/3 relative">
          <div
            class={`flex items-center justify-center w-10 h-10 rounded-full font-semibold text-sm transition-all duration-300 border-2 ${
              step === index
                ? "bg-blue-600 border-blue-600 text-white shadow-sm"
                : step > index
                  ? "bg-green-600 border-green-600 text-white"
                  : "border-gray-400 text-gray-500 bg-transparent"
            }`}
          >
            {index}
          </div>
          <p
            class={`mt-2 text-sm font-medium ${
              step === index
                ? "text-blue-600"
                : step > index
                  ? "text-green-600"
                  : "text-gray-500"
            }`}
          >
            {label}
          </p>

          {#if index < 3}
            <div
              class={`absolute top-[20px] left-[calc(50%+1.25rem)] w-[calc(100%-2.5rem)] h-[2px] ${
                step > index ? "bg-green-600" : "bg-gray-300"
              }`}
            ></div>
          {/if}
        </div>
      {/each}
    </div>
    <div>
      <p class="text-[12px] text-[#161C2D]">
        Complete 3-step process: Search, Select, and Payment
      </p>
    </div>
    {#if errorMessage}
      <div
        class="mb-6 flex items-center gap-2 rounded-lg border border-red-300 bg-red-50 text-red-700 px-4 py-3 text-sm"
      >
        ⚠️ {errorMessage}
      </div>
    {/if}

    <hr class="border-gray-200 dark:border-gray-700 mb-8" />

    <!-- Step 1 -->
    {#if step === 1}
      <div transition:fade class="space-y-6">
        <h2 class="text-xl font-semibold text-gray-900">
          Step 1 — Search Profile
        </h2>
        <p class="text-gray-600 text-sm">
          Enter your matric or staff number below to search for your profile.
        </p>

        <div>
          <TextInput
            labelText="Matric / Staff Number"
            type="text"
            placeholder="e.g. CSC/20/12345"
            bind:value={profile.matricNumber}
            class="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white dark:bg-gray-700 text-gray-900 "
          />
        </div>

        <div class="flex justify-end">
          <button on:click={next}> Search </button>
        </div>
      </div>
    {/if}

    <!-- Step 2 -->
    {#if step === 2}
      <div transition:fade class="space-y-6">
        <h2 class="text-xl font-semibold text-gray-900">
          Step 2: Select Department
        </h2>
        <p class="text-gray-600 text-sm">
          Choose your correct record from the UCTH nominal roll..
        </p>

        <div class="bg-[#F9F9F9] p-2">
          <div
            on:click={() => (profile.department = "PAEDIATRIC")}
            class="bg-white p-4 flex flex-col items-start text-left gap-2 cursor-pointer hover:bg-[#0050E60D] click:bg-[#0050E60D]"
          >
            <p class="text-[12px] !text-[#024896]">87.9% Match</p>
            <p class="text-[18px] font-medium">Dr. Enyiego Elihu Osun</p>
            <p class="text-[13px] font-semibold"><span>File No:</span> 5275</p>
            <p class="text-[13px]"><span> Department:</span>PAEDIATRIC</p>
          </div>
        </div>

        <div class="flex">
          <button
            on:click={next}
            class="!w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 text-sm font-medium transition-all"
          >
            Confirm Selection
          </button>
        </div>
      </div>
    {/if}

    <!-- Step 3 -->
    {#if step === 3}
      <div transition:fade class="space-y-6">
        <h2 class="text-xl font-semibold text-gray-900">
          Step 3 — Make Payment
        </h2>
        <p class="text-gray-600 text-sm">
          Review the account details before confirming your payment.
        </p>

        <div
          class="bg-gray-100 border border-gray-300 dark:border-gray-600 rounded-lg p-5 text-sm text-gray-800 dark:text-gray-200 space-y-2"
        >
          <p><strong>Account Name:</strong> John Doe Linked</p>
          <p><strong>Account Number:</strong> 0000000000</p>
          <p><strong>Bank:</strong> FAGA</p>
        </div>

        <div class="flex justify-between">
          <button
            on:click={confirmPayment}
            class=" text-white px-6 py-2.5 rounded-md text-sm font-medium transition-all"
          >
            Confirm Payment
          </button>
        </div>
      </div>
    {/if}
  </div>
</main>
