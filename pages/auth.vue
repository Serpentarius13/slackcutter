<template>
  <WidgetsAuthSwiper />

  <section class="flex h-full w-full items-center justify-center bg-white">
    <div class="flex flex-col gap-[5.7rem]">
      <nav
        v-if="$route.path === '/auth/login' || $route.path === '/auth/register'"
        class="grid max-w-[41.4rem] grid-cols-2 items-center gap-[1rem] px-[1rem] py-[0.8rem]"
      >
        <SharedUiTabLink
          to="/auth/login"
          :activated="$route.path === '/auth/login'"
        >
          Sign In</SharedUiTabLink
        >

        <SharedUiTabLink
          to="/auth/register"
          :activated="$route.path === '/auth/register'"
        >
          Sign Up</SharedUiTabLink
        >
      </nav>

      <NuxtLink to="/auth/login" v-else>
        <NuxtIcon
          name="main/arrow-left"
          class="mb-[7.5rem] aspect-square w-[5.2rem]"
        />
      </NuxtLink>

      <NuxtPage />
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({ layout: "auth" });
</script>

<style lang="scss"></style>
