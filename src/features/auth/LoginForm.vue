<template>
  <EntitiesAuthFormSkeleton @submit.prevent="onSubmit" class="items-center">
    <div class="flex w-full flex-col gap-[2.2rem]">
      <SharedUiInputText
          placeholder="Your email"
          v-model="email"
          :error="errors.email"
      />

      <SharedUiInputText
          placeholder="Password"
          type="password"
          v-model="password"
          :error="errors.password"
      />
    </div>

    <NuxtLink
        to="/auth/restore"
        class="text-small cursor-pointer text-black underline opacity-50 hover:opacity-100"
    >
      Forgot Password?
    </NuxtLink>

    <EntitiesAuthAuthButton> Sign In</EntitiesAuthAuthButton>
  </EntitiesAuthFormSkeleton>
</template>

<script setup lang="ts">
import {loginSchema, TLoginData} from "~/src/features/auth/types/auth.types";

const {handleSubmit, errors} = useForm({
  validationSchema: toTypedSchema(loginSchema),
});

const {value: email} = useField("email");
const {value: password} = useField("password");


const emit = defineEmits<{ data: [loginData: TLoginData] }>()

const onSubmit = handleSubmit((values) => {
  emit('data', values)
});
</script>

<style scoped lang="scss"></style>
