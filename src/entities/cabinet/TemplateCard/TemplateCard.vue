<template>
  <figure
    class="group grid min-h-[27rem] grid-cols-2 justify-start gap-[3.2rem] rounded-medium border-[1px] border-white border-opacity-70 bg-white bg-opacity-[8%] p-[1.8rem] backdrop-blur-[8.2rem]"
  >
    <NuxtImg
      class="h-full w-full rounded-smaller border-r-[5.3rem] object-cover"
      :src="template.img"
      :alt="`Image of template ${template.title}`"
    />

    <div class="flex h-full flex-col justify-between">
      <h4 class="heading-small text-white">
        {{ template.title }}
      </h4>

      <p class="text-small text-white opacity-70">{{ template.text }}</p>

      <SharedUiButton
        :additions="ButtonAdditions.unshadowed"
        :theme="ButtonThemes.yellow"
        class="opacity-0 transition-all group-hover:opacity-100"
      >
        <span class="font-bold"> Use for New Template </span>
        <NuxtIcon name="main/plus" />
      </SharedUiButton>
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

<style scoped lang="scss"></style>
