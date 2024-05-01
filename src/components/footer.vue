<template>
  <footer class="flex flex-col items-center justify-between p-6 lg:px-8 ">
    <div>
      <ul class="lg:flex lg:gap-x-12">
        <li>Home</li>
        <li>About</li>
        <li>Products</li>
        <li>Contact Us</li>
      </ul>
    </div>
    <div class="mt-4" >
      <ul class="lg:flex lg:gap-x-5">
        <li>SOC</li>
        <li>IAL</li>
        <li>ME</li>
        <li>DIA</li>
      </ul>
    </div>
    <div class="mt-4">
      <p>&copy; 2024 The New Concept. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon, EyeIcon, CheckIcon } from '@heroicons/vue/20/solid'
import Header from './Header.vue'
</script>