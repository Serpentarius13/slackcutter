<template>
  <a
    :class="[
      'text-small relative  overflow-x-hidden px-[0.5rem] text-light-gray',
      isHovering && '!text-black',
    ]"
    :href="link.link"
    @mouseenter="onHover"
    @mouseleave="onUnhover"
  >
    {{ link.text }}

    <Transition name="slide">
      <div
        v-if="isHovering"
        class="absolute left-0 top-0 -z-[2] h-full min-w-full bg-yellow px-[1rem]"
      />
    </Transition>
  </a>
</template>

<script lang="ts" setup>
import { useHover } from "../../features/hooks/useHover";
import { ILink } from "../../features/types/shared.types";

interface INavbarLInk {
  link: ILink;
}

const { link } = defineProps<INavbarLInk>();

const { isHovering, onHover, onUnhover } = useHover();
</script>

<style lang="scss" scoped>
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