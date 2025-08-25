<script setup>
const username = "zanderroi";
</script>

<template>
  <section class="flex flex-col items-center gap-6 py-10 p-4">
    <!-- GitHub Contribution Graph -->
    <div class="w-full max-w-4xl">
      <img
        :src="`https://ghchart.rshah.org/${username}`"
        alt="GitHub Contribution Graph"
        class="rounded-lg shadow-md w-full"
      />
    </div>

    <!-- GitHub Stats Card -->
    <!-- <div class="w-full max-w-md">
      <img
        :src="`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=radical`"
        alt="GitHub Stats"
        class="rounded-lg shadow-md"
      />
    </div> -->
  </section>
</template>