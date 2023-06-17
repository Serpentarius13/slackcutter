<template>
  <nav class="flex items-center gap-[6rem]">
    <SharedUiNavbarLink
      v-for="link in navLinks"
      :link="link"
      :key="link.text"
    />
  </nav>
</template>

<script setup lang="ts">
import { TNavLink } from "../../features/types/shared.types";

const navLinks: TNavLink[] = [
  { text: "Why Slackcutter", link: "" },
  { text: "How it works", link: "" },
  { text: "Contact Us", link: "" },
  { text: "Try For Free", link: "" },
];
</script>

<style scoped lang="scss"></style>
