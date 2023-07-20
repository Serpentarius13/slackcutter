<template>
  <form
    class="flex max-w-[41.4rem] flex-col gap-[3.6rem]"
    @submit.prevent="handleSubmit"
  >
    <div class="flex flex-col gap-[2.2rem]">
      <CommonInputText
        placeholder="Ваш емейл"
        v-model="email"
        :error="errors.email"
      />
      <CommonInputText
        placeholder="Пароль"
        type="password"
        v-model="password"
        :error="errors.password"
      />
    </div>

    <NuxtLink
      class="text-small text-black underline opacity-50 hover:opacity-100"
    >
      Forgot Password?
    </NuxtLink>

    <SharedUiButton
      :theme="ButtonThemes.yellow"
      :style="ButtonStyles.unshadowed"
      class="h-[6.6rem] w-full font-bold"
    >
      Sign In
    </SharedUiButton>
  </form>
</template>

<script setup lang="ts">
import { z } from "zod";
import { loginSchema } from "~/src/features/types/auth.types";
import {
  ButtonStyles,
  ButtonThemes,
} from "~/src/shared/ui/Button/buttonThemes";

const { handleSubmit, errors } = useForm({
  validationSchema: toTypedSchema(loginSchema),
});

const { value: email } = useField("email");
const { value: password } = useField("password");

const onSubmit = handleSubmit((values) => {
  console.log(values);
});
</script>

<style scoped lang="scss"></style>
