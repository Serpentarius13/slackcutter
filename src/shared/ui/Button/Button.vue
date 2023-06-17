<template>
  <button :class="buttonVariants({ variant, size })">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { VariantProps } from "class-variance-authority";

import { buttonVariants } from "./buttonVariants";

type ButtonProps = Required<VariantProps<typeof buttonVariants>>;

const props = defineProps<{
  variant: ButtonProps["variant"];
  size: ButtonProps["size"];
}>();
</script>

<style scoped lang="scss"></style>
