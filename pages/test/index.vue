<template>
  <div class="h-screen w-screen">
    <CommonSwiperCourses :courses="courses" />
  </div>
</template>

<script setup lang="ts">
import { tariffs } from "~/features/constants/tariffs.constants";
import toaster from "vue-toastification";

import { courses } from "~/features/constants/courses.constants";

const router = useRouter();

onMounted(() => {
  if (process.env.NODE_ENV !== "development") router.push("/");
});
</script>

<style scoped lang="scss"></style>
