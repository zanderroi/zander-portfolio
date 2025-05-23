<template>
  <div class="flex flex-col justify-center items-center p-2">
    <p class="text-gray-300 text-md">WEBSITE UNDER MAINTENANCE :)</p>
    <div class="flex flex-row space-x-4 justify-center items-center p-2 md:p-4">
      <div
        class="bg-white p-4 rounded-xl max-w-3xl animate-slideInLeft h-auto shadow-xl shadow-gray-300"
      >
        <div class="flex space-x-2 border-b border-gray-300 pb-4">
          <div class="w-4 h-4 rounded-full bg-red-500"></div>
          <div class="w-4 h-4 rounded-full bg-yellow-500"></div>
          <div class="w-4 h-4 rounded-full bg-green-500"></div>
        </div>

        <h1 class="text-gray-800 text-3xl mt-2 mb-4">Hi, I'm Zander!</h1>
        <p class="text-gray-600 mb-4">
          I’m a web developer and data analyst passionate about building
          user-friendly websites and data-driven solutions. I also create
          content through video editing and manage social media to boost online
          presence.
        </p>
        <!-- <button class="bg-indigo-700 px-4 py-2 rounded-md text-white hover:bg-gray-800">
          <font-awesome-icon icon="circle-info" class="mr-2" />Learn more
        </button> -->
      </div>
      <div class="hidden md:block md:w-full h-64">
        <div class="w-96 h-full">
          <ThreeDIcon />
        </div>
      </div>
    </div>
  </div>

  <div
    class="flex flex-col justify-center items-center p-2"
    style="min-height: 30rem"
  >
    <h3 class="text-4xl text-center font-semibold text-gray-800 mb-8 mt-8">
      Tech Stacks
    </h3>

    <div
      class="flex flex-wrap justify-center items-center md:flex-row flex-col space-y-6 md:space-y-4 md:space-x-4"
    >
      <div class="flex flex-row space-x-4 justify-center items-center">
        <img :src="'icons/css.png'" class="w-16" alt="" />
        <div>
          <p class="text-center">CSS</p>
          <div class="flex justify-center">
            <span v-for="n in 5" :key="n" class="text-yellow-500 star">
              <i :class="n <= 5 ? 'fas fa-star' : 'far fa-star'"></i>
            </span>
          </div>
        </div>
      </div>

      <div class="flex flex-row space-x-4 justify-center items-center">
        <img :src="'icons/html.png'" class="w-16" alt="" />
        <div>
          <p class="text-center">HTML</p>
          <div class="flex justify-center">
            <span v-for="n in 5" :key="n" class="text-yellow-500 star">
              <i :class="n <= 5 ? 'fas fa-star' : 'far fa-star'"></i>
            </span>
          </div>
        </div>
      </div>

      <div class="flex flex-row space-x-4 justify-center items-center">
        <img :src="'icons/laravel.png'" class="w-16" alt="" />
        <div>
          <p class="text-center">Laravel</p>
          <div class="flex justify-center">
            <span v-for="n in 5" :key="n" class="text-yellow-500 star">
              <i :class="n <= 4 ? 'fas fa-star' : 'far fa-star'"></i>
            </span>
          </div>
        </div>
      </div>

      <div class="flex flex-row space-x-4 justify-center items-center">
        <img :src="'icons/vue.png'" class="w-16" alt="" />
        <div>
          <p class="text-center">VueJS</p>
          <div class="flex justify-center">
            <span v-for="n in 5" :key="n" class="text-yellow-500 star">
              <i :class="n <= 4 ? 'fas fa-star' : 'far fa-star'"></i>
            </span>
          </div>
        </div>
      </div>

      <div class="flex flex-row space-x-4 justify-center items-center">
        <img :src="'icons/wordpress.png'" class="w-16" alt="" />
        <div>
          <p class="text-center">Wordpress</p>
          <div class="flex justify-center">
            <span v-for="n in 5" :key="n" class="text-yellow-500 star">
              <i :class="n <= 3 ? 'fas fa-star' : 'far fa-star'"></i>
            </span>
          </div>
        </div>
      </div>

      <div class="flex flex-row space-x-4 justify-center items-center">
        <img :src="'icons/aws.png'" class="w-16" alt="" />
        <div>
          <p class="text-center">AWS</p>
          <div class="flex justify-center">
            <span v-for="n in 5" :key="n" class="text-yellow-500 star">
              <i :class="n <= 2 ? 'fas fa-star' : 'far fa-star'"></i>
            </span>
          </div>
        </div>
      </div>

      <div class="flex flex-row space-x-4 justify-center items-center">
        <img :src="'icons/mysql.png'" class="w-16" alt="" />
        <div>
          <p class="text-center">MySQL</p>
          <div class="flex justify-center">
            <span v-for="n in 5" :key="n" class="text-yellow-500 star">
              <i :class="n <= 4 ? 'fas fa-star' : 'far fa-star'"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="flex flex-col items-center">
    <h3 class="text-4xl mt-8 text-center font-semibold text-gray-800">
      Creative & Marketing Skills
    </h3>

    <div
      class="flex flex-wrap justify-evenly items-center mt-4 w-full space-y-2"
    >
      <div
        class="space-y-1 w-52 h-64 p-6 bg-white border border-gray-200 rounded-lg shadow-sm transition duration-300 ease-in-out hover:scale-110 dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center items-center"
      >
        <img :src="'icons/pr.png'" class="w-20" alt="" />
        <p class="text-center text-xs">Adobe Premiere Pro</p>
        <p class="text-xs">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
          repudiandae blanditiis quo,
        </p>
      </div>

      <div
        class="space-y-1 w-52 h-64 p-6 bg-white border border-gray-200 rounded-lg shadow-sm transition duration-300 ease-in-out hover:scale-110 dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center items-center"
      >
        <img :src="'icons/ps.png'" class="w-20" alt="" />
        <p class="text-center">Adobe Photshop</p>
        <p class="text-xs">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
          repudiandae blanditiis quo,
        </p>
      </div>
      <div
        class="space-y-1 w-52 h-64 p-6 bg-white border border-gray-200 rounded-lg shadow-sm transition duration-300 ease-in-out hover:scale-110 dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center items-center"
      >
        <img :src="'icons/canva.png'" class="w-20" alt="" />
        <p class="text-center">Canva</p>
        <p class="text-xs">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
          repudiandae blanditiis quo,
        </p>
      </div>
      <div
        class="space-y-1 w-52 h-64 p-6 bg-white border border-gray-200 rounded-lg shadow-sm transition duration-300 ease-in-out hover:scale-110 dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center items-center"
      >
        <img :src="'icons/figma.webp'" class="w-20" alt="" />
        <p class="text-center">Figma</p>
        <p class="text-xs">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
          repudiandae blanditiis quo,
        </p>
      </div>
      <div
        class="space-y-1 w-52 h-64 p-7 bg-white border border-gray-200 rounded-lg shadow-sm transition duration-300 ease-in-out hover:scale-110 dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center items-center"
      >
        <img :src="'icons/vue.png'" class="w-20" alt="" />
        <p class="text-center">VueJS</p>
        <p class="text-xs">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
          repudiandae blanditiis quo,
        </p>
      </div>

      <div
        class="space-y-1 w-52 h-64 p-6 bg-white border border-gray-200 rounded-lg shadow-sm transition duration-300 ease-in-out hover:scale-110 dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center items-center"
      >
        <img :src="'icons/vue.png'" class="w-20" alt="" />
        <p class="text-center">VueJS</p>
        <p class="text-xs">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
          repudiandae blanditiis quo,
        </p>
      </div>
    </div>
  </div>

  <!-- <div class="px-8 py-8 flex flex-col items-center mt-4">
    <h3 class="text-4xl text-center font-semibold text-gray-800">Work Experience</h3>

    <div class="flex flex-row justify-start items-center space-x-4 mt-4">
      <div
        class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
      >
        Work 1
      </div>
      <div
        class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
      >
        Work 2
      </div>
      <div
        class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
      >
        Work 3
      </div>
      <div
        class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
      >
        Work 4
      </div>
    </div>
  </div> -->
  <!-- Carousel -->
  <div class="relative px-4 sm:px-8 py-8 flex flex-col items-center mt-4">
    <h3 class="text-4xl text-center font-semibold text-gray-800">Projects</h3>
    <Carousel
      :items-to-show="itemsToShow"
      :items-to-scroll="1"
      class="mt-4 w-full"
    >
      <Slide>
        <div
          class="box space-y-1 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-72 p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center items-center"
        >
          <img :src="'icons/canva.png'" class="w-20" alt="" />
          <p class="text-center">Canva</p>
          <p class="text-xs">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
            repudiandae blanditiis quo,
          </p>
        </div>
      </Slide>
      <Slide>
        <div
          class="box space-y-1 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-72 p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center items-center"
        >
          <img :src="'icons/canva.png'" class="w-20" alt="" />
          <p class="text-center">Canva</p>
          <p class="text-xs">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
            repudiandae blanditiis quo,
          </p>
        </div>
      </Slide>

    </Carousel>
  </div>
