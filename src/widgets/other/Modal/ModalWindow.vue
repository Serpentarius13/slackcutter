<template>
  <Teleport to="body">
    <Transition name="modalFade">
      <div
        v-if="store.modalState?.component"
        :style="store?.modalState?.options?.darkened ? { background: 'rgba(9, 9, 9, 0.92)' } : {}"
        class="modal-wrapper"
        @click.self="!store.modalState.options?.notClosableFromOutside && closeModal(true)"
      >
        <div>
          <component :is="{ ...store.modalState?.component }" v-bind="store.modalState?.props" />
        </div>
      </div>
    </Transition>
    <!--    <button-->
    <!--      v-if="store.modalState?.component"-->
    <!--      class="fixed right-[2rem] top-[2rem] z-[501]"-->
    <!--      @click="store.closeModal"-->
    <!--    >-->
    <!--      <NuxtIcon name="main/cross" />-->
    <!--    </button>-->
  </Teleport>
</template>

<script lang="ts" setup>
import { useEventListener } from "~/src/shared/features/hooks/useEventListener";
import useModalStore from "~/stores/useModalStore";

const store = useModalStore();

//* Function with commit to be closing modal
const closeModal = (fromClick: boolean) => {
  store.closeModal(fromClick);
};

const handleKeyEscape = (event: KeyboardEvent) => {
  if (event.key === "Escape") closeModal(true);
};

useEventListener(document, "keydown", handleKeyEscape);
</script>

<style lang="scss" scoped>
.modal {
  &-wrapper {
    @apply bg-black bg-opacity-40 w-screen h-screen fixed left-0 top-0 z-[500] flex items-center justify-center;
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