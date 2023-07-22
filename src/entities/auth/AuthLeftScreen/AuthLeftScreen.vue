<template>
  <div
    class="auth-left-screen relative flex h-screen max-h-screen w-full items-center justify-center overflow-hidden bg-darkest-blue transition-all"
    :style="{
      background: gradientColor,
    }"
  >
    <SharedUiLogo
      class="absolute left-[3.8rem] top-[3.2rem] z-[10] aspect-square w-[7.8rem]"
    />

    <slot />
  </div>
</template>

<script setup lang="ts">
interface IAuthLeftScreen {
  gradientColor?: string;
  atBottom?: boolean;
}

withDefaults(defineProps<IAuthLeftScreen>(), { gradientColor: "#0057ff" });
</script>

<style scoped lang="scss"></style>
