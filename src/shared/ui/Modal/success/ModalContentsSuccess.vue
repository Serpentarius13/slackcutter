<template>
  <div class="flex flex-col items-center max-w-[41.4rem] gap-[11.7rem]">
    <div class="flex flex-col gap-[6.7rem] items-center">
      <NuxtIcon class="w-[15rem] aspect-square text-green-600" name="main/check" />

      <h3 class="heading-big text-white text-center max-w-full">
        {{ title }}
      </h3>
    </div>

    <SharedUiButton
      :theme="ButtonThemes.white"
      class="text-medium text-black font-bold"
      @click="action"
    >
      {{ buttonText }}
    </SharedUiButton>
  </div>
</template>

<script lang="ts" setup>
import { ButtonThemes } from "~/src/shared/ui/Button/buttonThemes";
import { IModalSuccessProps } from "~/src/shared/ui/Modal/success/modal-success.types";

defineProps<IModalSuccessProps>();
</script>

<style lang="scss" scoped></style>