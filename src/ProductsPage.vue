<script setup>
import {ref} from "vue";
import Header from "./components/Header.vue";

const productsHome = [
  {
    id: 1,
    name: "Tank War: First Real Life Tank War",
    description: "A groundbreaking tank warfare simulation game that combines historical accuracy, realistic gameplay, and advanced multiplayer features to offer an unparalleled gaming experience.",
    link: "https://www.npmjs.com/",
    image: "war-tank.jpeg",
  },
  {
    id: 2,
    name: "Battle Bumper",
    description: "The New Concept is not just about creating entertainment; it's about crafting experiences that resonate, inspire, and bring people together in new and exciting ways.",
    link: "https://www.npmjs.com/",
    image: "battle-bumper.jpeg",
  },
  {
    id: 3,
    name: "Smart Archery Tag",
    description: "A groundbreaking tank warfare simulation game that combines historical accuracy, realistic gameplay, and advanced multiplayer features to offer an unparalleled gaming experience.",
    link: "https://www.npmjs.com/",
    image: "smart-archery.jpg",
  },
  {
    id: 4,
    name: "Warrior tag",
    description: "A groundbreaking tank warfare simulation game that combines historical accuracy, realistic gameplay, and advanced multiplayer features to offer an unparalleled gaming experience.",
    link: "https://www.npmjs.com/",
    image: "warrior-tag.jpg",
  },
  {
    id: 5,
    name: "Digital Archery Range",
    description: "A groundbreaking tank warfare simulation game that combines historical accuracy, realistic gameplay, and advanced multiplayer features to offer an unparalleled gaming experience.",
    link: "https://www.npmjs.com/",
    image: "archery.jpg",
  },
]
</script>
<template>
  <Header />
  <div class="bg-[url('assets/Hero-bg.png')] h-screen bg-center bg-no-repeat bg-cover relative isolate md:overflow-scroll overflow-scroll te px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0" >
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
    <div class="flex flex-wrap px-10">
    <div class="w-full">
      <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
        <li v-for="product in productsHome" :key="product.id" class="-mb-px mr-2 last:mr-0 flex-auto text-center py-1 md:py-2">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal hover:cursor-pointer" v-on:click="toggleTabs(product.id)" v-bind:class="{'text-orange bg-white': openTab !== product.id, 'text-white bg-orange': openTab === product.id}">
            {{product.name}}
          </a>
        </li>
      </ul>
      <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div class="px-4 py-5 flex-auto">
          <div class="tab-content tab-space">
            <div v-for="product in productsHome" :key="product.id" v-bind:class="{'hidden': openTab !== product.id, 'block': openTab === product.id}">
              <p>
               {{product.description}}
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>

  </div>
</template>

<script>
export default {
  name: "indigo-tabs",
  data() {
    return {
      openTab: 1
    }
  },
  methods: {
    toggleTabs: function(tabNumber){
      this.openTab = tabNumber
    }
  }
}
</script>
