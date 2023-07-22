<template>
  <div class="h-full w-full">
    <article
      class="absolute bottom-[17.7rem] left-1/2 flex -translate-x-1/2 flex-col items-center justify-center"
    >
      <img
        class="max-h-[60rem] w-full object-contain"
        :src="imgSource"
        :alt="imgAlt"
      />
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

<script setup lang="ts">
import { IAuthSwiperSlide } from "./auth-swiper-slide.types";

defineProps<IAuthSwiperSlide>();
</script>

<style scoped lang="scss"></style>
