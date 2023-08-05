<template>
  <div class="relative min-w-[25%]" @mouseenter="onHover" @mouseleave="onUnhover">
    <div
      class="relative md:min-w-[40%] h-[6.6rem] flex-1 rounded-full border-[1px] bg-white border-white px-[0.9rem] py-[0.7rem] backdrop-blur-[17px] z-[5]"
      v-bind="$attrs"
    >
      <div class="lg:gap-[1.2rem] md:gap-[1.4rem] flex items-center gap-[2.8rem]">
        <NuxtLink to="/cabinet">
          <NuxtImg
            class="w-[5.2rem] aspect-square rounded-full bg-blue-500 md:w-[4rem] lg:w-[4.5rem]"
            src="/img/home/home-ghost.png"
          />
        </NuxtLink>

        <span
          class="text-small text-white overflow-ellipsis max-w-[50%] overflow-hidden whitespace-nowrap block"
        >
          {{ `${user.first_name} ${user.last_name}` }}
        </span>

        <!--      <button class="ml-auto mr-[1.4rem]" @click="logout">-->
        <!--        <NuxtIcon class="text-white w-[2.4rem] aspect-square" name="auth/logout" />-->
        <!--      </button>-->
      </div>
    </div>
    <Transition name="fade">
      <SharedUiNavbarProfileUserMenuPopup
        v-if="isHovering"
        class="absolute top-[1px] -left-[1px] w-[99%] left-1/2 -translate-x-1/2 z-100"
      />
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { IUser } from "~/src/features/auth/types/auth.types";
import { useHover } from "~/src/shared/features/hooks/useHover";

interface INavbarUserMenu {
  user: IUser;
  logout: () => void;
}

const { isHovering, onUnhover, onHover } = useHover();

defineProps<INavbarUserMenu>();
</script>

<style lang="scss" scoped></style>