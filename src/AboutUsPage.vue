<template>
  <Header/>
  <div class="hero-section bg-[url('assets/Hero-bg.png')] relative isolate overflow-hidden te px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">

    <!-- BG Pattern-->
    <div class="absolute inset-0 -z-10 overflow-hidden">
      <svg class="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-orange [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" aria-hidden="true">
        <defs>
          <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>

        <rect width="100%" height="100%" stroke-width="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
      </svg>
    </div>
    <!-- /BG Pattern-->

    <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
      <div class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <div class="lg:pr-4">
          <div class="lg:max-w-lg">
            <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">About Us</h1>
            <p class="mt-6 text-xl leading-8 text-gray-200"><strong>The New Concept</strong> is an avant-garde entertainment company specializing in creating innovative games and experiences for a diverse audience. With a foundation built on extensive industry experience, our team has initiated groundbreaking projects across the globe, including in Jordan, Saudi Arabia, Iraq, Oman, India, Spain, and the USA. Our mission is to elevate the entertainment industry by introducing a new paradigm of engaging, immersive experiences that cater to various age groups.</p>
          </div>
        </div>
      </div>

      <!-- Side Image -->
      <div class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden flex justify-center lg:gap-x-8 lg:px-8">
        <img class="w-[20rem] sm:w-[30rem]" src="./assets/TNC-Logo.png" alt="" />
      </div>
      <!-- /Side Image -->

      <div class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <div class="lg:pr-4">
          <div class="max-w-xl text-base leading-7 text-gray-200 lg:max-w-lg">
            <ul role="list" class="mt-8 space-y-8 text-gray-200">
              <li class="flex gap-x-3">
                <EyeIcon class="mt-1 h-5 w-5 flex-none text-gray-50" aria-hidden="true" />
                <span><strong class="font-semibold text-gray-100">Our Vision</strong> Is too be at the forefront of the entertainment industry, constantly pushing the boundaries of creativity and technology to provide novel entertainment options that captivate and inspire audiences worldwide.
</span>
              </li>
              <li class="flex gap-x-3">
                <CheckIcon class="mt-1 h-5 w-5 flex-none text-gray-50" aria-hidden="true" />
                <span><strong class="font-semibold text-gray-100">Our Mission</strong> Is to innovate and redefine the standards of entertainment through the development of cutting-edge games and experiences that appeal to a broad spectrum of audiences, thereby enhancing the global entertainment landscape.
</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon, EyeIcon, CheckIcon } from '@heroicons/vue/20/solid'
import Header from "./components/Header.vue";
</script>