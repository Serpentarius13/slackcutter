<template>
  <div class="flex w-full flex-col items-center gap-[4.2rem]">
    <span class="text-small text-light-black"> or Continue With </span>

    <nav class="flex items-center gap-[1.2rem]">
      <GoogleLogin :callback="handleGoogleCallback"></GoogleLogin>
    </nav>
  </div>
</template>

<script lang="ts" setup>
import { IImage } from "~/src/shared/features/types/shared.types";
import { CallbackTypes, decodeCredential, googleTokenLogin } from "vue3-google-login";

interface IAuthSocialButton extends IImage {
  color: string;
  name: string;
}

const googleBtn = {
  imgSource: "/icons/social/google.svg",
  imgAlt: "Google icon",
  color: "bg-dark-purple",
  name: "google",
};

const facebookBtn = {
  imgSource: "/icons/social/facebook.svg",
  imgAlt: "Facebook icon",
  color: "bg-dark-blue",
  name: "facebook",
};

const appleBtn = {
  imgSource: "/icons/social/apple.svg",
  imgAlt: "Apple icon",

  color: "bg-black",
  name: "apple",
};

const handleGoogleLogin = () => {
  googleTokenLogin().then((response) => {
    console.log("Handle the response", response);
  });
};
const handleGoogleCallback: CallbackTypes.CredentialCallback = async (res) => {
  const credentials = decodeCredential(res.credential);
};

const emit = defineEmits(["apple", "google", "facebook"]);
</script>

<style lang="scss" scoped></style>