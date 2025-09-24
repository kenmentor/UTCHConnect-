<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import {
    Button,
    Tile,
    Grid,
    Row,
    Column,
    ContentSwitcher,
    Switch,
  } from "carbon-components-svelte";
  import {
    Rocket,
    Collaborate,
    Accessibility,
    Idea,
  } from "carbon-icons-svelte";

  // Team values
  const values = [
    {
      icon: Rocket,
      title: "Innovation",
      desc: "We push boundaries with cutting-edge solutions that make a difference.",
    },
    {
      icon: Collaborate,
      title: "Collaboration",
      desc: "We believe teamwork and transparency drive the best outcomes.",
    },
    {
      icon: Accessibility,
      title: "Accessibility",
      desc: "Technology should empower everyone, everywhere, without barriers.",
    },
    {
      icon: Idea,
      title: "Creativity",
      desc: "We solve problems with design thinking and imagination.",
    },
  ];

  // Timeline items
  let active = 0;
  const timeline = [
    {
      title: "Our Mission",
      desc: "Empowering individuals and businesses with accessible technology solutions that inspire growth and impact.",
    },
    {
      title: "Our Vision",
      desc: "To be the leading force in innovation across Africa, building tools that change lives globally.",
    },
    {
      title: "Our Story",
      desc: "Founded by passionate engineers and creators, we’ve grown into a team dedicated to pushing boundaries in tech.",
    },
  ];

  // Team members
  const team = [
    {
      name: "Elihu Osim",

      img: "/team/mentor.jpg",
    },
    { name: "Foluso Adebisi", role: "", img: "/team/jane.jpg" },
  ];
</script>

<Header />
<!-- Hero -->
<section class="bg-gray-100 py-16 pt-[200px]">
  <Grid>
    <Row>
      <Column lg={8} md={6} sm={4}>
        <h1 class="text-4xl font-bold mb-4">About Us</h1>
        <p class="text-lg text-gray-700 mb-6 text-left">
          We are passionate innovators, engineers, and creators on a mission to
          build technology that empowers the future.
        </p>
        <Button kind="primary">Get in Touch</Button>
      </Column>
    </Row>
  </Grid>
</section>

<!-- Values -->
<section class="py-16">
  <Grid>
    <Row>
      <Column>
        <h2 class="text-3xl font-bold text-center mb-10">Our Core Values</h2>
      </Column>
    </Row>
    <Row>
      {#each values as v}
        <Column lg={4} md={2} sm={4} class="mb-6">
          <Tile light>
            <svelte:component
              this={v.icon}
              class="w-10 h-10 mb-4 text-blue-600"
            />
            <h3 class="text-xl font-semibold mb-2">{v.title}</h3>
            <p class="text-gray-600 text-left">{v.desc}</p>
          </Tile>
        </Column>
      {/each}
    </Row>
  </Grid>
</section>

<!-- Timeline -->
<section class="bg-gray-50 py-16">
  <Grid>
    <Row>
      <Column>
        <h2 class="text-3xl font-bold text-center mb-10">Who We Are</h2>
      </Column>
    </Row>
    <Row class="justify-center">
      <Column lg={8} md={6} sm={4} class="text-center">
        <ContentSwitcher>
          {#each timeline as item, i}
            <Switch>{item.title}</Switch>
          {/each}
        </ContentSwitcher>
        <div class="mt-6">
          <p class="text-lg text-gray-700">{timeline[active].desc}</p>
        </div>
      </Column>
    </Row>
  </Grid>
</section>

<!-- Team -->
<section class="py-16">
  <Grid>
    <Row>
      <Column>
        <h2 class="text-3xl font-bold text-center mb-10">Meet Our Team</h2>
      </Column>
    </Row>
    <Row class="justify-center">
      {#each team as member}
        <Column lg={4} md={2} sm={4} class="mb-6 flex justify-center">
          <div class="bg-white shadow-lg rounded-lg overflow-hidden w-72">
            <img
              src={member.img}
              alt={member.name}
              class="w-full h-56 object-cover"
            />
            <div class="p-4">
              <h3 class="font-bold text-lg">{member.name}</h3>
              <p class="text-gray-600">{member.role}</p>
            </div>
          </div>
        </Column>
      {/each}
    </Row>
  </Grid>
</section>

<!-- CTA -->
<section class="bg-blue-600 text-white py-16 text-center">
  <Grid>
    <Row>
      <Column>
        <h2 class="text-3xl font-bold mb-4">Let’s Build the Future Together</h2>
        <p class="mb-6">
          Interested in working with us or joining our team? We’d love to hear
          from you.
        </p>
        <Button kind="secondary">Contact Us</Button>
      </Column>
    </Row>
  </Grid>
</section>
