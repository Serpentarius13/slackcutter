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
  @apply flex w-fit items-center justify-center border-2 border-solid border-transparent outline-none;

  // themes

  &.purple {
    @apply bg-purple text-white hover:border-white hover:border-opacity-40 hover:bg-transparent;
  }

  &.outline {
    @apply border-white border-opacity-40 bg-transparent text-white hover:border-transparent hover:bg-purple;
  }

  &.yellow {
    background: radial-gradient(
        42.56% 215.72% at 92.43% 82.5%,
        rgba(255, 255, 255, 0.2) 0%,
        rgba(0, 0, 0, 0) 100%
      )
      #ffda00;

    box-shadow: 0px 7px 114px rgba(255, 218, 0, 0.45);

    @apply rounded-big text-black;

    &:hover {
      box-shadow: 0px 7px 50px rgba(255, 218, 0);
    }
  }

  // sizes

  &.medium {
    @apply h-[6.6rem]  w-[20.1rem] rounded-big lg:w-[17rem];
  }
}
</style>
