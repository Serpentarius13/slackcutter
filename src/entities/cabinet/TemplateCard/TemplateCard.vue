<template>
  <figure
    class="group/card grid min-h-[27rem] grid-cols-2 justify-start gap-[3.2rem] rounded-medium border-[1px] border-white border-opacity-70 bg-white bg-opacity-[8%] p-[1.8rem] backdrop-blur-[8.2rem]"
  >
    <NuxtImg
      class="bordered h-full max-h-[23.4rem] w-full rounded-smaller object-cover"
      :src="template.img"
      :alt="`Image of template ${template.title}`"
    />

    <div class="flex h-full w-full flex-col justify-between">
      <h4 class="heading-small text-white">
        {{ template.title }}
      </h4>

      <p class="text-small max-w-[24.3rem] text-white opacity-70">
        {{ template.text }}
      </p>

      <EntitiesCabinetCreateProjectBtn
        class="opacity-0 group-hover/card:opacity-100"
      >
        Use for New project
      </EntitiesCabinetCreateProjectBtn>
    </div>
  </figure>
</template>

<script setup lang="ts">
import {
  ButtonAdditions,
  ButtonThemes,
} from "~/src/shared/ui/Button/buttonThemes";
import { ITemplate } from "./template-card.types";

interface IProjectCard {
  template: ITemplate;
}

defineProps<IProjectCard>();
</script>

<style scoped lang="scss">
.bordered {
  border-bottom-right-radius: 5.3rem;
}
</style>
