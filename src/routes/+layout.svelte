<script lang="ts">
  import favicon from "$lib/assets/favicon.svg";
  import "../app.css";
  import "carbon-components-svelte/css/all.css";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" type="image/png" href="/favicon.png" />
</svelte:head>

{@render children?.()}
