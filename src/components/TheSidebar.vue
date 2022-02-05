<template>
  <div class="bg-darkBlue h-full">
    <language-buttons />
    <the-menu :name="'臺灣特有種生物'" :enName="'Taiwan Endemic Species'" :children="menuData" :depth="0" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import LanguageButtons from "./LanguageButtons.vue";
import TheMenu from "./TheMenu.vue";

export default defineComponent({
  components: { LanguageButtons, TheMenu },
  setup() {
    const menuData = ref([]);
    const url = ref("/api/getMenu");
    fetch(url.value).then((response) => {
      return response.json();
    }).then((data) => {
      menuData.value = data.data
    }).catch((err) => {
      console.warn('Something went wrong.', err);
    });

    return { menuData }
  },
});
</script>
