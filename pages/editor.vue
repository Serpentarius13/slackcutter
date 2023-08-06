<template>
  <WidgetsCabinetVideoEditor :is-clip="!!$route.params.videoId">
    <NuxtPage />
  </WidgetsCabinetVideoEditor>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "editor",
  middleware: ["requires-auth", "requires-video"],
  key: (route) => route.fullPath,
});
</script>

<style lang="scss" scoped></style>
