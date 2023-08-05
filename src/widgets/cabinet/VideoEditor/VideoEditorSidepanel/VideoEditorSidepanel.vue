<template>
  <section class="rounded-[2.5rem] flex flex-col justify-between p-[3.2rem] container-bg">
    <slot />
  </section>
</template>

<script lang="ts" setup>

interface IVideoEditorSidepanelProps {}

defineProps<IVideoEditorSidepanelProps>();
</script>

<style lang="scss" scoped></style>
