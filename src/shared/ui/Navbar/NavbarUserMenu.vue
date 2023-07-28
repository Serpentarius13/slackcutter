<template>
  <div
    class="flex min-w-[25%] md:min-w-[40%] lg:gap-[1.2rem] md:gap-[1.4rem] h-[6.6rem] flex-1 items-center gap-[2.8rem] rounded-full border-[1px] bg-white border-white px-[0.9rem] py-[0.7rem] backdrop-blur-[17px]"
  >
    <a href="/cabinet">
      <NuxtImg
        class="w-[5.2rem] aspect-square rounded-full bg-blue-500 md:w-[4rem] lg:w-[4.5rem]"
        src="/img/home/home-ghost.png"
      />
    </a>

    <span class="text-small text-white overflow-ellipsis">
      {{ `${user.first_name} ${user.last_name}` }}
    </span>

    <button class="ml-auto mr-[1.4rem]" @click="logout">
      <NuxtIcon class="text-white w-[2.4rem] aspect-square" name="auth/logout" />
    </button>
  </div>
</template>

<script lang="ts" setup>
import { IUser } from "~/src/features/auth/types/auth.types";

interface INavbarUserMenu {
  user: IUser;
  logout: () => void;
}

defineProps<INavbarUserMenu>();
</script>

<style lang="scss" scoped></style>