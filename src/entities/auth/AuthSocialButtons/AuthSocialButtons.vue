<template>
  <div class="flex w-full flex-col items-center gap-[4.2rem]">
    <span class="text-small text-light-black"> or Continue With </span>

    <ul class="flex items-center gap-[1.2rem]">
      <li v-for="btn in socialButtons" :key="btn.icon">
        <EntitiesAuthAuthProviderButton
          :class="[btn.color]"
          :img-alt="btn.imgAlt"
          :img-source="btn.imgSource"
          @click="$emit(btn.name)"
        />
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { IImage } from "~/src/shared/features/types/shared.types";

interface IAuthSocialButton extends IImage {
  color: string;
  name: string;
}

const socialButtons: IAuthSocialButton[] = [
  {
    imgSource: "/icons/social/google.svg",
    imgAlt: "Google icon",
    color: "bg-dark-purple",
    name: "google",
  },

  {
    imgSource: "/icons/social/facebook.svg",
    imgAlt: "Facebook icon",
    color: "bg-dark-blue",
    name: "facebook",
  },

  {
    imgSource: "/icons/social/apple.svg",
    imgAlt: "Apple icon",

    color: "bg-black",
    name: "apple",
  },
];

const emit = defineEmits(["apple", "google", "facebook"]);
</script>

<style lang="scss" scoped></style>