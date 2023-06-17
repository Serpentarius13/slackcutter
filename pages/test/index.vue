<template>
  <WidgetsHomeHeader  class="pt-[20.6rem]"/>
</template>

<script setup lang="ts">
const router = useRouter();

onMounted(() => {
  if (process.env.NODE_ENV !== "development") router.push("/");
});
</script>

<style scoped lang="scss"></style>
