<template>
  <div class="bg-desertSun h-screen overflow-y-scroll">
    <language-buttons />
    <the-menu
      :name="'臺灣特有種生物'"
      :enName="'Taiwan Endemic Species'"
      :children="menuData"
      :depth="0"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { rest } from "msw";

import LanguageButtons from "./LanguageButtons.vue";
import TheMenu from "./TheMenu.vue";

export default defineComponent({
  components: { LanguageButtons, TheMenu },
  setup() {
    const menuData = ref([]);
    fetch("/getMenu")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        menuData.value = data.data;
      })
      .catch((err) => {
        console.warn("Something went wrong.", err);
      });

    return { menuData };
  },
});
</script>
