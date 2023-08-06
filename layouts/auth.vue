<template>
  <main class="flex h-screen w-screen">
    <slot />
  </main>
</template>

<script lang="ts" setup>
useHead({
  bodyAttrs: { class: ["auth-view"] },
  htmlAttrs: { class: ["font-size-144"] },
});
</script>

<style lang="scss" scoped></style>
