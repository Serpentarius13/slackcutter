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

  @media (max-width: 1024px) {
    background: url("/img/home/home-bg-tablet.png") 0 0 / cover no-repeat,
      #0a0f17;
  }

  @media (max-width: 430px) {
    background: url("/img/home/home-bg-phone.png") 0 0 / cover no-repeat,
      #0a0f17;
  }
}
</style>
