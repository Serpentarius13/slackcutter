<template>
  <div>
    <iframe v-bind="props" width="600" height="300" />
  </div>
</template>

<script setup lang="ts">
interface IFrame {
  src: string;
}

const props = defineProps<IFrame>();

console.log(props);
</script>

<style scoped lang="scss"></style>
