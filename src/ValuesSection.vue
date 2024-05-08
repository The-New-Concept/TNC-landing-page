<template>
  <div class="container mx-auto isolate overflow-hidden bg-white px-24 py-24 sm:py-32 lg:overflow-visible lg:px-0">
    <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mb-10">Our Values</h1>
    <div class="flex flex-col md:flex-row items-center justify-between p-2 lg:px-2">
      <div class="value-container">
        <LightBulbIcon class="mt-1 h-12 w-12 flex-none text-orange-light"></LightBulbIcon>
        <h2 class="text-2xl mt-4" >Innovation</h2>
        <p class="text-sm mt-2" >Commitment to pioneering new concepts and technologies in entertainment.</p>
      </div>
      <div class="value-container">
        <StarIcon class="mt-1 h-12 w-12 flex-none text-orange-light"></StarIcon>
        <h2 class="text-2xl mt-4" >Quality</h2>
        <p class="text-sm mt-2" >Dedication to delivering high-quality, engaging content that exceeds expectations.</p>
      </div>
      <div class="value-container">
        <GlobeAltIcon class="mt-1 h-10 w-10 flex-none text-orange-light"></GlobeAltIcon>
        <h2 class="text-2xl mt-4" >Diversity</h2>
        <p class="text-sm mt-2" >Embracing a wide range of cultures and ideas to enrich our projects and appeal to global audiences.</p>
      </div>
      <div class="value-container">
        <UserGroupIcon class="mt-1 h-10 w-10 flex-none text-orange-light"></UserGroupIcon>
        <h2 class="text-2xl mt-4" >Collaboration</h2>
        <p class="text-sm mt-2" >Fostering a collaborative environment that encourages creativity and the exchange of ideas among team members and partners.</p>
      </div>
      <div class="value-container">
        <CheckBadgeIcon class="mt-1 h-10 w-10 flex-none text-orange-light"></CheckBadgeIcon>
        <h2 class="text-2xl mt-4" >Integrity</h2>
        <p class="text-sm mt-2" >Upholding the highest standards of professionalism and ethics in all our endeavors.</p>
      </div>
    </div>

  </div>
</template>

<script setup>
import { CloudArrowUpIcon, LightBulbIcon, StarIcon, GlobeAltIcon, UserGroupIcon, CheckBadgeIcon } from '@heroicons/vue/20/solid'
</script>