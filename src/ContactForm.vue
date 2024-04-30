<script setup>
import {ref} from "vue";
import Header from "./components/Header.vue";
import ProductsSection from "./components/ProductsSection.vue";
import {CheckIcon, EyeIcon} from "@heroicons/vue/20/solid/index.js";

</script>
<form
    name="ask-question"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
>
<input type="hidden" name="form-name" value="ask-question" />
<label v-for="(panelist, index) in panelists" :key="index">
  <input
      type="radio"
      name="panelist"
      :value="panelist"
      @input="ev => updatePanelist"
      :checked="panelist === currentPanelist"
  />
  <span>{{ panelist }}</span>
</label>
...
<button>Submit</button>
</form>
</template>
<script>
export default {
  name: "QAForm",
  methods: {
    updatePanelist (ev) {
      this.currentPanelist = ev.target.value
    }
  },
  data () {
    return {
      panelists: ['Evan You', 'Chris Fritz'],
      currentPanelist: 'Evan You'
    }
  }
}
</script>

