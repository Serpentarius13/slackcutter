<template>
  <SharedUiButton
    :theme="ButtonThemes.yellow"
    :additions="ButtonAdditions.unshadowed"
    class="h-[6.6rem] !w-full font-bold"
  >
    <slot />
  </SharedUiButton>
</template>

<script setup lang="ts">
import {
  ButtonAdditions,
  ButtonThemes,
} from "~/src/shared/ui/Button/buttonThemes";
</script>

<style scoped lang="scss"></style>
