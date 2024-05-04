<script setup>
import {ref} from "vue";
import Header from "./Header.vue";
import Galleria from 'primevue/galleria';

import imageBumper1 from '/src/assets/products/bumper1.jpeg'
import imageBumper2 from '/src/assets/products/bumper2.jpeg'

import imageTankMap from '/src/assets/products/tank-map.png'
import imageTank from '/src/assets/products/tank.png'

import imageArchery1 from '/src/assets/products/archery1.jpg'
import imageArchery2 from '/src/assets/products/archery2.jpg'

import imageWarriorTag from '/src/assets/products/warrior-tag.jpg'
import imageCage1 from '/src/assets/products/cages1.png'

import imageSmartArchery from '/src/assets/products/smart-archery.jpg'


const productsHome = [
  {
    id: 1,
    name: "Tank War: First Real Life Tank War",
    description: "A groundbreaking tank warfare simulation game that combines historical accuracy, realistic gameplay, and advanced multiplayer features to offer an unparalleled gaming experience.",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=5A5KS7X0etFEmhJ0",
    image: imageBumper1,
    images: [
      imageTankMap,
      imageTank,
    ],
    includes: [
      'Main Tank War unit',
      'Laser Tag Canon',
      'Fully Electric',
      'Full Surround Sound',
      'Screen Lighting Effects',
      'Immersive Full Surround Sound'
    ],
    quantity: '6 Tanks',
  },
  {
    id: 2,
    name: "Combat Bumper",
    description: "The New Concept is not just about creating entertainment; it's about crafting experiences that resonate, inspire, and bring people together in new and exciting ways.",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=5A5KS7X0etFEmhJ0",
    image: "battle-bumper.jpeg",
    images: [
      imageBumper1,
      imageBumper2,
    ],
    includes: [
      '8 X Combat Bumper',
      'Electric Laser Shooting Top of the line IR technology',
      'Edge Software 12 Months Subscription',
      'Server',
      'PC',
      'Access Point (Commercial)',
      'Edge Server',
    ],
    quantity: '1 Set',
  },
  {
    id: 3,
    name: "Smart Archery Tag",
    description: "",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=5A5KS7X0etFEmhJ0",
    image: "smart-archery.jpg",
    images: [
      imageArchery1,
      imageArchery2
    ],
    includes: [
      'Set of 10 Bows including smart sensor vest',
      '10 X Face masks',
      '100 X Smart arrows',
      'Server Computer',
      'Server Networking and Routers'
    ],
    quantity: '1 Set',
  },
  {
    id: 4,
    name: "Warrior Cage",
    description: "",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=5A5KS7X0etFEmhJ0",
    image: "warrior-tag.jpg",
    images: [
      imageWarriorTag,
      imageCage1,
    ],
    includes: [
      'Live Sword Experience with Sound and Lighting effects',
      'Screen and Physical Cage',
      '2 Swords',
      '2 Vests Permanent License',
    ],
    quantity: '1 Cage',
  },
  {
    id: 5,
    name: "Digital Archery Range",
    description: "",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=5A5KS7X0etFEmhJ0",
    image: "archery.jpg",
    images: [
      imageSmartArchery,
    ],
    includes: [
      'Digital Screen showing Score, Target, Bow, Arrows.',
      '1 set of mobile system core, drive motor, power box, wire and accessories.',
      '1 set of mobile target vehicle',
      '1 set of track',
      '1 set of screen',
      '1 pc of bow',
      '20 pcs of arrow',
      '30 pcs of target papers',
    ],
    quantity: '3 Lanes',
  },
  {
    id: 6,
    name: "Kaida Slime",
    description: "",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=5A5KS7X0etFEmhJ0",
    image: "archery.jpg",
    images: [
      imageSmartArchery,
    ],
    includes: [
      'Crystal Clear Slime',
      'Shimmer Slime',
      'Glossy Slime',
      'Fluffy Slime',
      'Glow Slime',
      'Slime Kit',
      'Slime Kit',
    ],
    quantity: '',
  },
  {
    id: 7,
    name: "Kaida Putty",
    description: "",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=5A5KS7X0etFEmhJ0",
    image: "archery.jpg",
    images: [
      imageSmartArchery,
    ],
    includes: [
      'Super illusions PUTTY',
      'HYPER-COLORS PUTTY',
      'TRANSPARENT PUTTY',
      'GLOW-IN-THE-DARK-PUTTY',
      'MULTI-COLOR HOLOGRAPHIC',
      'MULTI-COLOR TRANSPARENT',
      'MULTI-COLOR DAZZILING',
      'UV & METALLIC',
      'PUTTY GLOW FUN MIX-INS',
      'PUTTY SCENTED',
      'PUTTY PARTY KIT',
    ],
    quantity: '',
  },
]
</script>

