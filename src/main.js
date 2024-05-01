import { createApp } from 'vue'
import './style.css'
import HeroSection from './HeroSection.vue'
import AboutUs from './AboutUs.vue'
import AboutUsPage from './AboutUsPage.vue'
import ValuesSection from './ValuesSection.vue'
import StrategicFocusAreasSection from './StrategicFocusAreasSection.vue'
import ProductsSection from './components/ProductsSection.vue'
import OurProducts from './ProductsPage.vue'
import ContactUs from './ContactUs.vue'

createApp(HeroSection).mount('#HeroSection');

createApp(AboutUs).mount('#AboutUsSection');
createApp(AboutUsPage).mount('#AboutUs');

createApp(ValuesSection).mount('#ValuesSection');
createApp(StrategicFocusAreasSection).mount('#StrategicFocusAreasSection');
createApp(ProductsSection).mount('#ProductsSection');
createApp(OurProducts).mount('#OurProducts');
createApp(ContactUs).mount('#ContactUs');