</template>

<script setup>
import ThreeDIcon from "@/components/ThreeDIcon.vue";
import "vue3-carousel/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { ref, computed, onMounted, onUnmounted } from "vue";

definePageMeta({
  layout: "default",
});

const windowWidth = ref(typeof window !== "undefined" ? window.innerWidth : 0);

const itemsToShow = computed(() => (windowWidth.value < 768 ? 1 : 2));

const handleResize = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css");

.star {
  animation: glow 1s infinite alternate;
}

@keyframes glow {
  from {
    text-shadow: 0 0 1px yellow, 0 0 1px yellow, 0 0 2px yellow, 0 0 3px yellow;
    /* opacity: 1; */
  }
  to {
    text-shadow: 0 0 5px yellow, 0 0 5px yellow, 0 0 6px yellow, 0 0 7px yellow;
    /* opacity: 0; */
  }
}

.box {
  /* width: 60vmin;
  height: 50vmin; */
  /* display: grid;
  place-content: center; */
  /* color: rgb(1, 1, 1); */
  /* text-shadow: 0 1px 0 #000; */

  --border-angle: 0turn;
  --main-bg: conic-gradient(
    from var(--border-angle),
    #ffff,
    #ffff 5%,
    #ffff 60%,
    #ffff 95%
  );

  border: solid 5px transparent;
  border-radius: 2em;
  --gradient-border: conic-gradient(
    from var(--border-angle),
    transparent 25%,
    rgb(255, 72, 0),
    rgb(255, 128, 0) 99%,
    transparent
  );

  background: var(--main-bg) padding-box, var(--gradient-border) border-box,
    var(--main-bg) border-box;

  background-position: center center;

  animation: bg-spin 3s linear infinite;
  @keyframes bg-spin {
    to {
      --border-angle: 1turn;
    }
  }

  &:hover {
    animation-play-state: paused;
  }
}

@property --border-angle {
  syntax: "<angle>";
  inherits: true;
  initial-value: 0turn;
}
</style>
