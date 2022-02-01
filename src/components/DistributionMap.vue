<template>
  <div class="my-0 mx-auto w-10/12">
    <h1 class="text-4xl">
      <span id="opening-words"></span>
      <span v-if="hasTypingDash" class="text-roseRed font-black">_</span>
    </h1>
    <h2 id="quote-from" class="mt-4 text-3xl text-right"></h2>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  setup() {
    const openingWords = ref("口口聲聲說愛臺灣，連臺灣有什麼都不知道。");
    const quoteFrom = ref("──呂氏攀蜥發現者，呂光洋教授");
    const speed: number = ref(300);
    const wordCount: number = ref(0);
    const hasTypingDash: boolean = ref(true);

    const plusWordCount = () => {
      wordCount.value += 1;
    };

    const runQuoteFrom = () => {
      let phrase: string = quoteFrom.value;
      if (wordCount.value < phrase.length) {
        (<HTMLInputElement>document.getElementById("quote-from")).innerText +=
          phrase.charAt(wordCount.value);
        plusWordCount();
        setTimeout(() => runQuoteFrom(), speed.value);
      }
    };

    const runOpeningWords = () => {
      let phrase: string = openingWords.value;
      if (wordCount.value < phrase.length) {
        (<HTMLInputElement>(
          document.getElementById("opening-words")
        )).innerHTML += phrase.charAt(wordCount.value);
        plusWordCount();
        setTimeout(() => runOpeningWords(), speed.value);
      } else {
        hasTypingDash.value = false;
        wordCount.value = 0;
        runQuoteFrom();
      }
    };

    onMounted(() => {
      runOpeningWords();
    });
    return { hasTypingDash };
  },
});
</script>

