<template>
  <div
    class="bg-gray-800 h-auto bg-bottom flex flex-col justify-center items-center p-4"
  >
    <div class="flex flex-row space-x-4 justify-center items-center p-4 my-16 md:p-4" >
      <div class="bg-black p-8 rounded-xl max-w-3xl animate-slideInLeft h-auto shadow-xl shadow-gray-600">
        <div class="flex space-x-2 border-b border-gray-800 pb-4">
          <div class="w-4 h-4 rounded-full bg-red-600"></div>
          <div class="w-4 h-4 rounded-full bg-yellow-600"></div>
          <div class="w-4 h-4 rounded-full bg-green-600"></div>
        </div>

        <h1 class="text-white text-3xl mt-4 mb-4">Hi, I'm Zander!</h1>
        <p class="text-gray-400 mb-4">
          A dedicated web developer specializing in building functional and
          user-friendly websites and systems using Laravel and Vue.js.
          Passionate about problem-solving and creating impactful digital
          solutions.
        </p>
        <button class="bg-indigo-700 px-4 py-2 rounded-md text-white hover:bg-gray-800"><font-awesome-icon icon="circle-info" class="mr-2" />Learn more</button>
      </div>
      <div class="hidden md:!block md:!w-1/2">
      <img src="assets/img/robot.gif" class="w-3/4"  alt="Robot">
     </div>
     
   
    </div>
  </div>

  <div class="h-80 bg-indigo-700"></div>
</template>

<script setup>
definePageMeta({
  layout: "default",
});
</script>

<style lang="scss" scoped></style>
