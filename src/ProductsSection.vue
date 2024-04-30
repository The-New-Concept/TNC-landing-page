<script setup>
import {ref} from "vue";

const productsHome = [
  {
    name: "Tank War: First Real Life Tank War",
    description: "A groundbreaking tank warfare simulation game that combines historical accuracy, realistic gameplay, and advanced multiplayer features to offer an unparalleled gaming experience.",
    link: "https://www.npmjs.com/",
    image: "war-tank.jpeg",
  },
  {
    name: "Battle Bumper",
    description: "The New Concept is not just about creating entertainment; it's about crafting experiences that resonate, inspire, and bring people together in new and exciting ways.",
    link: "https://www.npmjs.com/",
    image: "battle-bumper.jpeg",
  },
  {
    name: "Smart Archery Tag",
    description: "A groundbreaking tank warfare simulation game that combines historical accuracy, realistic gameplay, and advanced multiplayer features to offer an unparalleled gaming experience.",
    link: "https://www.npmjs.com/",
    image: "smart-archery.jpg",
  },
  {
    name: "Warrior tag",
    description: "A groundbreaking tank warfare simulation game that combines historical accuracy, realistic gameplay, and advanced multiplayer features to offer an unparalleled gaming experience.",
    link: "https://www.npmjs.com/",
    image: "warrior-tag.jpg",
  },
  {
    name: "Digital Archery Range",
    description: "A groundbreaking tank warfare simulation game that combines historical accuracy, realistic gameplay, and advanced multiplayer features to offer an unparalleled gaming experience.",
    link: "https://www.npmjs.com/",
    image: "archery.jpg",
  },
]
</script>

<template>
  <div class="bg-[url('assets/Hero-bg.png')] bg-center bg-no-repeat bg-cover relative isolate md:overflow-scroll overflow-scroll te px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
    <div class="px-10 border-none bg-center bg-no-repeat bg-cover">
      <!-- BG Pattern-->
      <div class="absolute inset-0 -z-10 overflow-hidden">
        <svg class="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-orange [mask-image:radial-gradient(64rem_64rem_at_top,orange,transparent)]" aria-hidden="true">
          <defs>
            <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>

          <rect width="100%" height="100%" stroke-width="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <!-- /BG Pattern-->
      <h1 class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Products</h1>
      <div class="mt-10 grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-8 gap-4 max-h-screen" >
        <div v-for="product in productsHome" :key="product.name" class="product-card border-none box-content" >
          <a  href="#" class="h-10 overflow-hidden ">
            <div class="overflow-hidden box-content h-1/3 max-h-1/3">
              <img :src="'src/assets/' + product.image" :alt="product.name" class="transition-all h-full w-full hover:scale-105 place-self-center"/>
            </div>
            <div class="py-10 px-5" >
              <h2 class="text-xl font-semibold">{{product.name}}</h2>
              <p class="text-sm text-justify">{{ product.description }}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>