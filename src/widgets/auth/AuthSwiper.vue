<template>
  <EntitiesAuthAuthLeftScreen
    :gradient-color="isRedBackground ? SWIPER_RED_COLOR : SWIPER_BLUE_COLOR"
    class="w-[90rem] max-w-[50vw] md:hidden"
  >
    <SharedUiSwiper
      v-if="!leftImgStore.hasImage"
      v-slot="{ slide }"
      :has-pagination="true"
      :slides="slides"
      class="min-w-[50%]"
      @slideChange="onSwiper"
    >
      <EntitiesAuthAuthSwiperSlide v-bind="slide" />
    </SharedUiSwiper>

    <NuxtImg
      v-else
      :alt="leftImgStore?.image.imgAlt"
      :src="leftImgStore?.image.imgSource"
      class="w-full h-full object-contain transition-all"
      preload
    />
  </EntitiesAuthAuthLeftScreen>
</template>

<script lang="ts" setup>
import { Swiper } from "swiper/types";
import { IAuthSwiperSlide } from "~/src/entities/auth/AuthSwiperSlide/auth-swiper-slide.types";
import { useLeftImage } from "~/stores/useLeftImage";

const SWIPER_BLUE_COLOR =
  "linear-gradient(0deg, rgba(0,87,255,1) 0%, rgba(0,87,255,0.3) 30%,  rgba(4,7,45,1) 50%)";
const SWIPER_RED_COLOR =
  "linear-gradient(0deg, rgba(255, 218, 0, 1) 0%,rgba(255, 218, 0, 0.3) 30%, rgba(4,7,45,1) 50%)";

const isRedBackground = ref<boolean>(false);

const leftImgStore = useLeftImage();

const onSwiper = (swiper: Swiper) =>
  swiper.activeIndex === 1 ? (isRedBackground.value = true) : (isRedBackground.value = false);

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
    title: "Unleash your creativity",
    text: "Tons of built-in templates for your videos, including FPV, GoPro, Streaming, and many more",
  },
  {
    imgAlt: "Tiktok & Social platforms publish button",
    imgSource: "/img/auth/auth_slide-3.png",
    title: "Optimized for sharing",
    text: "Formatted for any social platform",
  },
];
</script>

<style lang="scss"></style>