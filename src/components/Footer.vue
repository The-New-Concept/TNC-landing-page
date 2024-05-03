<template>
  <footer class="flex flex-col items-center justify-between p-6 lg:px-8 ">
    <div>
      <ul class="lg:flex lg:gap-x-12">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/contact-us">Contact Us</a></li>
      </ul>
    </div>
    <div class="mt-4" >
      <ul class="lg:flex lg:gap-x-5">
        <li>
          <a href="https://www.facebook.com">
            <img class="mt-1 h-10 w-10 flex-none" src="../assets/facebookIcon.svg" alt="Facebook">
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com">
            <img class="mt-1 h-10 w-10 flex-none text-gray-50" src="../assets/instagramIcon.svg" alt="instagram">
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com">
            <img class="mt-1 h-10 w-10 flex-none text-gray-50" src="../assets/youtubeIcon.svg" alt="youtube">
          </a>
        </li>
      </ul>
    </div>
    <div class="mt-4 text-sm text-gray-400">
      <p>&copy; 2024 The New Concept. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon, EyeIcon, CheckIcon } from '@heroicons/vue/20/solid'
import Header from './Header.vue'
</script>