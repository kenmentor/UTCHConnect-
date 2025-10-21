<script lang="ts">
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

<div class="flex flex-1 justify-center items-start p-8 lg:p-12 bg-gray-50">
  <div
    class="bg-white w-full max-w-2xl rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 p-8 transition-all"
  >
    <!-- Stepper -->
    <div class="flex justify-between items-center mb-10 relative">
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
        <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">
          Step 1 — Search Profile
        </h2>
        <p class="text-gray-600 dark:text-gray-300 text-sm">
          Enter your matric or staff number below to search for your profile.
        </p>

        <div>
          <label
            class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Matric / Staff Number
          </label>
          <input
            type="text"
            placeholder="e.g. CSC/20/12345"
            bind:value={profile.matricNumber}
            class="w-full border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          />
        </div>

        <div class="flex justify-end">
          <button
            on:click={next}
            class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-md text-sm font-medium transition-all"
          >
            Search
          </button>
        </div>
      </div>
    {/if}

    <!-- Step 2 -->
    {#if step === 2}
      <div transition:fade class="space-y-6">
        <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">
          Step 2 — Select Department
        </h2>
        <p class="text-gray-600 dark:text-gray-300 text-sm">
          Choose your department before proceeding to payment.
        </p>

        <div>
          <label
            class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Department
          </label>
          <input
            type="text"
            placeholder="e.g. Computer Science"
            bind:value={profile.department}
            class="w-full border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          />
        </div>

        <div class="flex justify-between">
          <button
            on:click={back}
            class="border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 px-6 py-2.5 rounded-md text-sm font-medium transition-all"
          >
            Back
          </button>
          <button
            on:click={next}
            class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-md text-sm font-medium transition-all"
          >
            Continue
          </button>
        </div>
      </div>
    {/if}

    <!-- Step 3 -->
    {#if step === 3}
      <div transition:fade class="space-y-6">
        <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">
          Step 3 — Make Payment
        </h2>
        <p class="text-gray-600 dark:text-gray-300 text-sm">
          Review the account details before confirming your payment.
        </p>

        <div
          class="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg p-5 text-sm text-gray-800 dark:text-gray-200 space-y-2"
        >
          <p><strong>Account Name:</strong> John Doe Linked</p>
          <p><strong>Account Number:</strong> 0000000000</p>
          <p><strong>Bank:</strong> FAGA</p>
        </div>

        <div class="flex justify-between">
          <button
            on:click={back}
            class="border border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 px-6 py-2.5 rounded-md text-sm font-medium transition-all"
          >
            Back
          </button>
          <button
            on:click={confirmPayment}
            class="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-md text-sm font-medium transition-all"
          >
            Confirm Payment
          </button>
        </div>
      </div>
    {/if}
  </div>
</div>
