<template>
  <SharedUiNavbarLink
    v-for="(link, ix) in navLinks"
    :key="link.text"
    :class="['last:text-white', isAuth && ix === navLinks.length - 1 && '!hidden']"
    :link="link"
  />
</template>

<script lang="ts" setup>
import { TNavLink } from "../../features/types/shared.types";

interface INavbarLinks {
  isAuth: boolean;
}

defineProps<INavbarLinks>();

const emailContact = "hi@slackcutter.com";

const navLinks: TNavLink[] = [
  { text: "Why Slackcutter", link: "#about" },
  { text: "How it works", link: "#video" },
  { text: "Contact Us", link: `mailto:${emailContact}` },
  { text: "Try For Free", link: "/auth/login" },
];
</script>

<style lang="scss" scoped></style>