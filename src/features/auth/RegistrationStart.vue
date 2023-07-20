<template>
  <SharedUiAuthFormSkeleton @submit.prevent="onSubmit">
    <div class="flex flex-col gap-[2.2rem]">
      <CommonInputText
        placeholder="Your email"
        v-model="email"
        :error="errors.email"
      />
      <CommonInputText
        placeholder="Password"
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

    <SharedUiAuthButton> Sign In </SharedUiAuthButton>
  </SharedUiAuthFormSkeleton>
</template>

<script setup lang="ts">
import { loginSchema } from "~/src/features/types/auth.types";

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
