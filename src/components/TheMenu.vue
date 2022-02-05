<template>
  <div v-for="(data, index) in menuData" :key="index">
    {{ data.name }}
    <TheMenu v-for="(child, index) in data.children" :key="index" />
  </div>
</template>

<script lang="ts">
// import TheMenu from "./TheMenu.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
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
