<template>
  <div class="text-white" :class="{ 'p-4': isTitle }">
    <div @click="toggleExpand">
      <span
        class="cursor-pointer font-semibold"
        :class="[
          isTitle ? titleClass : '',
          children ? subtitleClass : 'text-roseRed',
        ]"
      >
        {{ name }}
        <span :class="[children ? 'text-base' : 'text-xs']">{{ enName }}</span>
      </span>
      <span
        v-if="children"
        class="cursor-pointer"
        :class="[isTitle ? titleClass : '']"
      >
        &nbsp;{{ isShow ? "[-]" : "[+]" }}
      </span>
    </div>
    <template v-if="isShow">
      <the-menu
        v-for="child in children"
        :key="child.name"
        :children="child.children"
        :name="child.name"
        :enName="child.enName"
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
  setup(props) {
    const isShow = ref(false);
    const isTitle = ref(false);
    const titleClass = ["hidden"];
    const subtitleClass = ["text-xl"];

    if (props.name === "臺灣特有種生物") {
      isShow.value = true;
      isTitle.value = true;
    }

    const toggleExpand = () => {
      isShow.value = !isShow.value;
    };

    return { isShow, isTitle, titleClass, subtitleClass, toggleExpand };
  },
});
</script>
