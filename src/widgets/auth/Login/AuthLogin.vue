<template>
  <section class="relative flex flex-col items-center">
    <FeaturesAuthLoginForm class="mb-[5.7rem]" @data="handleLoginComplete" />

    <EntitiesAuthAuthSocialButtons />
  </section>
</template>

<script lang="ts" setup>
import { useUserStore } from "~/stores/useUserStore";
import { TLoginData } from "~/src/features/auth/types/auth.types";

const userStore = useUserStore();

const router = useRouter();

const handleLoginComplete = (data: TLoginData) => {
  userStore.login(data).then(() => {
    router.push("/cabinet");
  });
};
</script>

<style lang="scss" scoped></style>