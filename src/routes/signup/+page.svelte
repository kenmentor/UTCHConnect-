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
  } from "carbon-components-svelte";

  let firstName = "";
  let lastName = "";
  let email = "";
  let password = "";
  let confirmPassword = "";
  let agreedToTerms = false;
  let showPassword = false;

  function handleSignup(event) {
    event.preventDefault();
    console.log("Signup attempt:", {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      agreedToTerms,
    });
  }

  function togglePasswordVisibility() {
    showPassword = !showPassword;
  }
</script>

<Header />

<div
  class="flex items-center justify-center min-h-screen bg-gray-50 px-4 sm:px-6 md:px-8 pt-24 sm:pt-28 md:pt-32"
>
  <div
    class="flex flex-col gap-6 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
  >
    <!-- Card -->
    <div
      class="p-5 sm:p-6 md:p-8 border outline outline-black/5 bg-white shadow-sm"
    >
      <div class="flex flex-col items-center py-4 sm:py-6">
        <h2
          class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-center text-gray-800"
        >
          Welcome to YOUreka
        </h2>
        <h4 class="text-blue-600 text-base sm:text-lg md:text-xl mt-2">
          Create an account
        </h4>
      </div>

      <Form on:submit={handleSignup}>
        <FormGroup class="flex flex-col gap-3">
          <TextInput
            class="!h-[46px] sm:!h-[50px] md:!h-[56px] !text-[14px] sm:!text-[16px] md:!text-[18px]"
            bind:value={firstName}
            labelText="First Name"
            placeholder="Enter your first name"
          />
          <TextInput
            class="!h-[46px] sm:!h-[50px] md:!h-[56px] !text-[14px] sm:!text-[16px] md:!text-[18px]"
            bind:value={lastName}
            labelText="Last Name"
            placeholder="Enter your last name"
          />
          <TextInput
            class="!h-[46px] sm:!h-[50px] md:!h-[56px] !text-[14px] sm:!text-[16px] md:!text-[18px]"
            bind:value={email}
            labelText="Email"
            placeholder="Enter your email"
            type="email"
          />
          <PasswordInput
            class="!h-[46px] sm:!h-[50px] md:!h-[56px] !text-[14px] sm:!text-[16px] md:!text-[18px]"
            bind:value={password}
            labelText="Password"
            placeholder="Enter your password"
          />
          <PasswordInput
            class="!h-[46px] sm:!h-[50px] md:!h-[56px] !text-[14px] sm:!text-[16px] md:!text-[18px]"
            bind:value={confirmPassword}
            labelText="Confirm Password"
            placeholder="Re-enter your password"
          />

          <Checkbox
            id="agreedToTerms"
            labelText="By continuing, you agree to the Terms of Use and Privacy Policy."
            bind:checked={agreedToTerms}
          />

          <Button
            href="/login"
            class="!flex !justify-center !text-[14px] sm:!text-[16px] md:!text-[18px] !w-full mt-2 !max-w-full"
            type="submit"
          >
            Sign up
          </Button>
        </FormGroup>
      </Form>
    </div>

    <!-- Divider & Login button -->
    <div class="flex flex-col gap-4 pb-8">
      <div class="relative flex items-center">
        <div class="flex-grow border-t border-gray-300"></div>
        <span
          class="flex-shrink mx-3 sm:mx-4 text-gray-500 text-[14px] sm:text-[16px] md:text-[18px]"
        >
          Already have an account?
        </span>
        <div class="flex-grow border-t border-gray-300"></div>
      </div>

      <Button
        kind="tertiary"
        class="!flex !justify-center !w-full sm:!w-auto !max-w-full !text-[14px] sm:!text-[16px] md:!text-[18px]"
      >
        Log In
      </Button>
    </div>
  </div>
</div>
