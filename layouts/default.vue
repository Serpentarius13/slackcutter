<template>
  <SharedUiNavbar />
  <slot />

  <NuxtImg
    src="/img/landing-bg.png"
    class="fixed left-0 top-0 min-w-full min-h-full -z-[2]"
  />
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.a {
}
</style>
