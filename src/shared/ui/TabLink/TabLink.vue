<template>
  <NuxtLink
    :to="to"
    :class="[
      'text-medium  w-[19.3rem] rounded-medium-big  border-2 text-center font-medium text-black opacity-60 transition-all ',
      activated && 'border-gray-400 font-semibold opacity-100',
    ]"
  >
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
interface ITabLink {
  to: string;
  activated: boolean;
}

defineProps<ITabLink>();
</script>

<style scoped lang="scss"></style>
