import { createApp } from 'vue'
import './style.css'
import HeroSection from './HeroSection.vue'
import AboutUs from './AboutUs.vue'
import AboutUsPage from './AboutUsPage.vue'
import ValuesSection from './ValuesSection.vue'
import StrategicFocusAreasSection from './StrategicFocusAreasSection.vue'
//import ProductsSection from './components/ProductsSection.vue'
import OurProducts from './ProductsPage.vue'
import ContactUs from './ContactUs.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'

import { fullscreenImagePlugin } from 'vue-3-fullscreen-image-directive-plugin'
import 'vue-3-fullscreen-image-directive-plugin/style.css' // Don't forget to import the style



createApp(HeroSection).mount('#HeroSection');
createApp(ContactUs).mount('#ContactUs');

createApp(AboutUs).mount('#AboutUsSection');
createApp(AboutUsPage).mount('#AboutUs');

createApp(ValuesSection).mount('#ValuesSection');
createApp(StrategicFocusAreasSection).mount('#StrategicFocusAreasSection');
//createApp(ProductsSection).mount('#ProductsSection');
createApp(OurProducts).use(fullscreenImagePlugin).mount('#OurProducts');
createApp(Footer).mount('#Footer');
createApp(Header).mount('#Header');
