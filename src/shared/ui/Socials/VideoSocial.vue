<template>
  <figure
    class="flex aspect-square w-[3.9rem] items-center rounded-full justify-center border-[1px] border-white border-opacity-[15%] bg-white bg-opacity-20 backdrop-blur-[17px]"
  >
    <NuxtImg :alt="imgAlt" :src="imgSource" class="max-w-full text-white" />
  </figure>
</template>

<script lang="ts" setup>
import { IImage } from "~/src/shared/features/types/shared.types";

defineProps<IImage>();
</script>

<style lang="scss" scoped></style>