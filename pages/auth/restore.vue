<template>
  <WidgetsAuthRestore />
</template>

<script lang="ts" setup>
import { useLeftImage } from "~/stores/useLeftImage";

const leftImgStore = useLeftImage();

onMounted(() => {
  leftImgStore.setRestoreStepOne();
});
</script>

<style lang="scss" scoped></style>