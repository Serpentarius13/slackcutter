<template>
  <label class="input" v-bind="$attrs">
    <input type="checkbox" v-model="isMenuShowing" />

    <span class="input__first" />

    <span class="input__second" />
  </label>

  <Teleport to="body">
    <Transition name="slide">
      <div
        class="fixed left-0 top-0 flex h-full w-full flex-col items-center justify-center gap-[2.4rem] bg-darkest-blue"
        role="dialog"
        v-if="isMenuShowing"
        @click.self="closeMenu"
      >
        <SharedUiNavbarLinks />

        <button class="absolute right-[2rem] top-[2rem]" @click="closeMenu">
          <NuxtIcon name="main/cross" class="aspect-square w-[4rem]" />
        </button></div
    ></Transition>
  </Teleport>
</template>

<script setup lang="ts">
const isMenuShowing = ref<boolean>(false);

const closeMenu = () => (isMenuShowing.value = false);
</script>

<style scoped lang="scss">
.slide-enter-from {
  transform: translateX(100%);
}

.slide-leave-to {
  transform: translateY(100%);
}

.slide-enter-active,
.slide-leave-active {
  transition: 0.25s ease all;
}

.input {
  @apply relative flex w-[5rem] cursor-pointer flex-col gap-[1rem];

  input {
    @apply hidden;
  }

  &__first {
    width: 65%;
  }

  &__second {
    width: 100%;
  }

  span {
    @apply rounded-sm border-[1px]  border-b-white;
  }
}
</style>
