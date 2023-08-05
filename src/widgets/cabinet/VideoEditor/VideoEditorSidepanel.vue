<template>
  <section class="rounded-[2.5rem] flex flex-col justify-between p-[3.2rem] container-bg">
    <div class="mb-[4.2rem] child:border-b-[1px] child:border-white child:border-opacity-[12%]">
      <header class="w-full pb-[4.2rem] mb-[4.2rem]">
        <div class="pr-[1rem]">
          <h2 class="heading-medium-semi mb-[3.2rem]">VFX Video</h2>

          <p class="text-small text-white opacity-70 mb-[4.2rem]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolores ea ex placeat
            quo? Ad aspernatur delectus, error expedita fuga itaque iure laudantium nihil pariatur
            rem sunt totam unde vero.
          </p>

          <SharedUiButton :theme="ButtonThemes.outlineYellow" class="!w-full">
            Regenerate</SharedUiButton
          >
        </div>
      </header>

      <div class="pb-[4.2rem]">
        <h3 class="text-big text-white mb-[4.2rem]">Select preview duration</h3>

        <SharedUiTags :tags="videoDurationTags" />
      </div>
    </div>

    <SharedUiButton :theme="ButtonThemes.blue" class="!w-full">
      <div class="grid grid-cols-[0.9fr_0.1fr] gap-[1.4rem] items-center w-full">
        <span class="text-medium font-bold text-white"> Generate </span>

        <NuxtIcon :filled="true" name="main/pacman" />
      </div>
    </SharedUiButton>
  </section>
</template>

<script lang="ts" setup>
import { ButtonThemes } from "~/src/shared/ui/Button/buttonThemes";
import { ITag } from "~/src/shared/features/types/shared.types";

interface IVideoEditorSidepanelProps {}

defineProps<IVideoEditorSidepanelProps>();

const videoDurationTags: ITag[] = [
  { text: "30s", slug: "30" },
  { text: "1 min", slug: "60" },
  { text: "3 min", slug: "180" },
];
</script>

<style lang="scss" scoped></style>