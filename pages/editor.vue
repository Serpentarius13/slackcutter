<template>
  <WidgetsCabinetVideoEditor>
    <NuxtPage />
  </WidgetsCabinetVideoEditor>
</template>

<script lang="ts" setup>
definePageMeta({ layout: "editor", middleware: ["requires-auth", "requires-video"] });
</script>

<style lang="scss" scoped></style>
