import { createApp } from 'vue'
import './style.css'
import HeroSection from './HeroSection.vue'
import AboutUs from './AboutUs.vue'
import ValuesSection from './ValuesSection.vue'
import StrategicFocusAreasSection from './StrategicFocusAreasSection.vue'
import ProductsSection from './ProductsSection.vue'

createApp(HeroSection).mount('#HeroSection');
createApp(AboutUs).mount('#AboutUsSection');
createApp(ValuesSection).mount('#ValuesSection');
createApp(StrategicFocusAreasSection).mount('#StrategicFocusAreasSection');
createApp(ProductsSection).mount('#ProductsSection');