<script setup>
import {ref} from "vue";
import Header from "./components/Header.vue";
import ProductsSection from "./components/ProductsSection.vue";

</script>
<template>
  <Header />
  <ProductsSection />
</template>

<script>
export default {
  name: "indigo-tabs",
  data() {
    return {
      openTab: 1
    }
  },
  methods: {
    toggleTabs: function(tabNumber){
      this.openTab = tabNumber
    }
  }
}
</script>
