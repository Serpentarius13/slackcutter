<template>
  <a
    :class="[
      'text-small relative  overflow-x-hidden px-[0.5rem] text-light-gray',
      isHovering && '!text-black',
    ]"
    @mouseenter="onHover"
    @mouseleave="onUnhover"
    :href="link.link"
  >
    {{ link.text }}

    <Transition name="slide">
      <div
        class="absolute left-0 top-0 -z-[2] h-full min-w-full bg-yellow px-[1rem]"
        v-if="isHovering"
      />
    </Transition>
  </a>
</template>

<script setup lang="ts">
import { useHover } from "../../features/hooks/useHover";
import { TNavLink } from "../../features/types/shared.types";

interface INavbarLInk {
  link: TNavLink;
}

const { link } = defineProps<INavbarLInk>();

const { isHovering, onHover, onUnhover } = useHover();
</script>

<style scoped lang="scss">
.nav-link {
  &::after {
    content: "";
    @apply h-full w-full -translate-x-full bg-yellow;
  }
}

.slide-enter-from {
  @apply -translate-x-full;
}

.slide-leave-to {
  @apply translate-x-full;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s;
}
</style>
