<template>
  <footer class="flex flex-col items-center justify-between p-10 lg:px-8 border-t-2 border-orange">
    <div>
      <ul class="flex flex-col sm:flex-row sm:gap-x-12 gap-y-2 sm:gap-y-0">
        <li class="hover:text-orange transition-all" ><a href="/">Home</a></li>
        <li class="hover:text-orange transition-all"><a href="/about">About</a></li>
        <li class="hover:text-orange transition-all"><a href="/products">Products</a></li>
        <li class="hover:text-orange transition-all"><a href="/contact-us">Contact Us</a></li>
      </ul>
    </div>
    <div class="mt-4" >
      <ul class="flex sm:flex-row gap-x-4">
        <li>
          <a href="https://www.facebook.com" class="hover:opacity-50 transition-all">
            <img class="mt-1 h-7 w-7 flex-none" src="../assets/facebookIcon.svg" alt="Facebook">
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com" class="hover:opacity-50 transition-all">
            <img class="mt-1 h-7 w-7 flex-none text-gray-50" src="../assets/instagramIcon.svg" alt="instagram">
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com" class="hover:opacity-50 transition-all">
            <img class="mt-1 h-7 w-7 flex-none text-gray-50" src="../assets/youtubeIcon.svg" alt="youtube">
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