<script setup>
import {ref} from "vue";

const productsHome = [
  {
    name: "Tank War: First Real Life Tank War",
    description: "A groundbreaking tank warfare simulation game that combines historical accuracy, realistic gameplay, and advanced multiplayer features to offer an unparalleled gaming experience.",
    link: "https://www.npmjs.com/",
    image: "tank-war.png",
  },
  {
    name: "Battle Bumper",
    description: "The New Concept is not just about creating entertainment; it's about crafting experiences that resonate, inspire, and bring people together in new and exciting ways.",
    link: "https://www.npmjs.com/",
    image: "battle-bumber.png",
  },
  {
    name: "Smart Archery Tag",
    description: "A groundbreaking tank warfare simulation game that combines historical accuracy, realistic gameplay, and advanced multiplayer features to offer an unparalleled gaming experience.",
    link: "https://www.npmjs.com/",
    image: "tank-war.png",
  },
  {
    name: "Warrior tag",
    description: "A groundbreaking tank warfare simulation game that combines historical accuracy, realistic gameplay, and advanced multiplayer features to offer an unparalleled gaming experience.",
    link: "https://www.npmjs.com/",
    image: "tank-war.png",
  },
  {
    name: "Digital Shooting Range",
    description: "A groundbreaking tank warfare simulation game that combines historical accuracy, realistic gameplay, and advanced multiplayer features to offer an unparalleled gaming experience.",
    link: "https://www.npmjs.com/",
    image: "tank-war.png",
  },
  {
    name: "Digital Archery Range",
    description: "A groundbreaking tank warfare simulation game that combines historical accuracy, realistic gameplay, and advanced multiplayer features to offer an unparalleled gaming experience.",
    link: "https://www.npmjs.com/",
    image: "tank-war.png",
    bgClass: "bg-[url('assets/IMG_9197.JPG')]"
  },
]
</script>

<template>
  <div class="relative isolate overflow-hidden bg-[url('assets/Hero-bg.png')] h-auto place-content-center p-10 border-none bg-center bg-no-repeat bg-cover">

    <h1 class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Products</h1>
    <div class="mt-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-8 gap-y-8 gap-x-10" >
      <div v-for="product in productsHome" :key="product.name" class="product-card border-none" >
        <a  href="#" class="">
          <div class="overflow-hidden box-content h-1/2">
            <img :src="'src/assets/' + product.image" :alt="product.name" class="transition-all hover:scale-125"/>
          </div>
          <div class="p-10" >
            <h2 class="text-xl font-semibold">{{product.name}}</h2>
            <p class="text-sm">{{ product.description }}</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>