<script setup>
import {ref} from "vue";

const productsHome = [
  {
    name: "Tank War: First Real Life Tank War",
    description: "A groundbreaking tank warfare simulation game that combines historical accuracy, realistic gameplay, and advanced multiplayer features to offer an unparalleled gaming experience.",
    link: "https://www.npmjs.com/",
    image: "/images/npm.png",
  },
  {
    name: "Battle Bumper",
    description: "The New Concept is not just about creating entertainment; it's about crafting experiences that resonate, inspire, and bring people together in new and exciting ways.",
    link: "https://www.npmjs.com/",
    image: "/images/npm.png",
  },
  {
    name: "Smart Archery Tag",
    description: "A groundbreaking tank warfare simulation game that combines historical accuracy, realistic gameplay, and advanced multiplayer features to offer an unparalleled gaming experience.",
    link: "https://www.npmjs.com/",
    image: "/images/npm.png",
  },
  {
    name: "Warrior tag",
    description: "A groundbreaking tank warfare simulation game that combines historical accuracy, realistic gameplay, and advanced multiplayer features to offer an unparalleled gaming experience.",
    link: "https://www.npmjs.com/",
    image: "/images/npm.png",
  },
  {
    name: "Digital Shooting Range",
    description: "A groundbreaking tank warfare simulation game that combines historical accuracy, realistic gameplay, and advanced multiplayer features to offer an unparalleled gaming experience.",
    link: "https://www.npmjs.com/",
    image: "/images/npm.png",
  },
  {
    name: "Digital Archery Range",
    description: "A groundbreaking tank warfare simulation game that combines historical accuracy, realistic gameplay, and advanced multiplayer features to offer an unparalleled gaming experience.",
    link: "https://www.npmjs.com/",
    image: "/images/npm.png",
    bgClass: "bg-[url('assets/IMG_9197.JPG')]"
  },
]
</script>

<template>
  <div class="relative isolate overflow-hidden bg-[url('assets/Hero-bg.png')] h-auto place-content-center p-10">

    <h1 class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Products</h1>
    <div class="mt-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-8 gap-8" >
      <div v-for="product in productsHome" :key="product.name" class="product-card border-none bg-[url('assets/IMG_9197.JPG')]" >
        <a  href="#">
          <div class="" >
            <h2 class="text-lg font-semibold">{{product.name}}</h2>
            <p>{{ product.description }}</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>