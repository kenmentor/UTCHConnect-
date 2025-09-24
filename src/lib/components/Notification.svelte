<script>
  import { Button } from "carbon-components-svelte";
  export let title;
  export let desc;
  export let image;
  export let percent;
  export let index;

  const palette = [
    "#2563eb", // blue-600
    "#16a34a", // green-600
    "#dc2626", // red-600
    "#9333ea", // purple-600
    "#f59e0b", // amber-500
    "#0891b2", // cyan-600
  ];
  if (index > palette.length) {
    index = index - palette.length;
  }
  // If parent doesn’t provide color, pick random
  export let color = palette[index];
</script>

<div class=" shadow-lg p-[18px] flex flex-col gap-5 relative my-5">
  <div
    class={`bg-${color}-600  h-[10px] absolute  top-0 left-0 right-0`}
    style={`background:${color}`}
  ></div>
  <div>
    <div>
      <div class="flex">
        <div style="background: {color};" class="p-2 rounded-sm">
          <img src={image} alt="" class="h-[30px]" />
        </div>
      </div>

      <div>{percent}</div>
    </div>
    <div>
      <h2>
        {title}
      </h2>
      <p class="text-left">
        {desc}
      </p>
    </div>
  </div>
</div>
