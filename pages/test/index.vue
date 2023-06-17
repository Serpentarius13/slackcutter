<template>
  <WidgetsHomeHeader />

  <WidgetsHomeHero class="mt-[19.7rem]" />
</template>

<script setup lang="ts">
const router = useRouter();

onMounted(() => {
  if (process.env.NODE_ENV !== "development") router.push("/");
});
</script>

<style scoped lang="scss"></style>
