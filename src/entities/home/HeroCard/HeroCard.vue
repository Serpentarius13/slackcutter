<template>
  <figure
    class="min-h-[38rem] min-w-full flex items-center justify-center flex-col rounded-medium hero-card pb-[3.8rem] pt-[5.2rem] borderline"
  >
    <div class="flex items-center justify-center flex-1">
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

<style scoped lang="scss">
.hero-card {
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(17px);
}
</style>
