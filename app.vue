<template>
  <NuxtLayout>
    <VitePwaManifest />
    <NuxtPage />
  </NuxtLayout>

  <ClientOnly>
    <WidgetsOtherModalWindow />
  </ClientOnly>
</template>

<script lang="ts" setup>
import AOS from "aos";

onMounted(() => {
  AOS.init({ disable: true });
});
</script>

<style lang="scss"></style>