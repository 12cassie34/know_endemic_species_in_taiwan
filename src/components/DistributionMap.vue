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
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const openingWords = ref("口口聲聲說愛臺灣，連臺灣有什麼都不知道。");
    const quoteFrom = ref("──呂氏攀蜥發現者，呂光洋教授");
    const speed: number = 300;
    const wordCount: number = ref(0);
    const hasTypingDash: boolean = ref(true);
    return { openingWords, speed, wordCount, quoteFrom, hasTypingDash };
  },
  mounted() {
    this.runOpeningWords();
  },
  methods: {
    plusWordCount() {
      this.wordCount += 1;
    },
    runOpeningWords() {
      let phrase: string = this.openingWords;
      if (this.wordCount < phrase.length) {
        (<HTMLInputElement>(
          document.getElementById("opening-words")
        )).innerHTML += phrase.charAt(this.wordCount);
        this.plusWordCount();
        setTimeout(() => this.runOpeningWords(), this.speed);
      } else {
        this.hasTypingDash = false;
        this.wordCount = 0;
        this.runQuoteFrom();
      }
    },
    runQuoteFrom() {
      let phrase: string = this.quoteFrom;
      if (this.wordCount < phrase.length) {
        (<HTMLInputElement>document.getElementById("quote-from")).innerText +=
          phrase.charAt(this.wordCount);
        this.plusWordCount();
        setTimeout(() => this.runQuoteFrom(), this.speed);
      }
    },
  },
});
</script>

