<template>
  <WidgetsAuthSwiper />

  <section
    class="flex h-full w-full items-center justify-center bg-white flex-1 transition-all px-[3rem]"
  >
    <div class="flex flex-col gap-[5.7rem] max-w-[41.4rem] w-full">
      <nav
        v-if="$route.path === '/auth/login' || $route.path === '/auth/register'"
        class="flex max-w-full items-center gap-[1rem] px-[1rem] py-[0.8rem]"
      >
        <SharedUiTabLink :activated="$route.path === '/auth/login'" to="/auth/login">
          Sign In
        </SharedUiTabLink>

        <SharedUiTabLink :activated="$route.path === '/auth/register'" to="/auth/register">
          Sign Up
        </SharedUiTabLink>
      </nav>

      <button v-else @click="$router.go(-1)">
        <NuxtIcon class="mb-[7.5rem] aspect-square w-[5.2rem]" name="main/arrow-left" />
      </button>

      <NuxtPage />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { authLeftImages } from "~/src/entities/auth/auth-left-images.consts";
import { preloadImage } from "~/src/shared/features/utils/preloadImage";

definePageMeta({ layout: "auth", middleware: "requires-guest" });

onMounted(() => {
  Object.values(authLeftImages).forEach((img) => preloadImage(img));
});
</script>

<style lang="scss"></style>