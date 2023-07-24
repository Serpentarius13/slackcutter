<template>
  <div
    class="max-w-screen relative h-[68.4rem] max-h-screen w-[77.8rem] rounded-medium-small"
  >
    <SharedUiButtonModalButton
      class="absolute right-[3.25rem] top-[3.2rem] z-[5] transition-all hover:bg-white hover:text-black"
      @click="modalStore.closeModal"
    />

    <slot />
  </div>
</template>

<script setup lang="ts">
import useModalStore from "~/stores/useModalStore";

const modalStore = useModalStore();
</script>

<style scoped lang="scss"></style>
