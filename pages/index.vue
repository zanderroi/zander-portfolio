<template>
  <div class="flex flex-col justify-center items-center p-2">
    <div class="bg-yellow-100 text-yellow-800 px-4 py-2 rounded mb-4">
      🚧 Website under construction. Updates coming soon!
    </div>
    <div
      class="flex flex-col space-y-4 md:flex-row md:space-x-8 justify-center items-center p-2 md:p-4"
    >
      <div
        class="bg-white p-4 rounded-xl max-w-3xl animate-slideInLeft h-auto shadow-xl shadow-gray-300"
      >
        <div class="flex space-x-2 border-b border-gray-300 pb-4">
          <div class="w-4 h-4 rounded-full bg-red-500"></div>
          <div class="w-4 h-4 rounded-full bg-yellow-500"></div>
          <div class="w-4 h-4 rounded-full bg-green-500"></div>
        </div>

        <h1 class="text-gray-800 text-lg md:text-3xl mt-2 mb-4">
          Hi, I'm Zander!
        </h1>
        <p class="text-gray-600 text-sm md:text-md mb-4">
          I’m a web developer and data analyst passionate about building
          user-friendly websites and data-driven solutions. I also create
          content through video editing and manage social media to boost online
          presence.
        </p>
        <!-- <button class="bg-indigo-700 px-4 py-2 rounded-md text-white hover:bg-gray-800">
          <font-awesome-icon icon="circle-info" class="mr-2" />Learn more
        </button> -->
      </div>
      <div class="hidden md:block md:w-full h-64 justify-center items-center">
        <div
          class="w-64 h-64 p-1 bg-orange-500 shadow-xl rounded-[40%] overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-[0_0_25px_#f97316]"
        >
          <img
            :src="'/images/profile.jpg'"
            alt="Zander"
            class="w-full h-full object-cover rounded-[40%]"
          />
        </div>
      </div>
    </div>
  </div>

  <!-- Carousel -->
  <div class="px-4 sm:px-8 py-8 flex flex-col justify-center items-center mt-4">
    <h3 class="text-4xl text-center font-semibold text-gray-800">Projects</h3>
    <Swiper
      :modules="[Navigation]"
      :slides-per-view="1"
      :space-between="20"
      :breakpoints="{ 768: { slidesPerView: 3 } }"
      navigation
      class="mt-4 w-full flex justify-center"
    >
      <SwiperSlide>
        <div
          class="group relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto bg-white border border-gray-200 rounded-xl shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col h-[25rem]"
        >
          <div class="relative overflow-hidden rounded-t-xl h-56">
            <img
              :src="'images/bsrs.png'"
              alt="Biometric Attendance System"
              class="w-full h-full object-cover transition duration-300 group-hover:scale-110"
            />
          </div>
          <div class="p-4 flex flex-col space-y-2 flex-1">
            <a
              href="https://bsrs.tesda.gov.ph/"
              target="_blank"
              class="text-orange-500 font-bold text-md flex items-center gap-2 hover:underline"
            >
              <i class="fa fa-link"></i>
              Biometric Attendance System
            </a>
            <p
              class="text-sm text-gray-600 dark:text-gray-300 leading-snug line-clamp-5"
            >
              A
              <span class="text-orange-500">Laravel-based</span> Biometric
              Scholarship Registration System for TESDA. While not part of the
              initial development, I was responsible for system enhancements and
              implementing additional features.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          class="group relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto bg-white border border-gray-200 rounded-xl shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col h-[25rem]"
        >
          <div class="relative overflow-hidden rounded-t-xl h-56">
            <img
              :src="'images/inventory.png'"
              alt="Inventory Management System"
              class="w-full h-full object-cover transition duration-300 group-hover:scale-110"
            />
          </div>
          <div class="p-4 flex flex-col space-y-2 flex-1">
            <a
              href="#"
              target="_blank"
              class="text-orange-500 font-bold text-md flex items-center gap-2 hover:underline"
            >
              <i class="fa fa-link"></i>
              Inventory Management System
            </a>
            <p
              class="text-sm text-gray-600 dark:text-gray-300 leading-snug line-clamp-5"
            >
              A full-stack <span class="text-orange-500">Laravel</span> and
              <span class="text-orange-500">NuxtJS</span> powered inventory
              system developed for the Philippine Merchant Marine Academy,
              enabling efficient tracking, management, and reporting of
              government-owned assets.
            </p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          class="group relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto bg-white border border-gray-200 rounded-xl shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col h-[25rem]"
        >
          <div class="relative overflow-hidden rounded-t-xl h-56">
            <img
              :src="'images/registrar.jpeg'"
              alt="Registrar Management System"
              class="w-full h-full object-cover transition duration-300 group-hover:scale-110"
            />
          </div>
          <div class="p-4 flex flex-col space-y-2 flex-1">
            <a
              href="#"
              target="_blank"
              class="text-orange-500 font-bold text-md flex items-center gap-2 hover:underline"
            >
              <i class="fa fa-link"></i>
              Registrar Management System
            </a>
            <p
              class="text-sm text-gray-600 dark:text-gray-300 leading-snug line-clamp-5"
            >
              A full-stack <span class="text-orange-500">Laravel</span> and
              <span class="text-orange-500">NuxtJS</span> powered registrar
              system developed for the Philippine Merchant Marine Academy,
              designed to streamline student records, enrollment processes, and
              academic reporting.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          class="group relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto bg-white border border-gray-200 rounded-xl shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col h-[25rem]"
        >
          <div class="relative overflow-hidden rounded-t-xl h-56">
            <img
              :src="'images/Tara.png'"
              alt="Car Rental Website"
              class="w-full h-full object-cover transition duration-300 group-hover:scale-110"
            />
          </div>
          <div class="p-4 flex flex-col space-y-2 flex-1">
            <a
              href="https://tara-rentals-front.vercel.app/#/"
              target="_blank"
              class="text-orange-500 font-bold text-lg flex items-center gap-2 hover:underline"
            >
              <i class="fa fa-link"></i>
              Car Rental Website
            </a>
            <p
              class="text-sm text-gray-600 dark:text-gray-300 leading-snug line-clamp-4"
            >
              A modern car rental platform built using
              <span class="text-orange-500">VueJS</span> with a responsive
              interface, booking management, and user-friendly design.
            </p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          class="group relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto bg-white border border-gray-200 rounded-xl shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col h-[25rem]"
        >
          <div class="relative overflow-hidden rounded-t-xl h-56">
            <img
              :src="'images/cultural.png'"
              alt="Cultural Storytelling Website"
              class="w-full h-full object-cover transition duration-300 group-hover:scale-110"
            />
          </div>
          <div class="p-4 flex flex-col space-y-2 flex-1">
            <a
              href="https://rural-royalties-iteration3.vercel.app/"
              target="_blank"
              class="text-orange-500 font-bold text-md flex items-center gap-2 hover:underline"
            >
              <i class="fa fa-link"></i>
              Cultural Storytelling Website
            </a>
            <p
              class="text-sm text-gray-600 dark:text-gray-300 leading-snug line-clamp-5"
            >
              A digital platform built using
              <span class="text-orange-500">NuxtJS</span> that amplifies the
              voices and stories of Pampanga’s drag queens, highlighting
              culture, identity, and community through engaging visuals and
              narratives.
            </p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          class="group relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto bg-white border border-gray-200 rounded-xl shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col h-[25rem]"
        >
          <div class="relative overflow-hidden rounded-t-xl h-56">
            <img
              :src="'images/mobile-app-design.png'"
              alt="Analytics Dashboard"
              class="w-full h-full object-cover transition duration-300 group-hover:scale-110"
            />
          </div>
          <div class="p-4 flex flex-col space-y-2 flex-1">
            <a
              href="https://www.figma.com/design/mYFP0GnK54Ph2gwk7ySy30/TARA-Mobile-App?node-id=1-2&t=cxpxy2TirU1UPegk-1"
              target="_blank"
              class="text-orange-500 font-bold text-lg flex items-center gap-2 hover:underline"
            >
              <i class="fa fa-link"></i>
              Mobile App - UI/UX
            </a>
            <p
              class="text-sm text-gray-600 dark:text-gray-300 leading-snug line-clamp-4"
            >
              A <span class="text-orange-500">Figma-based</span> mockup of a
              modern car rental mobile app, designed with a clean interface for
              easy booking, car browsing, and user-friendly navigation.
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>

  <div
    class="flex flex-col justify-center items-center p-2"
    style="min-height: 30rem"
  >
    <h3 class="text-4xl text-center font-semibold text-gray-800 mb-8 mt-8">
      Tech Stacks
    </h3>

    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      <div
        class="bg-white p-4 rounded-lg shadow-md flex flex-col items-center hover:scale-105 transition"
      >
        <div
          class="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mb-2"
        >
          <img :src="'icons/css.png'" class="w-10" alt="CSS" />
        </div>
        <p class="font-semibold">CSS</p>
        <p class="text-xs text-gray-500 text-center">
          3+ years, responsive design
        </p>
      </div>

      <div
        class="bg-white p-4 rounded-lg shadow-md flex flex-col items-center hover:scale-105 transition"
      >
        <div
          class="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mb-2"
        >
          <img :src="'icons/html.png'" class="w-10" alt="HTML" />
        </div>
        <p class="font-semibold">HTML</p>
        <p class="text-xs text-gray-500 text-center">
          3+ years, semantic structure
        </p>
      </div>

      <div
        class="bg-white p-4 rounded-lg shadow-md flex flex-col items-center hover:scale-105 transition"
      >
        <div
          class="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mb-2"
        >
          <img :src="'icons/laravel.png'" class="w-10" alt="Laravel" />
        </div>
        <p class="font-semibold">Laravel</p>
        <p class="text-xs text-gray-500 text-center">
          2+ years, APIs & enterprise systems
        </p>
      </div>

      <div
        class="bg-white p-4 rounded-lg shadow-md flex flex-col items-center hover:scale-105 transition"
      >
        <div
          class="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mb-2"
        >
          <img :src="'icons/vue.png'" class="w-10" alt="VueJS" />
        </div>
        <p class="font-semibold">VueJS</p>
        <p class="text-xs text-gray-500 text-center">
          2 years, SPA & Inertia apps
        </p>
      </div>

      <div
        class="bg-white p-4 rounded-lg shadow-md flex flex-col items-center hover:scale-105 transition"
      >
        <div
          class="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mb-2"
        >
          <img :src="'icons/wordpress.png'" class="w-10" alt="Wordpress" />
        </div>
        <p class="font-semibold">Wordpress</p>
        <p class="text-xs text-gray-500 text-center">
          1.5 years, themes & plugins
        </p>
      </div>

      <div
        class="bg-white p-4 rounded-lg shadow-md flex flex-col items-center hover:scale-105 transition"
      >
        <div
          class="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mb-2"
        >
          <img :src="'icons/aws.png'" class="w-10" alt="AWS" />
        </div>
        <p class="font-semibold">AWS</p>
        <p class="text-xs text-gray-500 text-center">Basic deployment & S3</p>
      </div>

      <div
        class="bg-white p-4 rounded-lg shadow-md flex flex-col items-center hover:scale-105 transition"
      >
        <div
          class="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mb-2"
        >
          <img :src="'icons/mysql.png'" class="w-10" alt="MySQL" />
        </div>
        <p class="font-semibold">MySQL</p>
        <p class="text-xs text-gray-500 text-center">
          2+ years, relational DB design
        </p>
      </div>
    </div>
  </div>

  <div class="flex flex-col items-center p-2">
    <h3 class="text-4xl mt-8 mb-4 text-center font-semibold text-gray-800">
      Creative & Marketing Skills
    </h3>

    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      <div
        class="bg-white p-4 rounded-lg shadow-md flex flex-col items-center hover:scale-105 transition"
      >
        <div
          class="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mb-2"
        >
          <img :src="'icons/pr.png'" class="w-10" alt="Premiere Pro" />
        </div>
        <p class="font-semibold">Premiere Pro</p>
        <p class="text-xs text-gray-500 text-center">
          Video editing for content
        </p>
      </div>

      <div
        class="bg-white p-4 rounded-lg shadow-md flex flex-col items-center hover:scale-105 transition"
      >
        <div
          class="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mb-2"
        >
          <img :src="'icons/ps.png'" class="w-10" alt="Photoshop" />
        </div>
        <p class="font-semibold">Photoshop</p>
        <p class="text-xs text-gray-500 text-center">Graphic design & assets</p>
      </div>

      <div
        class="bg-white p-4 rounded-lg shadow-md flex flex-col items-center hover:scale-105 transition"
      >
        <div
          class="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mb-2"
        >
          <img :src="'icons/canva.png'" class="w-10" alt="Canva" />
        </div>
        <p class="font-semibold">Canva</p>
        <p class="text-xs text-gray-500 text-center">Social media content</p>
      </div>

      <div
        class="bg-white p-4 rounded-lg shadow-md flex flex-col items-center hover:scale-105 transition"
      >
        <div
          class="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mb-2"
        >
          <img :src="'icons/figma.webp'" class="w-10" alt="Figma" />
        </div>
        <p class="font-semibold">Figma</p>
        <p class="text-xs text-gray-500 text-center">
          UI/UX wireframes & prototypes
        </p>
      </div>
    </div>
  </div>

  <h3 class="text-4xl mt-12 mb-4 text-center font-semibold text-gray-800">
    Recent Activity on GitHub
  </h3>
  <GithubStats />
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ref, computed, onMounted, onUnmounted } from "vue";
import GithubStats from "~/components/GithubStats.vue";

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
.swiper-button-prev,
.swiper-button-next {
  top: 40%; /* vertically aligned */
  color: #f97316; /* orange-500 */
  background: white;
  border-radius: 9999px;
  width: 40px;
  height: 40px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.swiper-button-prev::after,
.swiper-button-next::after {
  font-size: 18px; /* arrow size */
  font-weight: bold;
}
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

.mask-wave {
  -webkit-mask-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><path fill='white' d='M42.8,-71.7C55.2,-65.5,66.7,-55.3,72.4,-42.3C78.1,-29.3,78,-13.7,75.9,1.4C73.9,16.6,69.9,33.2,60.2,45.6C50.5,58,35.1,66.2,19.4,70.4C3.6,74.6,-12.5,74.9,-28.1,69.8C-43.7,64.7,-58.9,54.3,-67.3,40C-75.8,25.7,-77.5,7.5,-74.6,-9.5C-71.7,-26.6,-64.1,-42.6,-51.7,-48.7C-39.3,-54.8,-22.2,-50.9,-6.3,-52.3C9.5,-53.7,19.1,-60,31.1,-66.6C43.2,-73.2,57.6,-79.1,70.3,-73.3C82.9,-67.6,93.9,-50.1,96.9,-31.2C100,-12.2,95.1,7.2,88.3,25.1C81.5,43,72.7,59.4,61.4,72.8C50.1,86.3,36.3,96.7,20.7,103.6C5.1,110.6,-12.2,114.1,-29.7,112.8C-47.2,111.6,-64.9,105.5,-77.2,94.5C-89.4,83.5,-96.3,67.3,-97.6,50.6C-98.9,33.8,-94.8,16.9,-87.1,1.2C-79.4,-14.5,-68,-29.1,-55.4,-40.1C-42.9,-51.1,-28.6,-58.5,-14.2,-61.2C0.3,-63.8,14.6,-61.7,28.7,-58.1C42.8,-54.4,57.4,-49,70.1,-39.8C82.8,-30.7,93.5,-17.9,96.8,-4.3C100,9.3,95.8,22.6,87.5,34.6C79.1,46.5,67.6,57.5,54.2,65.8C40.9,74.2,25.5,79.1,9.9,82.1C-5.7,85.1,-21.3,86.4,-36.5,85.2C-51.7,84,-66.7,80.5,-75.4,69.8C-84.1,59.2,-86.6,42.4,-88.7,27.3C-90.8,12.2,-86.9,-2.8,-81,-16.3C-75.1,-29.9,-66.4,-42.7,-54.7,-51.6C-42.9,-60.5,-28.5,-64.8,-13.5,-68.4C1.5,-72,16.6,-74.2,31.7,-72.9C46.9,-71.6,62.2,-66.8,75.8,-58.2C89.4,-49.7,101,-37.4,106.6,-23.5C112.3,-9.7,111.6,5.8,107.2,20.3C102.8,34.8,91.8,48.1,77.8,57.6C63.8,67.2,47.7,76.2,31.1,80.7C14.6,85.2,-2.5,84.6,-19.6,82.3C-36.7,80,-53.8,76.9,-65.5,65.9C-77.2,54.9,-83.6,41.1,-88,26.7C-92.4,12.2,-94.4,-3.2,-90.8,-17.9C-87.3,-32.6,-77.8,-46.2,-64.2,-55.6C-50.6,-64.9,-33.8,-70.7,-16.9,-74.2C0.1,-77.6,17.7,-77.6,34.1,-74.1C50.5,-70.6,67.7,-61.6,79.4,-52.2C91,-42.8,99.5,-28.9,104.7,-14.7C109.8,-0.6,110.8,13.6,105.8,28.2C100.7,42.7,91.7,55.5,78.2,65.4C64.8,75.3,48.4,84.2,31.4,90.8C14.4,97.4,-2.9,100.4,-19.9,99.9C-36.9,99.4,-53.6,96.1,-67.1,86.3C-80.5,76.5,-89.1,59.6,-92.4,43.1C-95.7,26.6,-92.9,10.3,-85.9,-5.5C-78.9,-21.3,-67.9,-36.6,-54.2,-47.2C-40.5,-57.8,-24.2,-64.9,-8,-67.1C8.3,-69.2,16.7,-66.7,28.2,-64.8C39.6,-62.8,54.5,-60.3,67.8,-52.6C81,-45,92.6,-32.3,96.4,-18.5C100.2,-4.7,96.1,9.2,88.2,22.2C80.3,35.2,68.2,47.2,55.8,55.1C43.5,63.1,29.2,69.1,15.1,70.8C1.1,72.6,-13.1,71.1,-27.8,68.2C-42.5,65.3,-57.4,59.8,-67.2,50.7C-76.9,41.6,-86,29.1,-89.9,14.6C-93.7,-0.1,-92.9,-14.4,-86.6,-28.2C-80.2,-41.9,-67.6,-55.2,-54.7,-65.6C-41.9,-76,-27.8,-82.7,-13.5,-84.8C1.3,-86.9,16.7,-89,30.8,-85.5C44.8,-82,58.7,-74.2,70.2,-63.3C81.8,-52.5,91.3,-39,94.8,-24.3C98.3,-9.6,96.1,4.5,91.5,17.6C86.9,30.8,75.5,43.5,62.3,54.5C49.2,65.4,35.3,74.3,21.3,77.6C7.4,80.8,-7.5,82.6,-22.7,81.4C-37.9,80.1,-53.1,78.4,-64.3,67.7C-75.5,57,-82,43.7,-84.2,28.6C-86.4,13.5,-82.1,-1.9,-74.3,-16.1C-66.6,-30.2,-55.4,-43.6,-42.2,-53.2C-29,-62.9,-14.5,-68.8,0.3,-69.3Z' transform='translate(100 100)'/></svg>");
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-size: cover;
  -webkit-mask-position: center;
  mask-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><path fill='white' d='M42.8,-71.7C55.2,-65.5,66.7,-55.3,72.4,-42.3C78.1,-29.3,78,-13.7,75.9,1.4C73.9,16.6,69.9,33.2,60.2,45.6C50.5,58,35.1,66.2,19.4,70.4C3.6,74.6,-12.5,74.9,-28.1,69.8C-43.7,64.7,-58.9,54.3,-67.3,40C-75.8,25.7,-77.5,7.5,-74.6,-9.5C-71.7,-26.6,-64.1,-42.6,-51.7,-48.7C-39.3,-54.8,-22.2,-50.9,-6.3,-52.3C9.5,-53.7,19.1,-60,31.1,-66.6C43.2,-73.2,57.6,-79.1,70.3,-73.3C82.9,-67.6,93.9,-50.1,96.9,-31.2C100,-12.2,95.1,7.2,88.3,25.1C81.5,43,72.7,59.4,61.4,72.8C50.1,86.3,36.3,96.7,20.7,103.6C5.1,110.6,-12.2,114.1,-29.7,112.8C-47.2,111.6,-64.9,105.5,-77.2,94.5C-89.4,83.5,-96.3,67.3,-97.6,50.6C-98.9,33.8,-94.8,16.9,-87.1,1.2C-79.4,-14.5,-68,-29.1,-55.4,-40.1C-42.9,-51.1,-28.6,-58.5,-14.2,-61.2C0.3,-63.8,14.6,-61.7,28.7,-58.1C42.8,-54.4,57.4,-49,70.1,-39.8C82.8,-30.7,93.5,-17.9,96.8,-4.3C100,9.3,95.8,22.6,87.5,34.6C79.1,46.5,67.6,57.5,54.2,65.8C40.9,74.2,25.5,79.1,9.9,82.1C-5.7,85.1,-21.3,86.4,-36.5,85.2C-51.7,84,-66.7,80.5,-75.4,69.8C-84.1,59.2,-86.6,42.4,-88.7,27.3C-90.8,12.2,-86.9,-2.8,-81,-16.3C-75.1,-29.9,-66.4,-42.7,-54.7,-51.6C-42.9,-60.5,-28.6,-64.8,-14.2,-61.2C0.3,-63.8,14.6,-61.7,28.7,-58.1C42.8,-54.4,57.4,-49,70.1,-39.8C82.8,-30.7,93.5,-17.9,96.8,-4.3C100,9.3,95.8,22.6,87.5,34.6C79.1,46.5,67.6,57.5,54.2,65.8C40.9,74.2,25.5,79.1,9.9,82.1C-5.7,85.1,-21.3,86.4,-36.5,85.2C-51.7,84,-66.7,80.5,-75.4,69.8C-84.1,59.2,-86.6,42.4,-88.7,27.3C-90.8,12.2,-86.9,-2.8,-81,-16.3C-75.1,-29.9,-66.4,-42.7,-54.7,-51.6C-42.9,-60.5,-28.6,-64.8,-14.2,-61.2C0.3,-63.8,14.6,-61.7,28.7,-58.1C42.8,-54.4,57.4,-49,70.1,-39.8C82.8,-30.7,93.5,-17.9,96.8,-4.3C100,9.3,95.8,22.6,87.5,34.6C79.1,46.5,67.6,57.5,54.2,65.8C40.9,74.2,25.5,79.1,9.9,82.1C-5.7,85.1,-21.3,86.4,-36.5,85.2C-51.7,84,-66.7,80.5,-75.4,69.8C-84.1,59.2,-86.6,42.4,-88.7,27.3C-90.8,12.2,-86.9,-2.8,-81,-16.3C-75.1,-29.9,-66.4,-42.7,-54.7,-51.6C-42.9,-60.5,-28.6,-64.8,-14.2,-61.2C0.3,-63.8,14.6,-61.7,28.7,-58.1Z' transform='translate(100 100)'/></svg>");
  mask-repeat: no-repeat;
  mask-size: cover;
  mask-position: center;
}
</style>
