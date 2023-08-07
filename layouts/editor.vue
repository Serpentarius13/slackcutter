<template>
  <SharedUiNavbar class="!container-big" />

  <main class="!pt-[17.5rem]">
    <slot />
  </main>
</template>

<script lang="ts" setup>
useHead({
  bodyAttrs: { class: ["landing-view"] },
  htmlAttrs: { class: ["font-size-144"] },
});
</script>

<style lang="scss" scoped></style>
