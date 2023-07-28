<template>
  <main class="flex h-screen w-screen">
    <slot />
  </main>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
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
