<template>
  <div data-aos="fade-in" data-aos-duration="2000" data-aos-once="true">
    <div
      class="flex gap-[1.8rem] w-full container top-[2.8rem] -translate-x-1/2 absolute left-1/2 items-center"
    >
      <header
        :class="[
          'w-full container h-[6.6rem] border-[1px] border-white  flex items-center justify-end rounded-full bg-white  px-[6rem] py-[1.6rem] backdrop-blur-medium xl:px-[4rem] lg:px-[3rem]',
          opacityClassesComputed,
        ]"
      >
        <NuxtLink to="/">
          <SharedUiLogo class="absolute left-0 top-1/2 aspect-square w-[7.8rem] -translate-y-1/2" />
        </NuxtLink>

        <div class="flex items-center gap-[6rem] xl:gap-[4rem] lg:gap-[2.5rem] md:hidden">
          <SharedUiNavbarLinks :is-auth="isAuth" />
        </div>

        <NavbarMobileBurger :is-auth="isAuth" class="!hidden md:!flex" />
      </header>

      <SharedUiNavbarUserMenu
        v-if="user"
        :class="opacityClassesComputed"
        :logout="userStore.logout"
        :user="user"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import NavbarMobileBurger from "./NavbarMobileBurger.vue";
import { useUserStore } from "~/stores/useUserStore";
import { storeToRefs } from "pinia";

interface INavbar {
  isHomepage?: boolean;
}

const props = defineProps<INavbar>();

const userStore = useUserStore();

const isAuth = computed(() => userStore.isAuth && !userStore.isLoading);

const { user } = storeToRefs(userStore);

const opacityClassesComputed = computed<string>(() =>
  props.isHomepage
    ? "border-opacity-[3%] bg-opacity-[6%]"
    : "border-opacity-[12%] bg-opacity-[13%]",
);
</script>

<style lang="scss" scoped></style>