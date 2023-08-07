<template>
  <SharedUiNavbar />
  <div class="h-full w-screen !p-[3.8rem] !pt-[17.5rem]">
    <slot />
  </div>
</template>

<script lang="ts" setup>
useHead({
  bodyAttrs: { class: ["cabinet-view"] },
  htmlAttrs: { class: ["font-size-144"] },
});
</script>

<style lang="scss" scoped></style>
