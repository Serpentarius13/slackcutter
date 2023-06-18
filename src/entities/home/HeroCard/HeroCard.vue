<template>
  <figure
    class="borderline flex min-h-[38rem] min-w-full flex-col items-center justify-center rounded-medium bg-white bg-opacity-small pb-[3.8rem] pt-[5.2rem]"
  >
    <div class="flex flex-1 items-center justify-center">
      <img :src="img" :alt="alt" class=" " />
    </div>
    <figcaption class="text-big mt-auto max-w-[45rem]">
      {{ text }}
    </figcaption>
  </figure>
</template>

<script setup lang="ts">
import { IHeroCard } from "~/src/shared/features/types/shared.types";

interface IHero extends IHeroCard {}

const props = defineProps<IHero>();
</script>

<style scoped lang="scss"></style>
