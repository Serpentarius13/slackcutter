<template>
  <SharedUiNavbar />

  <main>
    <slot />
  </main>
</template>

<script lang="ts" setup>
useHead({
  bodyAttrs: { class: ["landing-view"] },
});
</script>

<style lang="scss" scoped></style>
