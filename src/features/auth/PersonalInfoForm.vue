<template>
  <EntitiesAuthFormSkeleton class="items-center" @submit.prevent="onSubmit">
    <div class="w-full">
      <h3 class="text-medium pb-[1rem]">Personal Info</h3>
      <div class="flex w-full flex-col gap-[1rem]">
        <SharedUiInputText
          v-model="firstName"
          :error="errors.firstName"
          placeholder="First Name"
        />

        <SharedUiInputText
          v-model="lastName"
          :error="errors.lastName"
          placeholder="Last Name"
        />
      </div>
    </div>

    <div class="w-full">
      <h3 class="text-medium pb-[2.9rem]">Security</h3>
      <div class="flex w-full flex-col gap-[2.2rem]">
        <SharedUiInputText
          v-model="password"
          :error="errors.password"
          placeholder="Password"
          type="password"
        />

        <SharedUiInputText
          v-model="confirmPassword"
          :error="errors.confirmPassword"
          placeholder="Confirm password"
          type="password"
        />
      </div>
    </div>

    <NuxtLink
      class="text-small cursor-pointer text-black underline opacity-50 hover:opacity-100"
      to="/auth/restore"
    >
      Forgot Password?
    </NuxtLink>

    <EntitiesAuthAuthButton> Sign In</EntitiesAuthAuthButton>
  </EntitiesAuthFormSkeleton>
</template>

<script lang="ts" setup>
import {
  registerCompleteSchema,
  TRegisterCompleteData,
} from "~/src/features/auth/types/auth.types";

const { handleSubmit, errors } = useForm({
  validationSchema: toTypedSchema(registerCompleteSchema),
});

const { value: firstName } = useField("firstName");
const { value: lastName } = useField("lastName");

const { value: password } = useField("password");
const { value: confirmPassword } = useField("confirmPassword");

const emit = defineEmits<{ data: [loginData: TRegisterCompleteData] }>();

const onSubmit = handleSubmit((values) => {
  emit("data", values);
});
</script>

<style lang="scss" scoped></style>