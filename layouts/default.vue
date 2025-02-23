<template>
  <div class="h-screen bg-black">
    <header>
      <div
        class="fixed top-0 w-full z-20 border-b border-gray-600 bg-gray-700 text-gray-400"
      >
        <!-- bg-gradient-to-tr from-black via-slate-900 to-cyan-900 -->

        <div class="flex">
          <div class="border-r pt-4 border-gray-500">
            <div
              class="relative z-20 border-b-4 border-orange-600 px-4 pr-20 text-left"
            >
              <NuxtLink
                to="/"
                class="flex items-center text-sm text-gray-400 text-center"
              >
                zander-roi-tabelona
              </NuxtLink>
            </div>
          </div>

          <!-- <div class="border-r pt-4 border-gray-500">
            <div
              class="relative z-20 px-4 text-left"
            >
              <NuxtLink
                to="/"
                class="flex items-center text-sm text-gray-400 text-center"
              >
                _services
              </NuxtLink>
            </div>
          </div>

          <div class="border-r pt-4 border-gray-500">
            <div
              class="relative z-20 px-4 text-left"
            >
              <NuxtLink
                to="/"
                class="flex items-center text-sm text-gray-400 text-center"
              >
                _gallery
              </NuxtLink>
            </div>
          </div>

          <div class="border-r pt-4 border-gray-500">
            <div
              class="relative z-20 px-4 text-left"
            >
              <NuxtLink
                to="/"
                class="flex items-center text-sm text-gray-400 text-center"
              >
                _about-me
              </NuxtLink>
            </div>
          </div> -->


          <!-- <div class="border-r pt-4 border-gray-500">
            <div
              class="relative z-20 px-4 text-left"
            >
              <NuxtLink
                to="/"
                class="flex items-center text-sm text-gray-400 text-center"
              >
                _contact-me
              </NuxtLink>
            </div>
          </div> -->




        </div>
      </div>
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
