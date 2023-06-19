<template>
  <div class="ball" />
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.ball {
  width: 1546px;
  height: 1135px;

  background: #0057ff;

  opacity: 0.35;
  filter: blur(370px);
  mix-blend-mode: hard-light;

  border-bottom-left-radius: 50% 25%;
  border-bottom-right-radius: 50% 25%;
  border-top-left-radius: 50% 25%;
  border-top-right-radius: 50% 25%;
}
</style>
