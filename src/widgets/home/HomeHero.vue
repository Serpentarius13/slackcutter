<template>
  <section
    class="container flex flex-col gap-[7.6rem] items-center text-center"
  >
    <header>
      <h2 class="heading-big">
        Stats say up to 50% of viewers drop <br />off watching videos the first
        30 seconds in
      </h2>

      <h3 class="text-medium text-light-gray mt-[2rem]">
        Slackcutter auto-edits full-feature videos to create a sharp
        <br />preview to get your viewers hooked:
      </h3>
    </header>

    <div class="grid grid-cols-2 gap-[2rem] w-full">
      <EntitiesHomeHeroCard
        v-for="card in heroCards"
        v-bind="card"
        :key="card.alt"
        class="last:col-span-2"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { IHeroCard } from "~/src/shared/features/types/shared.types";

const heroCards: IHeroCard[] = [
  {
    text: "AI-powered editing technology to engage viewers to watch the full version",
    img: "/img/home/hero/pacman.png",
    alt: "Image of Pacman in grid",
  },

  {
    text: "Tap on the preview at any moment to see the full fragment from the original video",
    img: "/img/home/hero/play.png",
    alt: "Play icon in hexagon",
  },
  {
    text: "Tailored to any social platform",
    img: "/img/home/hero/social.png",
    alt: "Image of social widgets consisting of Publish button",
  },
];
</script>

<style scoped lang="scss"></style>
