<template>
  <SharedUiAuthFormSkeleton @submit.prevent="onSubmit">
    <SharedUiInputText
      placeholder="Your email"
      v-model="email"
      :error="errors.email"
    />

    <SharedUiAuthButton> Create account</SharedUiAuthButton>
    <p class="text-small w-full text-center text-black opacity-[40%]">
      By registering, you confirm that you have read and agreed to the Terms of
      Policy
    </p>
  </SharedUiAuthFormSkeleton>
</template>

<script setup lang="ts">
import { registerSchema } from "~/src/shared/features/hooks/auth.types";

const { handleSubmit, errors } = useForm({
  validationSchema: toTypedSchema(registerSchema),
});

const { value: email } = useField("email");

const onSubmit = handleSubmit((values) => {
  console.log(values);
});
</script>

<style scoped lang="scss"></style>
