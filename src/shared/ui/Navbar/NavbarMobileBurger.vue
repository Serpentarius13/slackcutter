<template>
  <label class="input" v-bind="$attrs">
    <input v-model="isMenuShowing" type="checkbox" />

    <span class="input__first" />

    <span class="input__second" />
  </label>

  <Teleport to="body">
    <Transition name="slide">
      <div
        v-if="isMenuShowing"
        class="fixed left-0 top-0 flex h-full w-full flex-col items-center justify-center gap-[2.4rem] bg-darkest-blue z-[400] overflow-x-hidden"
        role="dialog"
        @click.self="closeMenu"
      >
        <SharedUiNavbarLinks :is-auth="isAuth" />

        <button class="absolute right-[2rem] top-[2rem]" @click="closeMenu">
          <NuxtIcon class="aspect-square w-[4rem]" name="main/cross" />
        </button>
      </div>
    </Transition>
  </Teleport>
</template>

<script lang="ts" setup>
interface INavbarMobileBurger {
  isAuth: boolean;
}

defineProps<INavbarMobileBurger>();
const isMenuShowing = ref<boolean>(false);

const closeMenu = () => (isMenuShowing.value = false);
</script>

<style lang="scss" scoped>
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
