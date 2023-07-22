<template>
  <EntitiesAuthAuthLeftScreen
    :gradient-color="isRedBackground ? SWIPER_RED_COLOR : SWIPER_BLUE_COLOR"
  >
    <SharedUiSwiper
      :slides="slides"
      v-slot="{ slide }"
      :has-pagination="true"
      @slideChange="onSwiper"
    >
      <EntitiesAuthAuthSwiperSlide v-bind="slide" />
    </SharedUiSwiper>
  </EntitiesAuthAuthLeftScreen>
</template>

<script setup lang="ts">
import { Swiper } from "swiper/types";
import { IAuthSwiperSlide } from "~/src/entities/auth/AuthSwiperSlide/auth-swiper-slide.types";

const SWIPER_BLUE_COLOR =
  "linear-gradient(0deg, rgba(0,87,255,1) 0%, rgba(0,87,255,0.3) 30%,  rgba(4,7,45,1) 50%)";
const SWIPER_RED_COLOR =
  "linear-gradient(0deg, rgba(255, 218, 0, 1) 0%,rgba(255, 218, 0, 0.3) 30%, rgba(4,7,45,1) 50%)";

const isRedBackground = ref<boolean>(false);

const onSwiper = (swiper: Swiper) =>
  swiper.activeIndex === 1
    ? (isRedBackground.value = true)
    : (isRedBackground.value = false);

const slides: IAuthSwiperSlide[] = [
  {
    imgAlt: "A neat screen with electric lightning and a heart nearby",
    imgSource: "/img/auth/auth_slide-1.png",
    title: "create on-the-fly previews",
    text: "Transform your videos into engaging previews with a single Tap",
  },
  {
    imgAlt: "GoPRO, VFX and Streaming templates",
    imgSource: "/img/auth/auth_slide-2.png",
    title: "unleash your creativity",
    text: "Transform your videos into engaging previews with a single Tap",
  },
  {
    imgAlt: "Tiktok & Social platforms publish button",
    imgSource: "/img/auth/auth_slide-3.png",
    title: "create on-the-fly previews",
    text: "Transform your videos into engaging previews with a single Tap",
  },
];
</script>

<style lang="scss"></style>
