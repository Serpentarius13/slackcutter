<template>
  <a
    :href="link.link"
    :class="[
      'text-small text-light-gray  relative overflow-x-hidden px-[0.5rem]',
      isHovering && '!text-black',
    ]"
    @mouseenter="onHover"
    @mouseleave="onUnhover"
  >
    {{ link.text }}

    <Transition name="slide">
      <div
        class="absolute bg-yellow min-w-full h-full left-0 top-0 px-[1rem] -z-[2]"
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

defineProps<INavbarLInk>();

const { isHovering, onHover, onUnhover } = useHover();
</script>

<style scoped lang="scss">
.nav-link {
  &::after {
    content: "";
    @apply w-full h-full bg-yellow -translate-x-full;
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
