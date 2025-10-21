<script>
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";
  import { TextArea, TextInput } from "carbon-components-svelte";
  import { Email, Location, Phone } from "carbon-icons-svelte";
</script>

<Header />

<main
  class="min-h-screen w-full
  flex flex-col justify-between items-center
  px-6 sm:px-8 md:px-12 lg:px-20 xl:px-32
  pt-28 pb-24 space-y-24
  bg-[radial-gradient(circle_at_center,_#e6f4ff%,_#ffffff_85%)]
  text-gray-900
  transition-all duration-700 ease-out
  overflow-x-hidden"
>
  <!-- Contact Section -->
  <section class="w-full max-w-7xl px-6 py-16">
    <!-- Intro -->
    <div class="text-center mb-16">
      <h1
        class="text-4xl font-semibold mb-4 tracking-tight text-[#161C2D] text-[50px]"
      >
        Contact Us
      </h1>
      <p
        class="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed text-[19px] text-[#161C2D]"
      >
        We'd love to hear from you! Whether you have questions, feedback, or
        want to collaborate, our team is ready to connect and discuss how UUTH
        can serve you better.
      </p>
    </div>

    <!-- Info Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      <!-- Phone -->
      <div
        class="group bg-white/80 backdrop-blur-md shadow-sm hover:shadow-xl
        rounded-2xl p-6 flex flex-col items-center text-center border border-blue-50
        transition-transform duration-300 hover:-translate-y-2"
      >
        <div
          class="p-4 bg-blue-100 rounded-full text-blue-600 mb-4
          group-hover:scale-110 transition-transform"
        >
          <Phone size={28} />
        </div>
        <h2 class="text-lg font-semibold mb-1">Call Us</h2>
        <p class="text-gray-600 text-sm">+234-801-234-5678</p>
        <p class="text-gray-600 text-sm">+234-809-876-5432</p>
      </div>

      <!-- Email -->
      <div
        class="group bg-white/80 backdrop-blur-md shadow-sm hover:shadow-xl
        rounded-2xl p-6 flex flex-col items-center text-center border border-blue-50
        transition-transform duration-300 hover:-translate-y-2"
      >
        <div
          class="p-4 bg-green-100 rounded-full text-green-600 mb-4
          group-hover:scale-110 transition-transform"
        >
          <Email size={28} />
        </div>
        <h2 class="text-lg font-semibold mb-1">Email Us</h2>
        <p class="text-gray-600 text-sm">info@unicalradio.edu.ng</p>
        <p class="text-gray-600 text-sm">contact@unicalradio.edu.ng</p>
      </div>

      <!-- Location -->
      <div
        class="group bg-white/80 backdrop-blur-md shadow-sm hover:shadow-xl
        rounded-2xl p-6 flex flex-col items-center text-center border border-blue-50
        transition-transform duration-300 hover:-translate-y-2"
      >
        <div
          class="p-4 bg-purple-100 rounded-full text-purple-600 mb-4
          group-hover:scale-110 transition-transform"
        >
          <Location size={28} />
        </div>
        <h2 class="text-lg font-semibold mb-1">Visit Us</h2>
        <p class="text-gray-600 text-sm">University of Calabar</p>
        <p class="text-gray-600 text-sm">
          PMB 1115, Calabar, Cross River State
        </p>
      </div>
    </div>

    <!-- Contact Form -->
    <div
      class="bg-white/80 backdrop-blur-md shadow-lg p-10 border border-blue-50
      transition-all duration-500 hover:shadow-2xl"
    >
      <form class="space-y-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TextInput
            labelText="First & Last Name"
            placeholder="Enter your full name"
          />
          <TextInput labelText="Email" placeholder="Enter your email address" />
          <TextInput
            labelText="Phone Number"
            placeholder="Enter your phone number"
          />
          <TextInput
            labelText="Subject"
            placeholder="Subject of your message"
          />
        </div>
        <TextArea labelText="Message" placeholder="Type your message here..." />
        <div class="flex justify-start">
          <button type="submit" class="text-[17px]"> Send Message </button>
        </div>
      </form>
    </div>
  </section>
</main>

<Footer />

<style>
  .btn {
    background: #e6f4ff;
  }
</style>
