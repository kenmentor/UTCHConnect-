<script>
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";
  import InformationDesk from "$lib/components/informationDesk.svelte";
  import PageLocator from "$lib/components/pageLocator.svelte";
  import info from "$lib/assets/info.png";

  $: data = {
    date: " September 08, 2025",
    type: " System Update",
    by: " By UCTH Administration",
    title: " New Electronic Health Records System Launch",
    image: info,
  };
</script>

<Header />
<main class="p-3 pt-24">
  <!-- Responsive container padding -->
  <div class="px-4 sm:px-10 lg:px-[160px] flex flex-col gap-[20px]">
    <PageLocator />

    <!-- Info tags -->
    <div class="flex flex-wrap gap-3">
      <span
        class="px-5 py-[15px] text-white bg-blue-600 text-[20px] font-semibold"
      >
        {data.date}
      </span>
      <span class="bg-[#D9D9D9] px-5 py-[15px] text-[20px] font-semibold">
        {data.type}
      </span>
      <span class="px-5 py-[15px] text-[20px] font-semibold">
        {data.by}
      </span>
    </div>

    <!-- Content -->
    <div class="flex flex-col items-start gap-[20px]">
      <h1 class="font-semibold">
        {data.title}
      </h1>
      <p>
        UCTH has successfully implemented a comprehensive electronic health
        records system to improve patient care coordination and reduce waiting
        times across all departments.
      </p>

      <!-- Responsive image height -->
      <img
        src={info}
        class="w-full h-auto max-h-[400px] sm:max-h-[500px] lg:max-h-[609px] aspect-video object-cover"
      />

      <p>
        The University of Calabar Teaching Hospital (UCTH) is proud to announce
        the successful implementation of our new state-of-the-art Electronic
        Health Records (EHR) system. This significant technological advancement
        represents our commitment to providing the highest quality of healthcare
        services to our patients while streamlining operations for our medical
        staff.
      </p>

      <div>
        <h3>Key Features of the New System</h3>
        <p>
          The new EHR system brings numerous improvements to patient care and
          hospital efficiency:
        </p>
        <p>
          <span class="bold">Integrated Patient Records:</span> Complete medical
          histories, test results, and treatment plans are now accessible from any
          department.
        </p>
        <p>
          <span class="bold">Reduced Wait Times:</span> Faster access across all
          hospital units.
        </p>
        <p>
          <span class="bold">Enhanced Safety:</span> Built-in alerts for drug interactions,
          allergies, and critical values.
        </p>
        <p>
          <span class="bold">Better Coordination:</span> Seamless communication between
          doctors, nurses, and specialists.
        </p>
        <p>
          <span class="bold">Digital Prescriptions:</span> Electronic prescribing
          reduces errors and improves pharmacy efficiency.
        </p>
      </div>

      <!-- Highlighted box -->
      <div class="flex flex-col sm:flex-row bg-gray-50 rounded-md shadow-sm">
        <div
          class="w-full sm:w-1 bg-blue-600 rounded-t-md sm:rounded-l-md sm:rounded-t-none"
        ></div>
        <div class="p-6">
          <h3 class="text-lg font-semibold text-gray-800 mb-2">
            Important for Patients
          </h3>
          <p class="text-gray-600 leading-relaxed">
            Patients will notice faster service during visits as medical staff
            can quickly access complete health records. This means more time for
            quality care and less time waiting for paperwork and records
            retrieval.
          </p>
        </div>
      </div>

      <h3>Implementation Timeline</h3>
      <p>
        The EHR system rollout began in July 2025 with extensive staff training
        across all departments. The phased implementation approach ensured
        minimal disruption to patient services:
      </p>
      <p>
        <span class="bold">Phase 1 (July):</span> Administrative departments and
        outpatient clinics.
      </p>
      <p>
        <span class="bold">Phase 2 (August):</span> Emergency department and diagnostic
        services
      </p>
      <p>
        <span class="bold">Phase 3 (September):</span> Inpatient wards and surgical
        departments.
      </p>
      <p>
        All departments are now fully operational on the new system, with
        ongoing support and additional training sessions scheduled throughout
        the coming months.
      </p>

      <h3>Benefits for Healthcare Providers</h3>
      <p>
        Medical staff have reported significant improvements in their daily
        workflows. Dr. Sarah Okafor, Head of Internal Medicine, stated: "The new
        system has transformed how we deliver patient care. Having instant
        access to complete patient histories and test results has dramatically
        improved our diagnostic capabilities."
      </p>
      <p>
        Nursing staff have also praised the system's user-friendly interface and
        mobile accessibility, allowing them to update patient records directly
        from bedside tablets, reducing paperwork and increasing time spent on
        direct patient care.
      </p>

      <h3>Looking Forward</h3>
      <p>
        Medical staff have reported significant improvements in their daily
        workflows. Dr. Sarah Okafor, Head of Internal Medicine, stated: "The new
        system has transformed how we deliver patient care. Having instant
        access to complete patient histories and test results has dramatically
        improved our diagnostic capabilities."
      </p>

      <div>
        <h1>Related Articles</h1>
        <InformationDesk title="Related Articles" />
      </div>
    </div>
  </div>
</main>
<Footer />

<style>
  p {
    font-weight: 400;
    font-size: 25px;
    line-height: 36px;
    letter-spacing: 0%;
  }
  h1 {
    font-size: 58px;
  }
  p,
  h1 {
    text-align: left;
  }
  h3 {
    font-family: IBM Plex Sans;
    font-weight: 500;
    font-size: 30px;
    line-height: 100%;
    letter-spacing: 0%;
  }
  .bold {
    font-family: IBM Plex Sans;
    font-weight: 500;
    font-size: 30px;
    line-height: 42px;
    letter-spacing: 0%;
  }

  /* ✅ Reduce font size only on mobile */
  @media (max-width: 640px) {
    h1 {
      font-size: 32px;
    }
    p {
      font-size: 18px;
      line-height: 28px;
    }
    h3,
    .bold {
      font-size: 22px;
      line-height: 30px;
    }
  }
</style>
