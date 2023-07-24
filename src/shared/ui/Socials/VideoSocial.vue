<template>
  <figure
    class="flex aspect-square w-[3.9rem] items-center rounded-full justify-center border-[1px] border-white border-opacity-[15%] bg-white bg-opacity-20 backdrop-blur-[17px]"
  >
    <NuxtIcon :name="iconName" class="max-w-full text-white" />
  </figure>
</template>

<script setup lang="ts">
import { IVideoSocial } from "./video-social.types";

defineProps<IVideoSocial>();
</script>

<style scoped lang="scss"></style>
