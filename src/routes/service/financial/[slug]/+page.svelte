<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import { TextInput } from "carbon-components-svelte";
  import { Checkbox, Checkmark } from "carbon-icons-svelte";
  import { Check, ArrowLeft, ChevronLeft, AlertCircle } from "lucide-svelte";
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
    step = Math.min(step + 1, 4);
  }

  function back() {
    errorMessage = "";
    step = Math.max(step - 1, 1);
  }

  function confirmPayment() {
    alert("✅ Payment confirmed!");
  }
  const tips = [
    "This account number is for this payment only and expires after 30 minutes",
    "Do not share publicly. Use it only to complete your payment",
    "If USSD fails, use your bank app or mobile transfer",
    "Most payments confirm within 5 minutes. Keep your bank receipt",
  ];
</script>

<Header />

<main
  class="flex flex-1 flex-col justify-between items-center
         px-2 sm:px-8 md:px-12 lg:px-20 xl:px-32
         pt-28 pb-24 bg-gray-50 text-gray-900
         transition-all duration-700 ease-out overflow-x-hidden"
>
  <div
    class="bg-white w-full max-w-2xl shadow-md border border-gray-200 p-8 transition-all"
  >
    <div class="flex items-center gap-1 cursor-pointer py-4" on:click={back}>
      <ArrowLeft />
      <h4>back</h4>
    </div>
    <!-- Stepper -->
    <div class="flex justify-between items-center mb-2 relative">
      {#each ["Search", "Select", "Pay", "verify"] as label, i}
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
      <p class="text-[12px] text-[#161C2D] p-4">
        Complete 3-step process: Search, Select, and Payment
      </p>
    </div>
    {#if errorMessage}
      <div
        class="mb-6 flex items-center gap-2 rounded-lg border border-red-300 bg-red-50 text-red-700 px-4 py-3 text-sm"
      >
        <AlertCircle />
        {errorMessage}
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

        <div class="bg-[#F9F9F9] p-2 flex flex-col gap-4">
          <div
            on:click={() => (profile.department = "PAEDIATRIC")}
            class=" active:bg-[#0050E60D] bg-white p-4 flex flex-col items-start text-left gap-2 cursor-pointer click:bg-[#0050E60D]"
          >
            <p class="text-[12px] !text-[#024896]">87.9% Match</p>
            <p class="text-[18px] font-medium">Dr. Enyiego Elihu Osun</p>
            <p class="text-[13px] font-semibold"><span>File No:</span> 5275</p>
            <p class="text-[13px]"><span> Department:</span>PAEDIATRIC</p>
          </div>
          <div
            on:click={() => (profile.department = "PAEDIATRIC")}
            class=" active:bg-[#0050E60D] bg-white p-4 flex flex-col items-start text-left gap-2 cursor-pointer click:bg-[#0050E60D]"
          >
            <p class="text-[12px] !text-[#024896]">87.9% Match</p>
            <p class="text-[18px] font-medium">Dr. Enyiego Elihu Osun</p>
            <p class="text-[13px] font-semibold"><span>File No:</span> 5275</p>
            <p class="text-[13px]"><span> Department:</span>PAEDIATRIC</p>
          </div>
          <div
            on:click={() => (profile.department = "PAEDIATRIC")}
            class=" active:bg-[#0050E60D] bg-white p-4 flex flex-col items-start text-left gap-2 cursor-pointer click:bg-[#0050E60D]"
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
        <div class="flex sm:flex-row bg-[#30BA0E1A] rounded-md shadow-sm">
          <div
            class="w-full sm:w-4 max-w-2 bg-green-600 sm:rounded-l-md sm:rounded-t-none"
          ></div>
          <div class="p-6">
            <h2 class="text-lg font-semibold text-[#30BA0E] mb-2">
              IDID Verified Successfully
            </h2>
            <p class="text-[#30BA0E] leading-relaxed">
              Your identity has been confirmed. Please review your details.
            </p>
          </div>
        </div>
        <div class="flex flex-col justify-center items-center gap-[4px]">
          <img src="" class="size-[123px] rounded-full" alt="" />
          <h3 class="text-[18px] font-semibold">Dr. Enyiego Elihu Osun</h3>
          <p class="text-[13px] text-[#161C2D]">Department of Paediatric</p>
          <p
            class=" text-[12px] font-semibold text-white bg-[#30BA0E] inline-flex items-center gap-2 px-3 py-1 l text-sm"
          >
            <Checkmark /> IDID Verified
          </p>
        </div>
        <div class="flex sm:flex-row bg-[#0050E60D] rounded-md shadow-sm">
          <div
            class="w-full sm:w-4 max-w-2 bg-[#0050E6] sm:rounded-l-md sm:rounded-t-none"
          ></div>
          <div class="p-6 flex flex-col items-start">
            <p><strong>Full Name:</strong> ENYIEGO, Elihu Osim</p>
            <p><strong>IDID Reference :</strong> 2396704605</p>
            <p><strong>Department :</strong> Paediatrics</p>
            <p><strong>File Number :</strong> 3018719113</p>
            <p><strong>Domain Reference :</strong>UCTH/P/5275</p>
          </div>
        </div>

        <div class="flex justify-between">
          <button
            on:click={next}
            class="!w-full text-white px-6 py-2.5 text-sm font-medium transition-all"
          >
            Confirm Payment
          </button>
        </div>
      </div>
    {/if}

    {#if step === 4}
      <div transition:fade class="space-y-6">
        <h2 class="text-xl font-semibold text-gray-900">
          Step 2: Select Department
        </h2>
        <p class="text-gray-600 text-sm text-start">
          Choose your correct record from the UCTH nominal roll..
        </p>

        <div class=" p-2 flex gap-4 flex-col">
          <div class="flex flex-row bg-[#0050E60D] rounded-md shadow-sm">
            <div
              class="w-full sm:w-4 max-w-2 bg-[#0050E6] sm:rounded-l-md sm:rounded-t-none"
            ></div>
            <div class="p-6 flex text-[13px] flex-col w-full">
              <p
                class="text-[#161C2D] leading-relaxed w-full flex justify-between"
              >
                <span> Department </span>
                <span> Paediatrics</span>
              </p>
              <p
                class="text-[#161C2D] leading-relaxed w-full flex justify-between"
              >
                <span> File Number </span>
                <span> 3018719113</span>
              </p>
            </div>
          </div>
          <div
            class="flex bg-[#0050E60D] rounded-md shadow-sm flex-col justify-center items-center p-4"
          >
            <p class="text-[#024896] font-medium text-[12px]">ID Card Fee</p>
            <h3 class="text-[18px] font-semibold">₦3,500.00</h3>
          </div>
          <div
            class="flex gap-2 bg-[#0050E60D] rounded-md shadow-sm flex-col items-center md:items-start jus p-4"
          >
            <h3 class="text-[14px] text-[#161C2D] font-semibold w-full">
              Payment Account (Auto-generated)
            </h3>

            <div>
              <div class="min-w-[318px]">
                <p class="text-[14px] flex justify-between w-full gap-8">
                  <span> Account Name </span> <span> YOUreka IDID Ltd</span>
                </p>
                <p class="text-[14px] w-full flex gap-8 justify-between">
                  <span> Bank </span> <span> 9 Payment Service </span>
                </p>
              </div>
            </div>
            <p class="text-[13px]">Account number (valid for 30 minutes)</p>
            <h3>4020 773 807</h3>
            <h5 class="text-[#C40A0A]">Expires in: 12:30</h5>
          </div>
          <div
            class="flex bg-[#0050E60D] rounded-md shadow-sm flex-col justify-center items-center p-4"
          >
            <ul class="">
              <p class="text-[#024896] font-medium text-[14px] text-start">
                Important
              </p>
              {#each tips as tip}
                <li class="flex items-start gap-3">
                  <span
                    class="w-2 h-2 mt-[6px] flex-shrink-0 bg-blue-600 rounded-full"
                  ></span>
                  <p class="text-sm leading-relaxed">{tip}</p>
                </li>
              {/each}
            </ul>
          </div>
          <div
            class="flex sm:flex-row bg-[#F406061A] rounded-md shadow-sm flex-col justify-center items-center p-4"
          >
            <p class=" font-medium text-[14px] text-[#F40606]">ID Card Fee</p>
            <p class=" font-medium text-[14px]">
              Waiting for your payment confirmation
            </p>
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <button
            on:click={next}
            class="!w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 text-sm font-medium transition-all"
          >
            I’ve Paid - Verify Payment
          </button>
          <button
            on:click={next}
            class=" btn-transperent !w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 text-sm font-medium transition-all hover:text-white"
          >
            Change Details
          </button>
          <button
            on:click={next}
            class=" btn-transperent !w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 text-sm font-medium transition-all hover:text-white"
          >
            Generate a new account
          </button>
        </div>
      </div>
    {/if}
  </div>
</main>
