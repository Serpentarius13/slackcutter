<template>
  <div
    :style="{
      background: gradientColor,
    }"
    class="relative flex h-screen max-h-screen items-center justify-center overflow-hidden bg-darkest-blue transition-all"
  >
    <SharedUiLogo class="absolute left-[3.8rem] top-[3.2rem] aspect-square w-[7.8rem] z-[502]" />

    <slot />
  </div>
</template>

<script lang="ts" setup>
interface IAuthLeftScreen {
  gradientColor?: string;
  atBottom?: boolean;
}

withDefaults(defineProps<IAuthLeftScreen>(), { gradientColor: "#0057ff" });
</script>

<style lang="scss" scoped></style>
