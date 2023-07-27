<template>
  <EntitiesAuthFormSkeleton @submit.prevent="onSubmit">
    <SharedUiInputText
      v-model="email"
      :error="errors.email"
      placeholder="Your email"
    />

    <EntitiesAuthAuthButton> Create account</EntitiesAuthAuthButton>
    <p class="text-small w-full text-center text-black opacity-[40%]">
      By registering, you confirm that you have read and agreed to the Terms of
      Policy
    </p>
  </EntitiesAuthFormSkeleton>
</template>

<script lang="ts" setup>
import {
  registerSchema,
  TRegisterData,
} from "~/src/features/auth/types/auth.types";

const { handleSubmit, errors } = useForm({
  validationSchema: toTypedSchema(registerSchema),
});

const { value: email } = useField("email");

const emit = defineEmits<{ data: [loginData: TRegisterData] }>();

const onSubmit = handleSubmit((values) => {
  emit("data", values);
});
</script>

<style lang="scss" scoped></style>