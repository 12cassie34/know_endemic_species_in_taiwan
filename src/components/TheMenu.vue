<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const menu = ref([
      {
        name: "鳥類  Birds",
        children: [],
      },
      {
        name: "哺乳類  Mammals",
        children: [],
      },
      {
        name: "蜘蛛類  Spiders",
        children: [],
      },
      {
        name: "爬蟲類  Reptiles",
        children: [],
      },
      {
        name: "兩棲類 ",
        enName: "Amphibians",
        children: [
          {
            name: "蟾蜍科",
            enName: "Bufonidae"
          },
          {
            name: "山椒魚科",
            enName: "Hynobiidae"
          },
          {
            name: "狹口蛙科",
            enName: "Microhylidae"
          },
          {
            name: "赤蛙科",
            enName: "Ranidae"
          },
          {
            name: "樹蛙科",
            enName: "Rhacophoridae"
          },
        ],
      },
      {
        name: "魚類  Fishes",
        children: [],
      },
      {
        name: "蝦蟹類  Crustaceans",
        children: [],
      },
      {
        name: "蛾類  Moths",
        children: [],
      },
      {
        name: "蝶類  Butterflies",
        children: [],
      },
      {
        name: "蜻蛉類  Dragonflies",
        children: [],
      },
      {
        name: "甲蟲類  Beetles",
        children: [],
      },
      {
        name: "其他昆蟲  Other insects",
        children: [],
      },
      {
        name: "蝸牛與貝類  Snails & Shells",
        children: [],
      },
      {
        name: "其他無脊椎  Other invertebrates",
        children: [],
      },
      {
        name: "石松類  Lycophytes",
        children: [],
      },
      {
        name: "被子植物  Angiosperms",
        children: [],
      },
      {
        name: "裸子植物  Gymnosperms",
        children: [],
      },
      {
        name: "蕨類  Ferns",
        children: [],
      },
      {
        name: "真菌類  Fungi",
        children: [],
      },
    ]);
  },
});
</script>