<template>
  <div class="bg-[url('assets/Hero-bg.png')] min-h-screen sm:h-full bg-center bg-no-repeat bg-cover relative isolate md:overflow-scroll overflow-scroll sm:px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0" >
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
    <div class="flex sm:flex-row flex-col flex-wrap sm:px-10">
      <h1 class="text-white text-center sm:text-left text-3xl font-bold capitalize" >our products</h1>
      <div class="w-full">
        <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 px-2 sm:px-0 flex-row">
          <li v-for="product in productsHome" :key="product.id" class="-mb-px mr-2 last:mr-0 flex-auto text-center py-1 md:py-2">
            <a class="text-sm font-light uppercase px-5 py-3 sm:shadow-lg shadow-md rounded-sm block leading-normal hover:cursor-pointer" v-on:click="toggleTabs(product.id)" v-bind:class="{'text-orange bg-white': openTab !== product.id, 'text-white bg-orange': openTab === product.id}">
              {{product.name}}
            </a>
          </li>
        </ul>
        <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-md sm:shadow-lg sm:rounded-sm sm:px-10 px-1 py-5">
          <div class="px-4 py-5 flex-auto">
            <div class="tab-content tab-space">
              <div v-for="product in productsHome" :key="product.id" v-bind:class="{'hidden': openTab !== product.id, 'block': openTab === product.id}">
                <div class="text-center flex flex-col items-center justify-between">
                  <h2 class="text-3xl font-light text-orange">{{product.name}}</h2>
                  <p v-if="product.description.length >= 1" class="font-light mt-2 text-lg sm:text-sm sm:w-1/2" >{{product.description}}</p>
                </div>
                <div class="mt-10 flex sm:flex-row flex-col-reverse items-center flex-wrap justify-between">
                  <div class="sm:shrink-1 shrink-0 sm:w-1/2 pr-2">
                    <div class="mt-5">
                      <h3 class="font-light text-orange text-2xl">Includes:</h3>

                      <ul class="list-image-[url('assets/circle.svg')] mt-2 md:text-lg grid sm:gap-2 grid-cols-1 sm:grid-cols-2" >
                        <li v-for="item in product.includes" class="font-light list-disc list-inside">{{item}}</li>
                      </ul>
                    </div>
                    <p v-if="product.quantity.length !== 0" class="font-light text-orange mt-5 inline-block">MOQ: <span>{{product.quantity}}</span></p>
                    <br/>
                    <a href="/contact-us" class="mt-10 btn-orange inline-block">Get a Quote</a>
                  </div>



                  <div class="grid max-h-min grid-cols-1 md:grid-cols-1 auto-rows-2 gap-0.5 place-items-stretch auto-cols-auto flex-auto sm:shrink-1 shrink-0 sm:w-1/2 mt-10 sm:mt-0">
                      <div>
                        <iframe class="w-full aspect-video" :src=product.video title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                      </div>
                      <div class="grid grid-cols-2" >
                        <div v-for="image in product.images" class="">
                          <!--<img class="shadow-lg rounded" :src="image" :alt="product.name">-->
                          <img class="shadow-lg rounded" v-fullscreen-image="{
                                  imageUrl: product.images,
                                  withDownload: false,
                                  animation: 'blur',
                                  }"
                               :src=image
                               :alt="product.name"
                          />
                        </div>
                      </div>
                  </div>

                </div>
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