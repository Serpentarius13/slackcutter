<template>
  <WidgetsHomeHeader />

  <WidgetsHomeHero class="mt-[19.7rem]" />

  <WidgetsHomeVideo class="mt-[20rem]" />

  <WidgetsHomeSteps class="mt-[15rem]" />

  <WidgetsHomeCTA class="!mt-[1000rem]" />
  <WidgetsHomeFooter class="mt-[10.2rem]" />
</template>

<script setup lang="ts">
const router = useRouter();

onMounted(() => {
  if (process.env.NODE_ENV !== "development") router.push("/");
});
</script>

<style scoped lang="scss"></style>
