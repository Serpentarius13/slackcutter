<template>
  <EntitiesAuthFormSkeleton @submit.prevent="onSubmit" class="items-center">
    <div class="flex w-full flex-col gap-[2.2rem]">
      <SharedUiInputText
        placeholder="New password"
        type="password"
        v-model="password"
        :error="errors.password"
      />

      <SharedUiInputText
        placeholder="Confirm password"
        v-model="confirmPassword"
        :error="errors.confirmPassword"
      />
    </div>

    <EntitiesAuthAuthButton> Confirm </EntitiesAuthAuthButton>
  </EntitiesAuthFormSkeleton>
</template>

<script setup lang="ts">
import { passwordRestoreSchema } from "~/src/shared/features/hooks/auth.types";

const { handleSubmit, errors } = useForm({
  validationSchema: toTypedSchema(passwordRestoreSchema),
});

const { value: password } = useField("password");
const { value: confirmPassword } = useField("confirmPassword");

const onSubmit = handleSubmit((values) => {
  console.log(values);
});
</script>

<style scoped lang="scss"></style>
