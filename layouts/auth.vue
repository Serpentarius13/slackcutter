<template>
  <main class="grid h-screen w-screen grid-cols-2">
    <slot />
  </main>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
:global(body) {
  background: #04072d;
  @apply text-black;
}

:global(html) {
  font-size: 62.5%;
}

/** :global(.page-enter-from) {
  opacity: 0;
  scale: 0;
}

:global(.page-leave-to) {
  opacity: 0;
  scale: 0;
}

:global(.page-enter-active, .page-leave-active) {
  transition: 0.5s ease all;
}**/
</style>
