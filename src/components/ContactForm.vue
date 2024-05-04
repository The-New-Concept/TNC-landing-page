<template>
  <div data-tf-live="01HX2TVYY346NPW09ZTH7YVMXW"></div>
  <!--<form
      name="contact-us"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
  >N
    <input type="hidden" name="form-name" value="contact-us" />
    <div>
      <label for="name" class="hidden">Your Name</label>
      <div class="mt-2">
        <input placeholder="Your Name" id="name" name="name" type="text" autocomplete="name" required="required" class="block w-full rounded border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
      </div>
    </div>

    <div>
      <div class="flex items-center justify-between">
        <label for="email" class="hidden">Email address</label>

      </div>
      <div class="mt-2">
        <input placeholder="Your Email" id="email" name="email" type="email" autocomplete="email" required="required" class="block w-full rounded border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
      </div>
    </div>

    <div class="flex items-center justify-between">
      <div class="w-full mr-2">
        <div class="flex items-center justify-between">
          <label for="email" class="hidden">Company</label>
        </div>
        <div class="mt-2">
          <input placeholder="Company" id="company" name="company" type="text" autocomplete="company" required="" class="inline-block w-full rounded border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>

      <div class="w-full ml-2">
        <div class="flex items-center justify-between">
          <label for="email" class="hidden">Position</label>

        </div>
        <div class="mt-2">
          <input placeholder="Role" id="email" name="position" type="text" autocomplete="position" required="" class="inline-block w-full rounded border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>
    </div>



    <div>
      <div class="flex items-center justify-between">
        <label for="message" class="hidden">Message</label>

      </div>
      <div class="mt-2">
        <textarea placeholder="Your Message" id="message" name="message" type="text" autocomplete="message" required="required" class="block w-full rounded border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
      </div>
    </div>

    <div>
      <button type="submit" class="bg-white text-orange px-5 py-2 font-medium hover:opacity-95 rounded-sm mt-2 text-sm shadow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange">Submit</button>
    </div>
  </form>-->
</template>
<script>
export default {
  name: "QAForm",
  methods: {
    updatePanelist(ev) {
      this.currentPanelist = ev.target.value
    }
  },
  data() {
    return {
      panelists: ['Evan You', 'Chris Fritz'],
      currentPanelist: 'Evan You'
    }
  }
}
</script>