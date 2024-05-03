<template>
  <div class="hero-section lg:h-screen bg-[url('assets/Hero-bg.png')] bg-cover bg-center relative isolate overflow-hidden sm:px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">

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
    <h1 class="mt-2 mb-10 ml-24 text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">Contact Us</h1>
    <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10 ">
      <div class="bg-white lg:overflow-hidden lg:rounded lg:p-0 lg:shadow-md lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2">
        <div class="bg-orange">
          <div class="lg:max-w-lg py-20 px-10">
            <ContactForm/>
          </div>
        </div>
        <div class="bg-white flex items-center justify-center p-10">
          <div>
            <h2 class="font-light text-3xl" >THE NEW CONCEPT</h2>
            <p class="text-sm">Authorized Distributor in MENA and GCC</p>
            <ul class="mt-10 flex flex-col gap-y-2">
              <li class="flex gap-x-3" ><AtSymbolIcon class="mt-1 h-5 w-5 flex-none text-orange" /><span>Faisal@thenewconcept.co</span></li>
              <li class="flex gap-x-3" ><AtSymbolIcon class="mt-1 h-5 w-5 flex-none text-orange" /><span>Yousef.asfour@thenewconcept.co</span></li>
              <li class="flex gap-x-3" ><PhoneIcon class="mt-1 h-5 w-5 flex-none text-orange" /><span>+962 777 888 856</span></li>
              <li class="flex gap-x-3" ><PhoneIcon class="mt-1 h-5 w-5 flex-none text-orange" /><span>+962 799 534 882</span></li>
            </ul>
            <p class="flex gap-x-3 mt-10" ><MapPinIcon class="mt-1 h-5 w-5 flex-none text-orange inline-block m-1" />B.93 Mufleh Al Ajarmeh Street, Amman , Jordan</p>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { AtSymbolIcon, PhoneIcon, MapPinIcon,} from '@heroicons/vue/20/solid'
import Header from "./components/Header.vue";
import ContactForm from "./components/ContactForm.vue";
</script>