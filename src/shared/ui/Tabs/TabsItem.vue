<template>
  <Transition mode="out-in" name="fade">
    <div v-show="selectedTitle === title">
      <slot />
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import { tabsInjectionKey } from "~/src/shared/ui/Tabs/tabs.consts";

interface ITabItem {
  title: string;
}

defineProps<ITabItem>();

const selectedTitle = inject(tabsInjectionKey);
</script>

<style lang="scss" scoped></style>