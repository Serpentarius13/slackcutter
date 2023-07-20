<template>
  <SharedUiButton
    :theme="ButtonThemes.yellow"
    :style="ButtonStyles.unshadowed"
    class="h-[6.6rem] w-full font-bold"
  >
    <slot />
  </SharedUiButton>
</template>

<script setup lang="ts">
import { ButtonStyles, ButtonThemes } from "../Button/buttonThemes";
</script>

<style scoped lang="scss"></style>
