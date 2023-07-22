<template>
  <SharedUiAuthFormSkeleton @submit.prevent="onSubmit" class="items-center">
    <div class="w-full">
      <h3 class="text-medium pb-[1rem]">Personal Info</h3>
      <div class="flex w-full flex-col gap-[1rem]">
        <SharedUiInputText
          placeholder="First Name"
          v-model="firstName"
          :error="errors.firstName"
        />

        <SharedUiInputText
          placeholder="Last Name"
          type="password"
          v-model="lastName"
          :error="errors.lastName"
        />
      </div>
    </div>

    <div class="w-full">
      <h3 class="text-medium pb-[2.9rem]">Security</h3>
      <div class="flex w-full flex-col gap-[2.2rem]">
        <SharedUiInputText
          placeholder="Password"
          v-model="password"
          :error="errors.password"
        />

        <SharedUiInputText
          placeholder="Confirm password"
          type="password"
          v-model="confirmPassword"
          :error="confirmError || errors.confirmPassword"
        />
      </div>
    </div>

    <NuxtLink
      to="/auth/restore"
      class="text-small cursor-pointer text-black underline opacity-50 hover:opacity-100"
    >
      Forgot Password?
    </NuxtLink>

    <SharedUiAuthButton> Sign In </SharedUiAuthButton>
  </SharedUiAuthFormSkeleton>
</template>

<script setup lang="ts">
import { registerCompleteSchema } from "~/src/shared/features/hooks/auth.types";

const { handleSubmit, errors } = useForm({
  validationSchema: toTypedSchema(registerCompleteSchema),
});

const confirmError = ref<string>("");

const { value: firstName } = useField("firstName");
const { value: lastName } = useField("lastName");

const { value: password } = useField("password");
const { value: confirmPassword } = useField("confirmPassword");

watch(confirmPassword, () => {
  if (
    confirmPassword.value &&
    password.value &&
    confirmPassword.value !== password.value
  )
    confirmError.value = "Passwords dont match";
  else confirmError.value = "";
});

const onSubmit = handleSubmit((values) => {
  console.log(values);
});
</script>

<style scoped lang="scss"></style>
