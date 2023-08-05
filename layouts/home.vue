<template>
  <SharedUiNavbar :is-homepage="true" />
  <main class="pt-[20.6rem] lg:pt-[15rem]">
    <slot />
  </main>
</template>

<script lang="ts" setup>
useHead({
  bodyAttrs: { class: ["landing-view"] },
});
</script>

<style lang="scss" scoped></style>
