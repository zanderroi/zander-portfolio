<template>
  <div class="bg-gray-100">
    <header class="sticky top-0 bg-white shadow-sm z-50">
    <div class="flex items-center justify-between p-4">
      <div>
        <span class="text-xl font-bold text-orange-600">ZANDER ROI TABELONA</span>
        <button v-if="isMobile" @click="toggleDropdown" class="ml-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
      <nav v-if="!isMobile">

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
      </nav>
    </div>
    <div v-if="isMobile && dropdownOpen" class="p-4">
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

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 0);
const dropdownOpen = ref(false);
const tooltipVisible = ref(false);
const tooltipText = ref('');

const isMobile = computed(() => windowWidth.value < 768);

const handleResize = () => {
  windowWidth.value = window.innerWidth;
};

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};

const showTooltip = (text) => {
  tooltipText.value = text;
  tooltipVisible.value = true;
};

const hideTooltip = () => {
  tooltipVisible.value = false;
};

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text);
  showTooltip('Copied!');
  setTimeout(hideTooltip, 2000);
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<style lang="scss" scoped></style>
