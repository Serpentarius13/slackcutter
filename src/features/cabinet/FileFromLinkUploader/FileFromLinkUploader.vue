<template>
  <div
    class="h-[26.3rem] w-full bg-white p-[5.3rem] flex flex-col justify-between rounded-medium-small"
  >
    <SharedUiInputText v-model="fileLink" placeholder="Insert a link to the video" />

    <SharedUiButton
      :disabled="fileLink.length < 5"
      :size="ButtonSizes.mediumSmall"
      :theme="ButtonThemes.blue"
      class="!w-full"
    >
      <div class="grid grid-cols-[1fr_fit-content(35px)] w-full items-center">
        <span class="text-medium text-white font-bold"> Generate Preview with AI </span>

        <NuxtIcon :filled="true" class="w-[3.5rem] aspect-square" name="main/pacman" />
      </div>
    </SharedUiButton>
  </div>
</template>

<script lang="ts" setup>
import { ButtonSizes, ButtonThemes } from "~/src/shared/ui/Button/buttonThemes";

interface IFileFromLinkUploaderProps {}

defineProps<IFileFromLinkUploaderProps>();

const fileLink = ref<string>("");
</script>

<style lang="scss" scoped></style>