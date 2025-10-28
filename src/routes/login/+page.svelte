<script>
  import Header from "$lib/components/Header.svelte";
  import {
    Button,
    TextInput,
    PasswordInput,
    Form,
    Link,
    Checkbox,
    FormGroup,
    NumberInput,
  } from "carbon-components-svelte";

  let number = "";
  let showPassword = false;

  function handleSignup(event) {
    event.preventDefault();
    console.log("Signup attempt:", { number });
  }

  function togglePasswordVisibility() {
    showPassword = !showPassword;
  }
</script>

<Header />

<div
  class="flex items-center justify-center min-h-screen bg-gray-50 px-4 sm:px-6 md:px-8"
>
  <div
    class="flex flex-col gap-6 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
  >
    <!-- Login Card -->
    <div
      class="p-5 sm:p-6 md:p-8 border outline outline-black/5 bg-white shadow-md"
    >
      <div class="flex flex-col items-center py-4 sm:py-6">
        <h2
          class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-center text-gray-800"
        >
          Log In
        </h2>
      </div>

      <Form on:submit={handleSignup}>
        <FormGroup class="flex flex-col gap-3">
          <TextInput
            class="!h-[46px] sm:!h-[50px] md:!h-[56px] !text-[14px] sm:!text-[16px] md:!text-[18px]"
            bind:value={number}
            labelText="Mobile phone number"
            placeholder="Phone Number"
          />

          <Button
            class="!max-w-full !flex !justify-center !bg-[#89868699] !text-[14px] sm:!text-[16px] md:!text-[18px] !w-full mt-2"
            type="submit"
            href="staffID/he/Overview"
          >
            Verify
          </Button>
        </FormGroup>
      </Form>
    </div>

    <!-- Divider & Signup -->
    <div class="flex flex-col gap-4 pb-8">
      <div class="relative flex items-center">
        <div class="flex-grow border-t border-gray-300"></div>
        <span
          class="flex-shrink mx-3 sm:mx-4 text-gray-500 text-[14px] sm:text-[16px] md:text-[18px]"
        >
          New to YOUreka
        </span>
        <div class="flex-grow border-t border-gray-300"></div>
      </div>

      <Button
        kind="tertiary"
        class="!flex !justify-center !w-full sm:!w-auto !max-w-full !text-[14px] sm:!text-[16px] md:!text-[18px]"
      >
        Create an account
      </Button>
    </div>
  </div>
</div>
