import { createApp } from 'vue'
import './style.css'
import HeroSection from './HeroSection.vue'
import AboutUs from './AboutUs.vue'
import ValuesSection from './ValuesSection.vue'

createApp(HeroSection).mount('#HeroSection');
createApp(AboutUs).mount('#AboutUsSection');
createApp(ValuesSection).mount('#ValuesSection');
