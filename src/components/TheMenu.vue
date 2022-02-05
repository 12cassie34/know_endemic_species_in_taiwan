<template>
  <div class="text-white">
    <span @click="toggleExpand">{{ name }} {{ enName }}</span>
    <span v-if="children">&nbsp;{{ isShow ? "[-]" : "[+]" }}</span>
    <template v-if="isShow">
      <the-menu
        v-for="child in children"
        :key="child.name"
        :children="child.children"
        :name="child.name"
        :depth="depth + 1"
      ></the-menu>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "the-menu",
  props: ["name", "enName", "children", "depth"],
  setup() {
    const isShow = ref(false);

    const toggleExpand = () => {
      isShow.value = !isShow.value;
    };

    return { isShow, toggleExpand };
  },
});
</script>
