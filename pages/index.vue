<template>
  <div class="h-screen bg-bottom flex flex-col justify-center items-center p-4">
    <div class="flex flex-row space-x-4 justify-center items-center p-4 my-16 md:p-4">
      <div
        class="bg-white p-8 rounded-xl max-w-3xl animate-slideInLeft h-auto shadow-xl shadow-gray-300"
      >
        <div class="flex space-x-2 border-b border-gray-300 pb-4">
          <div class="w-4 h-4 rounded-full bg-red-500"></div>
          <div class="w-4 h-4 rounded-full bg-yellow-500"></div>
          <div class="w-4 h-4 rounded-full bg-green-500"></div>
        </div>

        <h1 class="text-gray-800 text-3xl mt-4 mb-4">Hi, I'm Zander!</h1>
        <p class="text-gray-600 mb-4">
          I’m a versatile web developer, data analyst, and creative professional with a
          passion for building functional and user-friendly websites, systems, and
          data-driven solutions. I specialize in database management, data visualization,
          and problem-solving to create impactful digital experiences. Additionally, I
          have experience in video editing and social media management, allowing me to
          craft engaging content and optimize online presence.
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

  <div class="flex flex-col items-center">
    <h3 class="text-4xl text-center font-semibold text-gray-800">Tech Stacks</h3>

    <div class="flex flex-wrap justify-evenly items-center mt-4 w-full space-y-2">
      <div
        class="space-y-1 w-52 h-64 p-6 bg-white border border-gray-200 rounded-lg shadow-sm transition duration-300 ease-in-out hover:scale-110 dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center items-center"
      >
        <img :src="'icons/css.png'" class="w-20" alt="" />
        <p class="text-center">CSS</p>
        <p class="text-xs">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam repudiandae blanditiis quo, </p>
      </div>
      <div
        class="space-y-1 w-52 h-64 p-6 bg-white border border-gray-200 rounded-lg shadow-sm transition duration-300 ease-in-out hover:scale-110 dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center items-center"
      >
        <img :src="'icons/html.png'" class="w-20" alt="" />
        <p class="text-center">HTML</p>
        <p class="text-xs">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam repudiandae blanditiis quo, </p>
      </div>
      <div
        class="space-y-1 w-52 h-64 p-6 bg-white border border-gray-200 rounded-lg shadow-sm transition duration-300 ease-in-out hover:scale-110 dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center items-center"
      >
        <img :src="'icons/laravel.png'" class="w-20" alt="" />
        <p class="text-center">Laravel</p>
        <p class="text-xs">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam repudiandae blanditiis quo, </p>
      </div>
      <div
        class="space-y-1 w-52 h-64 p-7 bg-white border border-gray-200 rounded-lg shadow-sm transition duration-300 ease-in-out hover:scale-110 dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center items-center"
      >
        <img :src="'icons/vue.png'" class="w-20" alt="" />
        <p class="text-center">VueJS</p>
        <p class="text-xs">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam repudiandae blanditiis quo, </p>
      </div>

      <div
        class="space-y-1 w-52 h-64 p-6 bg-white border border-gray-200 rounded-lg shadow-sm transition duration-300 ease-in-out hover:scale-110 dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center items-center"
      >
        <img :src="'icons/vue.png'" class="w-20" alt="" />
        <p class="text-center">VueJS</p>
        <p class="text-xs">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam repudiandae blanditiis quo, </p>
      </div>

      <div
        class="space-y-1 w-52 h-64 p-6 bg-white border border-gray-200 rounded-lg shadow-sm transition duration-300 ease-in-out hover:scale-110 dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center items-center"
      >
        <img :src="'icons/vue.png'" class="w-20" alt="" />
        <p class="text-center">VueJS</p>
        <p class="text-xs">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam repudiandae blanditiis quo, </p>
      </div>
    </div>
  </div>

  <div class="px-8 py-8 flex flex-col items-center mt-4">
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
  </div>
</template>

<script setup>
import ThreeDIcon from "@/components/ThreeDIcon.vue";
definePageMeta({
  layout: "default",
});
</script>

<style lang="scss" scoped></style>
