<script lang="ts">
  export let percentage: number = 65; // default value
  export let size: number = 120; // width/height of SVG
  export let stroke: number = 12; // thickness of the ring
  export let color: string = "";
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;

  // stroke offset (the "empty" part of the ring)
  $: offset = circumference - (percentage / 100) * circumference;
</script>

<div class="flex items-center justify-start">
  <!-- Relative container keeps % inside -->
  <div class="relative">
    <svg width={size} height={size} class="rotate-[-90deg]">
      <!-- Background ring -->
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="#e5e7eb"
        stroke-width={stroke}
        fill="transparent"
      />

      <!-- Progress ring -->
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={color}
        stroke-width={stroke}
        stroke-linecap="round"
        fill="transparent"
        stroke-dasharray={circumference}
        stroke-dashoffset={offset}
        class="transition-all duration-700 ease-out"
      />
    </svg>

    <!-- Number in center -->
    <span
      class="absolute inset-0 flex items-center justify-center text-[12px] font-semibold text-gray-800"
    >
      {percentage}%
    </span>
  </div>
</div>
