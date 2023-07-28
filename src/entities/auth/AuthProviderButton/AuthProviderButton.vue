<template>
  <button class="flex aspect-square w-[5.6rem] items-center justify-center rounded-full">
    <NuxtImg :alt="imgAlt" :src="imgSource" class="w-[3.8rem] aspect-square" />
  </button>
</template>

<script lang="ts" setup>
import { IImage } from "~/src/shared/features/types/shared.types";

defineProps<IImage>();
</script>

<style lang="scss" scoped></style>