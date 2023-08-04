<template>
  <div
    class="max-w-[85vw] md:max-w-[95vw] relative min-h-[68.4rem] max-h-[95vh] overflow-hidden w-[77.8rem] rounded-medium-small"
  >
    <SharedUiButtonModalButton
      class="absolute right-[3.25rem] top-[3.2rem] z-[5] transition-all hover:bg-white hover:text-black lg:right-[2.4rem] lg:top-[2rem]"
    />

    <slot />
  </div>
</template>

<script lang="ts" setup>
import useModalStore from "~/stores/useModalStore";

const modalStore = useModalStore();
</script>

<style lang="scss" scoped></style>