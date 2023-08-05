<template>
  <SharedUiNavbar class="!container-big" />

  <main class="!pt-[17.5rem]">
    <slot />
  </main>
</template>

<script lang="ts" setup>
useHead({
  bodyAttrs: { class: ["landing-view"] },
});
</script>

<style lang="scss" scoped></style>
