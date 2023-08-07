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
import { useUserStore } from "~/stores/useUserStore";

const userStore = useUserStore();

const config = useRuntimeConfig();

onMounted(() => {
  AOS.init({ disable: true });
  userStore.loginWithToken().then(() => {});

  FB.init({
    appId: config.public.facebookApiId,
    autoLogAppEvents: true,
    xfbml: true,
    version: "v17.0",
  });
});
//
// useHead({
//   script: [{ src: "/scripts/facebook.ts", tagPosition: "bodyOpen" }],
// });
</script>

<style lang="scss"></style>