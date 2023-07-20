<template>
  <button
    class="flex aspect-square w-[5.6rem] items-center justify-center rounded-full"
  >
    <NuxtIcon :name="icon" />
  </button>
</template>

<script setup lang="ts">
interface IAuthProviderButton {
  icon: string;
}

defineProps<IAuthProviderButton>();
</script>

<style scoped lang="scss"></style>
