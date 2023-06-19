<template>
  <div
    class="borderline text-medium md:text-small sm:text-sm relative grid grid-cols-2 items-center md:grid-cols-[0.1fr_1fr] gap-[4.4rem] md:gap-[2rem] rounded-bigger bg-white bg-opacity-[6%] px-[8.9rem] py-[4.5rem] xl:px-[7rem] xl:py-[4rem] lg:px-[5rem] lg:py-[3rem] md:px-[3.5rem] md:py-[2.3rem] sm:px-[2rem] sm:py-[1rem]"
    ref="progressRef"
  >
    <p class="heading-big">{{ stepComputed }}</p>

    <div
      :class="[
        isShowingProgress && step >= 3 && '!text-white',
        'text-light-gray',
      ]"
    >
      <slot />
    </div>

    <Transition name="width">
      <div
        :style="{ width }"
        class="absolute left-0 top-1/2 -z-[2] h-full max-w-full -translate-y-1/2 rounded-bigger bg-purple"
        v-if="isShowingProgress"
      />
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { useIntersectionObserver } from "~/src/shared/features/hooks/useIntersectionObserver";

interface IProgressStep {
  step: number;
  width: string;
}

const { step } = defineProps<IProgressStep>();

const isShowingProgress = ref<boolean>(false);
const progressRef = ref<HTMLElement | null>();

const stepComputed = computed<string>(() =>
  step >= 10 ? `${step}` : `0${step}`
);

useIntersectionObserver(progressRef, () => (isShowingProgress.value = true));
</script>

<style scoped lang="scss">
.width-enter-from,
.width-leave-to {
  width: 0 !important;
}

.width-enter-active,
.width-leave-active {
  transition: 1s all;
}
</style>
