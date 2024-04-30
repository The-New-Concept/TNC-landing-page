<script setup>
import {ref} from "vue";
import Header from "./Header.vue";

const productsHome = [
  {
    id: 1,
    name: "Tank War: First Real Life Tank War",
    description: "A groundbreaking tank warfare simulation game that combines historical accuracy, realistic gameplay, and advanced multiplayer features to offer an unparalleled gaming experience.",
    link: "https://www.npmjs.com/",
    image: "war-tank.jpeg",
    images: [
      'tank-map.png',
      'tank.jpg',
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
    price: '$60,000'
  },
  {
    id: 2,
    name: "Combat Bumper",
    description: "The New Concept is not just about creating entertainment; it's about crafting experiences that resonate, inspire, and bring people together in new and exciting ways.",
    link: "https://www.npmjs.com/",
    image: "battle-bumper.jpeg",
    images: [
      'bumper1.jpeg',
      'bumper2.jpeg',
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
    price: '$50,000'
  },
  {
    id: 3,
    name: "Smart Archery Tag",
    description: "",
    link: "https://www.npmjs.com/",
    image: "smart-archery.jpg",
    images: [
      'archery1.jpg',
      'archery2.jpg'
    ],
    includes: [
      'Set of 10 Bows including smart sensor vest',
      '10 X Face masks',
      '100 X Smart arrows',
      'Server Computer',
      'Server Networking and Routers'
    ],
    quantity: '1 Set',
    price: '$16,000'
  },
  {
    id: 4,
    name: "Warrior Cage",
    description: "",
    link: "https://www.npmjs.com/",
    image: "warrior-tag.jpg",
    images: [
      'warrior-tag.jpg',
      'cages1.png',
    ],
    includes: [
      'Live Sword Experience with Sound and Lighting effects',
      'Screen and Physical Cage',
      '2 Swords',
      '2 Vests Permanent License',
    ],
    quantity: '1 Cage',
    price: '$13,000'
  },
  {
    id: 5,
    name: "Digital Archery Range",
    description: "",
    link: "https://www.npmjs.com/",
    image: "archery.jpg",
    images: [
      'smart-archery.jpg',
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
    price: '$13,500'
  },
]
</script>

<template>
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
      <h1 class="text-white text-3xl font-bold uppercase" >our products</h1>
      <div class="w-full">
        <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
          <li v-for="product in productsHome" :key="product.id" class="-mb-px mr-2 last:mr-0 flex-auto text-center py-1 md:py-2">
            <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal hover:cursor-pointer" v-on:click="toggleTabs(product.id)" v-bind:class="{'text-orange bg-white': openTab !== product.id, 'text-white bg-orange': openTab === product.id}">
              {{product.name}}
            </a>
          </li>
        </ul>
        <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded px-10 py-5">
          <div class="px-4 py-5 flex-auto">
            <div class="tab-content tab-space">
              <div v-for="product in productsHome" :key="product.id" v-bind:class="{'hidden': openTab !== product.id, 'block': openTab === product.id}">
                <div class="flex justify-between">
                  <div class="shrink-1 w-1/2">
                    <h2 class="text-2xl font-semibold text-orange">{{product.name}}</h2>
                    <p v-if="product.description.length >= 1" class="font-semibold mt-2 text-sm" >{{product.description}}</p>
                    <div class="mt-5">
                      <h3 class="font-semibold text-orange text-lg">Includes:</h3>
                      <ul>
                        <li v-for="item in product.includes" class="font-semibold list-disc list-inside">{{item}}</li>
                      </ul>
                    </div>
                    <p class="font-semibold mt-2 inline-block">MOQ: <span>{{product.quantity}}</span></p>
                    <div class="mt-2 text-orange text-lg inline-block mx-2">
                      <p class="font-semibold">Price: <span>{{product.price}}</span></p>
                    </div>
                    <br/>
                    <a href="/contact-us" class="mt-2 btn-orange inline-block">Order Now</a>
                  </div>
                  <div class="grid max-h-min grid-cols-1 md:grid-cols-2 auto-rows-2 gap-0.5 place-items-stretch auto-cols-auto flex-auto shrink-1 w-1/2">
                    <div v-for="image in product.images" class="p-1">
                      <img class="shadow-lg rounded" :src="'src/assets/products/' + image" :alt="product.name">
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