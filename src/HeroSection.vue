<template>
  <div class="h-screen lg:h-screen hero-section bg-[url('assets/Hero-bg.png')]">
    <div class="flex sm:hidden lg:flex-1 self-center align-middle lg:overflow-hidden sm:overflow-scroll justify-center lg:gap-x-8 lg:px-8	">
      <img class="h-auto w-52 md:w-3/4 lg:w-3/4" src="./assets/TNC-Logo.png" alt="">
    </div>
    <div class="mx-auto grid max-w-2xl md:grid-rows-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10 content-center px-10 md:hi">
      <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div class="md:text-left text-center">
          <h1 class="text-4xl font-bold tracking-tight text-gray-200 sm:text-6xl">The New Concept</h1>
          <p class="mt-6 text-lg leading-8 text-white">Unleash Your Imagination with The New Concept: Redefining Entertainment, One Experience at a Time!</p>
          <div class="mt-10 flex items-left justify-left gap-x-6">
            <a href="#" class="btn-white">Contact Us</a>
          </div>
        </div>
      </div>

      <div class="flex lg:flex-1 self-center align-middle lg:overflow-hidden sm:overflow-scroll justify-center lg:gap-x-8 lg:px-8	">
        <img class="h-auto w-52 md:w-3/4 lg:w-3/4" src="./assets/TNC-Logo.png" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
</script>