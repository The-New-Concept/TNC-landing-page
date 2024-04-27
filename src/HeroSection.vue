<template>
  <div class=" h-screen hero-section bg-[url('assets/Hero-bg.png')]">
    <Header/>
    <div class="flex relative isolate px-6 pt-14 lg:px-8">
      <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div class="text-left">
          <h1 class="text-4xl font-bold tracking-tight text-gray-200 sm:text-6xl">The New Concept</h1>
          <p class="mt-6 text-lg leading-8 text-white">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
          <div class="mt-10 flex items-left justify-left gap-x-6">
            <a href="#" class="btn-white">Contact Us</a>
          </div>
        </div>
      </div>

      <div class="flex lg:flex-1 justify-center items-center	">
        <img class="h-3/6 w-auto" src="./assets/TNC-Logo.png" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
</script>