<template>
  <button
    :class="[
      props.size,
      props.theme,
      fontSizes[size],
      'btn transition-standard ',
    ]"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { ButtonSizes, ButtonThemes } from "./buttonThemes";

type ButtonProps = {
  size?: ButtonSizes;
  theme?: ButtonThemes;
};

const props = withDefaults(defineProps<ButtonProps>(), {
  size: ButtonSizes.medium,
  theme: ButtonThemes.purple,
});

const fontSizes: Record<ButtonSizes, string> = {
  medium: "text-medium",
};
</script>

<style scoped lang="scss">
.btn {
  @apply w-fit flex items-center justify-center border-2 border-solid border-transparent outline-none;

  // themes

  &.purple {
    @apply bg-purple text-white hover:bg-transparent hover:border-white hover:border-opacity-40;
  }

  &.outline {
    @apply bg-transparent text-white hover:bg-purple border-white border-opacity-40 hover:border-transparent;
  }

  // sizes

  &.medium {
    @apply rounded-big  w-[20.1rem] h-[6.6rem];
  }
}
</style>
