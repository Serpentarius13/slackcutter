<template>
  <ul class="flex items-center gap-[0.9rem]">
    <li v-for="social in socials" :key="social.iconName">
      <SharedUiSocialsVideoSocial :icon-name="social.iconName" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { IVideoSocial } from "../../../shared/ui/Socials/video-social.types";

interface IVideoSocialList {
  socials: IVideoSocial[];
}

defineProps<IVideoSocialList>();
</script>

<style scoped lang="scss"></style>
