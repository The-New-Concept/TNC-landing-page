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
  <div class="bg-[url('assets/Hero-bg.png')] p-10 border-none bg-center bg-no-repeat bg-cover">

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
</template>

<script setup>

</script>