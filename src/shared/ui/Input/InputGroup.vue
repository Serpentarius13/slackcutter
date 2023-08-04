<template>
  <div class="flex flex-col gap-[2.2rem]">
    <h4 class="text-big text-black font-semibold">
      {{ title }}
    </h4>

    <slot />
  </div>
</template>

<script lang="ts" setup>
interface IInputGroupProps {
  title: string;
}

defineProps<IInputGroupProps>();
</script>

<style lang="scss" scoped></style>
