<template>
  <div
    class="w-[77.7rem] h-[68.4rem] max-w-[95vw] max-h-[90vh] bg-modal-bg rounded-[2rem] backdrop-blur-[107px] border-[1px] border-white border-opacity-[15%] flex flex-col items-center justify-center"
  >
    <div class="mb-[5rem] -translate-x-[8rem] -translate-y-[8rem] relative mt-[6rem]">
      <div class="absolute w-full h-[30rem] top-0"></div>
      <SharedUiPacmanAnimation />
    </div>

    <span
      class="py-[1rem] px-[2rem] border-[1px] border-yellow rounded-[7rem] text-yellow block mb-[6rem]"
    >
      Exporting...
    </span>

    <strong class="heading-titlecase"
      ><span ref="progressRef">{{ progress }} </span> %</strong
    >
  </div>
</template>

<script lang="ts" setup>
import useModalStore from "~/stores/useModalStore";
import { animateValue } from "~/src/shared/features/utils/animeValue";

const progress = ref<number>(0);
const progressRef = ref<HTMLElement | null>();

const modalStore = useModalStore();

const setProgress = (val: number) => {
  if (progress.value <= 100) {
    progress.value = val;
  }
};

onMounted(() => {
  setInterval(() => {
    setProgress(progress.value + 1);
  }, 100);

  modalStore.$subscribe((_, state) => {
    if (!state.isOpened) {
      setProgress(100);
      animateValue(progressRef.value, progress.value, 250);
    }
  });
});
</script>

<style lang="scss" scoped></style>