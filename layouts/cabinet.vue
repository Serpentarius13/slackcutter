<template>
  <SharedUiNavbar />
  <div class="h-full w-screen !p-[3.8rem] !pt-[17.5rem]">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
:global(body) {
  background: linear-gradient(
    to bottom,
    #0057ff 0%,
    rgba(0, 87, 255, 1) 10%,
    #04072d 35%
  );
  min-height: 100vh;
}
</style>
