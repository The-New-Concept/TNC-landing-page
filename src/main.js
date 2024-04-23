import { createApp } from 'vue'
import './style.css'
import HeroSection from './HeroSection.vue'
import AboutUs from './AboutUs.vue'

createApp(HeroSection).mount('#HeroSection');
createApp(AboutUs).mount('#AboutUsSection');
