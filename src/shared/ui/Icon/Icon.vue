<template>
  <component :is="icon" v-if="icon" />
</template>

<script lang="ts" setup>
interface IIcon {
  src: string;
}

const props = defineProps<IIcon>();

const icon = defineAsyncComponent(() => import(`/icons/${props.src}.svg`));
</script>

<style lang="scss" scoped></style>
