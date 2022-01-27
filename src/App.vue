<script setup lang="ts">
import TheSidebar from './components/TheSidebar.vue';
import DistributionMap from './components/DistributionMap.vue';
import CarouselCards from './components/CarouselCards.vue';
</script>

<template>
<div class="flex">
  <div class="w-1/4"><TheSidebar /></div>
  <div class="w-3/4">
    <DistributionMap />
    <CarouselCards />
  </div>
</div>

</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
