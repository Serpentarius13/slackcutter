<template>
  <Teleport to="body">
    <Transition name="modalFade">
      <div
        class="modal-wrapper"
        @click.self="closeModal"
        v-if="store.modalState?.component"
      >
        <div>
          <component
            :is="{ ...store.modalState?.component }"
            v-bind="store.modalState?.props"
          />
        </div>
      </div>
    </Transition>
    <button
      class="fixed right-[2rem] top-[2rem] z-[501]"
      @click="store.closeModal"
      v-if="store.modalState?.component"
    >
      <NuxtIcon name="main/cross" />
    </button>
  </Teleport>
</template>

<script setup lang="ts">
import { useEventListener } from "~/src/shared/features/hooks/useEventListener";
import useModalStore from "~/stores/useModalStore";

const store = useModalStore();

//* Function with commit to be closing modal
const closeModal = () => {
  store.closeModal();
};

const handleKeyEscape = (event: KeyboardEvent) => {
  if (event.key === "Escape") closeModal();
};

useEventListener(document, "keydown", handleKeyEscape);
</script>

<style lang="scss" scoped>
.modal {
  &-wrapper {
    position: fixed;
    width: 100vw;
    height: 100vh;
    @apply bg-black bg-opacity-20;

    left: 0;
    top: 0;
    z-index: 500;

    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.modalFade-enter-active,
.modalFade-leave-active {
  transition: all 0.15s ease-out;
}

.modalFade-enter-from,
.modalFade-leave-to {
  opacity: 0;
  transform: translateY(7rem);
}
</style>
