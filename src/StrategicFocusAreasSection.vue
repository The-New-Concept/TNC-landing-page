<template>
  <div class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">

    <!-- BG Pattern-->
    <div class="absolute inset-0 -z-10 overflow-hidden">
      <svg class="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" aria-hidden="true">
        <defs>
          <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
          <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" stroke-width="0" />
        </svg>
        <rect width="100%" height="100%" stroke-width="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
      </svg>
    </div>
    <!-- /BG Pattern-->

    <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
      <div class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <div class="lg:pr-4">
          <div class="lg:max-w-lg">
            <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Strategic Focus Areas:</h1>
          </div>
        </div>
      </div>



      <div class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <div class="lg:pr-4">
          <div class="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
            <ul role="list" class="mt-8 space-y-8 text-gray-600">
              <li class="flex gap-x-3">
                <CheckIcon class="mt-1 h-5 w-5 flex-none text-orange-light" aria-hidden="true" />
                <span><strong class="font-semibold text-gray-900">Research and Development:</strong> Investing in a dedicated R&D team to ensure a constant flow of innovative ideas and technologies.
</span>
              </li>
              <li class="flex gap-x-3">
                <CheckIcon class="mt-1 h-5 w-5 flex-none text-orange-light" aria-hidden="true" />
                <span><strong class="font-semibold text-gray-900">Global Reach:</strong> Leveraging our international experience to create culturally diverse and globally appealing content.
</span>
              </li>
              <li class="flex gap-x-3">
                <CheckIcon class="mt-1 h-5 w-5 flex-none text-orange-light" aria-hidden="true" />
                <span><strong class="font-semibold text-gray-900">Technological Advancement:</strong> Utilizing the latest technologies, including VR, AR, and AI, to create immersive and interactive experiences.
</span>
              </li>
              <li class="flex gap-x-3">
                <CheckIcon class="mt-1 h-5 w-5 flex-none text-orange-light" aria-hidden="true" />
                <span><strong class="font-semibold text-gray-900">Community Engagement:</strong>Building and nurturing a strong community around our games and experiences to foster loyalty and feedback.
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
</script>