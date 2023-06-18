<template>
  <NuxtLayout>
    <VitePwaManifest />
    <NuxtPage />
  </NuxtLayout>

  <ClientOnly> <WidgetsOtherModalWindow /> <WidgetsToaster /> </ClientOnly>
</template>

<script setup lang="ts">
import AOS from "aos";

onMounted(() => {
  AOS.init({ disable: process.env.NODE_ENV == "development" });
});
</script>
