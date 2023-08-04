<template>
  <button
    class="rounded-full bg-black bg-opacity-20 p-[1.2rem] backdrop-blur-[7px]"
    @click="() => modalStore.closeModal(true)"
  >
    <NuxtIcon class="aspect-square w-[2.8rem]" name="main/cross" />
  </button>
</template>

<script lang="ts" setup>
import useModalStore from "~/stores/useModalStore";

const modalStore = useModalStore();
</script>

<style lang="scss" scoped></style>