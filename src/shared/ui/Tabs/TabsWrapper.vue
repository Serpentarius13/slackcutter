<template>
  <div>
    <nav :class="navClasses">
      <button
        v-for="tab in tabs"
        :key="tab"
        :class="[...buttonClasses, tab === currentTab && 'active']"
        @click="currentTab = tab"
      >
        {{ tab }}
      </button>
    </nav>

    <slot />
  </div>
</template>

<script lang="ts" setup>
import { tabsInjectionKey } from "~/src/shared/ui/Tabs/tabs.consts";

interface ITabsWrapper {
  navClasses?: string[];
  buttonClasses?: string[];
}

defineProps<ITabsWrapper>();

const slots = useSlots();

const tabs = ref<string[]>(slots.default().map((t) => t.props.title));

const currentTab = ref<string>(tabs.value[0]);

provide(tabsInjectionKey, readonly(currentTab));
</script>

<style lang="scss" scoped></style>