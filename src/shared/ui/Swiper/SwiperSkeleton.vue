<template>
  <Swiper
    :modules="[SwiperPagination, SwiperNavigation]"
    :autoplay="false"
    v-bind="options ?? {}"
    :pagination="true"
    :navigation="{ prevEl: '.prev', nextEl: '.next' }"
    class="relative"
  >
    <slot />

    <div class="swip-navigation">
      <button class="prev">
        <NuxtIcon name="lt" />
      </button>
      <button class="next">
        <NuxtIcon name="gt" />
      </button>
    </div>
  </Swiper>
</template>

<script setup lang="ts">
import { ISwiperOptions } from "~/features/types/swiper.types";

interface ISwiper {
  options?: ISwiperOptions;
}

const props = defineProps<ISwiper>();
</script>

<style lang="scss">
.swiper {
  width: 100%;
  height: 100%;

  &-slide {
    @apply mx-auto flex items-center justify-center;
  }
}

.swip-navigation {
  button {
    @apply absolute top-1/2 z-[20] flex aspect-square w-[4rem] -translate-y-1/2 items-center justify-center rounded-full border-2 border-black bg-white transition-all;

    &.prev {
      @apply left-[1rem];
    }

    &.next {
      @apply right-[1rem];
    }

    &:disabled {
      @apply cursor-default bg-gray-500 text-black;
    }
  }
}
</style>
