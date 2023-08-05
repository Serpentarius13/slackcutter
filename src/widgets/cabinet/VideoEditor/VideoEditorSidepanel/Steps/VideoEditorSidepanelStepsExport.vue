<template>
  <SharedUiButton :theme="ButtonThemes.outlineYellow" class="!w-full"> Regenerate</SharedUiButton>

  <SharedUiButton :theme="ButtonThemes.blue" class="!w-full">
    <div class="grid grid-cols-[0.9fr_0.1fr] gap-[1.4rem] items-center w-full">
      <span class="text-medium font-bold text-white"> Export </span>

      <NuxtIcon :filled="true" name="main/pacman" />
    </div>
  </SharedUiButton>
</template>

<script lang="ts" setup>
import { ButtonThemes } from "~/src/shared/ui/Button/buttonThemes";

interface IVideoEditorSidepanelStepsExportProps {}

defineProps<IVideoEditorSidepanelStepsExportProps>();
</script>

<style lang="scss" scoped></style>