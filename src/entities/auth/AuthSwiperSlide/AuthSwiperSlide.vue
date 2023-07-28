<template>
  <div class="h-full w-full grid place-items-center">
    <article class="flex flex-col items-center justify-center">
      <NuxtImg :alt="imgAlt" :src="imgSource" class="max-h-[60rem] w-full object-contain" />
      <h2
        class="heading-big mb-[5.7rem] mt-[4.22rem] max-w-[40rem] text-center uppercase text-white"
      >
        {{ title }}
      </h2>

      <p
        class="text-medium max-w-[32rem] text-center text-white opacity-70 transition-all hover:opacity-100"
      >
        {{ text }}
      </p>
    </article>
  </div>
</template>

<script lang="ts" setup>
import { IAuthSwiperSlide } from "./auth-swiper-slide.types";

defineProps<IAuthSwiperSlide>();
</script>

<style lang="scss" scoped></style>