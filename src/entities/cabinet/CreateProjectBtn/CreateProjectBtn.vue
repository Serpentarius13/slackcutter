<template>
  <SharedUiButton
    :additions="[ButtonAdditions.unshadowed, ButtonAdditions.unhovering]"
    :theme="ButtonThemes.yellow"
    class="!w-full pl-[3.1rem] pr-[1.5rem] transition-all  px-0"
  >
    <div class="grid grid-cols-[1fr_0.1fr] items-center gap-[4.5rem] w-full">
      <span class="text-center font-bold w-full block"> <slot /> </span>
      <NuxtIcon name="main/plus" class="aspect-square w-[2.8rem]" />
    </div>
  </SharedUiButton>
</template>

<script setup lang="ts">
import {
  ButtonAdditions,
  ButtonThemes,
} from "~/src/shared/ui/Button/buttonThemes";
</script>

<style scoped lang="scss"></style>
