<template>
  <SharedUiNavbar />
  <main class="pt-[20.6rem] lg:pt-[15rem]">
    <slot />
  </main>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
:global(body) {
  background: url("/img/home/home-bg.png") 0 0 / cover no-repeat, #0a0f17;
}
</style>
