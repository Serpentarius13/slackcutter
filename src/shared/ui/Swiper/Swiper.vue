<template>
  <Swiper
    :modules="[SwiperNavigation, SwiperPagination]"
    :pagination="hasPagination"
    :navigation="hasNavigation ? { prevEl: '.prev', nextEl: '.next' } : false"
    v-bind="options"
    class="relative"
  >
    <SwiperSlide v-for="(slide, ix) in slides" :key="ix">
      <slot :slide="slide" />
    </SwiperSlide>

    <div class="swip-navigation" v-if="hasNavigation">
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
interface ISwiper {
  options?: any;
  slides: any[];
  hasPagination?: boolean;
  hasNavigation?: boolean;
}

withDefaults(defineProps<ISwiper>(), { options: {} });
</script>

<style lang="scss">
.swiper {
  width: 100%;
  height: 100%;

  --swiper-pagination-bottom: 6.2rem;
  --swiper-pagination-bullet-horizontal-gap: 0.6rem;

  &-slide {
    @apply mx-auto flex items-center justify-center;
  }

  &-pagination {
    &-bullet {
      @apply aspect-square w-[0.7rem] rounded-[5rem] transition-all;
      opacity: 0.4000000059604645;
      background: #d9d9d9;

      &-active {
        @apply w-[4.4rem] opacity-100;
      }
    }
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
