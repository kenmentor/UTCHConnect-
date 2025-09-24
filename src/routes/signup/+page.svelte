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

<div class="flex items-center justify-center p-4 pt-32 min-h-screen bg-gray-50">
  <div class="flex flex-col gap-6 w-full max-w-lg md:max-w-xl">
    <!-- Card -->
    <div class="p-6 md:p-8 border outline outline-black/5 bg-white shadow-md">
      <div class="flex flex-col items-center py-4 md:py-6">
        <h2
          class="text-2xl md:text-3xl font-semibold text-center text-gray-800"
        >
          Welcome to YOUreka
        </h2>
        <h4 class="text-blue-600 text-lg md:text-xl mt-2">Create an account</h4>
      </div>

      <Form on:submit={handleSignup}>
        <FormGroup class="flex flex-col gap-3">
          <TextInput
            class="!h-[50px] md:!h-[56px] !text-[16px] md:!text-[18px]"
            bind:value={firstName}
            labelText="First Name"
            placeholder="Enter your first name"
          />
          <TextInput
            class="!h-[50px] md:!h-[56px] !text-[16px] md:!text-[18px]"
            bind:value={lastName}
            labelText="Last Name"
            placeholder="Enter your last name"
          />
          <TextInput
            class="!h-[50px] md:!h-[56px] !text-[16px] md:!text-[18px]"
            bind:value={email}
            labelText="Email"
            placeholder="Enter your email"
            type="email"
          />
          <PasswordInput
            class="!h-[50px] md:!h-[56px] !text-[16px] md:!text-[18px]"
            bind:value={password}
            labelText="Password"
            placeholder="Enter your password"
          />
          <PasswordInput
            class="!h-[50px] md:!h-[56px] !text-[16px] md:!text-[18px]"
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
            class="!flex !justify-center !text-[16px] md:!text-[18px] !w-full mt-2 !max-w-full "
            type="submit"
          >
            Sign up
          </Button>
        </FormGroup>
      </Form>
    </div>

    <!-- Divider & Login button -->
    <div class="flex flex-col gap-4">
      <div class="relative flex items-center">
        <div class="flex-grow border-t border-gray-300"></div>
        <span class="flex-shrink mx-4 text-gray-500 text-[16px] md:text-[18px]">
          New to YOUreka
        </span>
        <div class="flex-grow border-t border-gray-300"></div>
      </div>

      <Button
        kind="tertiary"
        class="!flex !justify-center !w-full md:!w-auto !max-w-full  !text-[16px] md:!text-[18px]"
      >
        Log In
      </Button>
    </div>
  </div>
</div>
