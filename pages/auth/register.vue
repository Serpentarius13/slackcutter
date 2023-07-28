<template>
  <WidgetsAuthRegistration />
</template>

<script lang="ts" setup>
import { useLeftImage } from "~/stores/useLeftImage";

const leftImgStore = useLeftImage();

onMounted(() => {
  leftImgStore.resetImage();
});
</script>

<style lang="scss" scoped></style>