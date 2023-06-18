<template>
  <div data-aos="fade-in" data-aos-duration="2000">
    <header
      class="container absolute left-1/2 mt-[2.8rem] flex -translate-x-1/2 items-center justify-end rounded-full bg-white bg-opacity-[3%] px-[6rem] py-[1.6rem] backdrop-blur-medium xl:px-[4rem] lg:px-[3rem]"
    >
      <SharedUiLogo
        class="absolute left-0 top-1/2 aspect-square w-[7.8rem] -translate-y-1/2"
      />

      <div
        class="flex items-center gap-[6rem] xl:gap-[4rem] lg:gap-[2.5rem] md:hidden"
      >
        <SharedUiNavbarLinks />
      </div>

      <NavbarMobileBurger class="!hidden md:!flex" />
    </header>
  </div>
</template>

<script setup lang="ts">
import NavbarMobileBurger from "./NavbarMobileBurger.vue";
</script>

<style scoped lang="scss"></style>
