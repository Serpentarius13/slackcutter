<template>
  <SharedUiButton
    :additions="[
      ButtonAdditions.unshadowed,
      isUnhovering ? ButtonAdditions.unhovering : ('' as any),
    ]"
    :theme="ButtonThemes.yellow"
    class="h-[6.6rem] !w-full font-bold"
  >
    <slot />
  </SharedUiButton>
</template>

<script lang="ts" setup>
import { ButtonAdditions, ButtonThemes } from "~/src/shared/ui/Button/buttonThemes";

interface IAuthButton {
  isUnhovering?: boolean;
}

defineProps<IAuthButton>();
</script>

<style lang="scss" scoped></style>