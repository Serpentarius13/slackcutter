<template>
  <NuxtPage />
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "cabinet",
  middleware: "requires-auth",
});
</script>

<style lang="scss" scoped></style>
