<script setup>
import { ref } from 'vue';

const tooltipVisible = ref(false);
const tooltipText = ref('Click to copy');

const showTooltip = (text) => {
  tooltipText.value = text;
  tooltipVisible.value = true;
};

const hideTooltip = () => {
  tooltipVisible.value = false;
};

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text).then(() => {
    tooltipText.value = 'Copied!';
    tooltipVisible.value = true;
    setTimeout(() => {
      tooltipVisible.value = false;
      tooltipText.value = 'Click to copy';
    }, 2000);
  });
};
</script>
<template>
  <div class="bg-gray-100">
    <header>
      <div
        class="fixed top-0 w-full z-20 border-b border-gray-600 bg-gray-100 text-gray-400"
      >
        <!-- bg-gradient-to-tr from-black via-slate-900 to-cyan-900 -->

        <div class="flex">
          <div class="relative z-20 border-b-4 border-orange-600 text-center w-full p-2">
            <p class="text-lg text-black font-semibold">Zander Roi Tabelona</p>
            <p
              class="text-sm text-gray-500 cursor-pointer relative"
              @click="copyToClipboard('zandertabelona@gmail.com')"
              @mouseover="showTooltip('Click to copy')"
              @mouseleave="hideTooltip"
            >
              zandertabelona@gmail.com
              <span
                v-if="tooltipVisible"
                class="absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded py-1 px-2"
              >
                {{ tooltipText }}
              </span>
            </p>
            <p>
              <a
                href="https://www.linkedin.com/in/zndrroi/"
                target="_blank"
                class="text-sm text-gray-500"
                >linkedin.com/zndrroi</a
              >
            </p>
            <p>
              <a
                href="https://www.github.com/zanderroi"
                target="_blank"
                class="text-sm text-gray-500"
                >github.com/zndrroi</a
              >
            </p>
          </div>
        </div>
      </div>
    </header>
    <main>
      <slot />
    </main>
  </div>

  <footer class="bg-gray-200 p-4 text-center">
    <p class="text-gray-400 text-xs">zandertabelona@gmail.com</p>
    <p><a href="/" class="text-gray-400 text-xs">linkedin.com/zndrroi</a></p>
    <p><a href="/" class="text-gray-400 text-xs">github.com/zndrroi</a></p>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped></style>
