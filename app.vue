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

onMounted(() => {
  AOS.init({ disable: true });
  userStore.loginWithToken().then(() => {});
  console.log(userStore.user);
});
</script>

<style lang="scss"></style>