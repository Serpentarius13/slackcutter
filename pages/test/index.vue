<template>
  <SharedUiVideo video-url="https://www.youtube.com/watch?v=AI9gHN-qa6w" />
</template>

<script setup lang="ts">
const router = useRouter();

onMounted(() => {
  if (process.env.NODE_ENV !== "development") router.push("/");
});
</script>

<style scoped lang="scss"></style>
