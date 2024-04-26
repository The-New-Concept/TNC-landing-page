<template>
  <div class="bg-orange h-screen hero-section">
    <header class="absolute inset-x-0 top-0 z-50">
      <nav class="flex items-center justify-between p-6 lg:px-8 " aria-label="Global">
        <!-- Left NAV -->
        <div class="hidden lg:flex lg:gap-x-12">
          <a v-for="item in navigationLeft" :key="item.name" :href="item.href" class="transition-all hover:bg-orange text-sm px-2 py-1 rounded leading-6 text-white hover:text-gray-200">{{ item.name }}</a>
        </div>
        <!-- Nav Logo -->
        <div class="flex lg:flex-1 justify-center">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">The New Concept</span>
            <img class="h-14 w-auto" src="./assets/TNC-Logo.png" alt="The New Concept" />
          </a>
        </div>
        <!-- Mobile NAV -->
        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white" @click="mobileMenuOpen = true">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <!-- Right NAV -->
        <div class="hidden lg:flex lg:gap-x-12 lg:justify-end">
          <a v-for="item in navigationRight" :key="item.name" :href="item.href" class="transition-all	hover:bg-orange text-sm px-2 py-1 rounded leading-6 text-white hover:text-gray-200">{{ item.name }}</a>
        </div>
      </nav>
      <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-50" />
        <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">The New Concept</span>
              <img class="h-8 w-auto" src="./assets/TNC-Logo.png" alt="The New Concept" />
            </a>
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a v-for="item in navigation" :key="item.name" :href="item.href" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{ item.name }}</a>
              </div>
              <div class="py-6">
                <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>

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
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigationLeft = [
  { name: 'Home', href: '#' },
  { name: 'About Us', href: '#' },

]
const navigationRight = [
  { name: 'Products', href: '#' },
  { name: 'Contact Us', href: '#' },

]

const navigation = navigationLeft.concat(navigationRight);

const mobileMenuOpen = ref(false)
</script>