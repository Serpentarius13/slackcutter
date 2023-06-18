<template>
  <div class="flex items-center gap-[6rem]">
    <SharedUiNavbarLink
      v-for="link in navLinks"
      :link="link"
      :key="link.text"
      class="last:text-white"
    />
  </div>
</template>

<script setup lang="ts">
import { TNavLink } from "../../features/types/shared.types";

const emailContact = "hi@slackcutter.com"

const navLinks: TNavLink[] = [
  { text: "Why Slackcutter", link: "#about" },
  { text: "How it works", link: "#video" },
  { text: "Contact Us", link: `mailto:${emailContact}`},
  { text: "Try For Free", link: "#" },
];
</script>

<style scoped lang="scss"></style>
