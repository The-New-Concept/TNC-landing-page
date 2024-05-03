import { createApp } from 'vue'
import './style.css'
import HeroSection from './HeroSection.vue'
import AboutUs from './AboutUs.vue'
import AboutUsPage from './AboutUsPage.vue'
import ValuesSection from './ValuesSection.vue'
import StrategicFocusAreasSection from './StrategicFocusAreasSection.vue'
import ProductsSection from './components/ProductsSection.vue'
import OurProducts from './ProductsPage.vue'
import ContactForm from './components/ContactForm.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'

createApp(HeroSection).mount('#HeroSection');

createApp(AboutUs).mount('#AboutUsSection');
createApp(AboutUsPage).mount('#AboutUs');

createApp(ValuesSection).mount('#ValuesSection');
createApp(StrategicFocusAreasSection).mount('#StrategicFocusAreasSection');
createApp(ProductsSection).mount('#ProductsSection');
createApp(OurProducts).mount('#OurProducts');
createApp(ContactForm).mount('#ContactForm');
createApp(Footer).mount('#Footer');
createApp(Header).mount('#Header');