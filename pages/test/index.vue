<template>
  <ClientOnly>
    <!-- <SharedUiVideo video-url="https://www.youtube.com/watch?v=AI9gHN-qa6w" /> -->

    <SharedUiInputDigitCell :digit="digit" />

    <button @click="toggle">Toggler</button>
  </ClientOnly>
</template>

<script setup lang="ts">
const router = useRouter();

// onMounted(() => {
//   if (process.env.NODE_ENV !== "development") router.push("/");
// });

const digit = ref<any>(1);

const toggle = () => (digit.value = digit.value === 1 ? null : 1);
</script>

<style scoped lang="scss"></style>
