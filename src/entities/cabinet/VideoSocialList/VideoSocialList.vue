<template>
  <ul class="flex items-center gap-[0.9rem]">
    <li v-for="social in socials" :key="social.imgAlt">
      <SharedUiSocialsVideoSocial :img-alt="social.imgAlt" :img-source="social.imgSource" />
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { IImage } from "~/src/shared/features/types/shared.types";

interface IVideoSocialList {
  socials: IImage[];
}

defineProps<IVideoSocialList>();
</script>

<style lang="scss" scoped></style>