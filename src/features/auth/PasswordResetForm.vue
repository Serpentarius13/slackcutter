<template>
  <EntitiesAuthFormSkeleton class="items-center" @submit.prevent="onSubmit">
    <div class="flex w-full flex-col gap-[2.2rem]">
      <SharedUiInputText
        v-model="password"
        :error="errors.password"
        placeholder="New password"
        type="password"
      />

      <SharedUiInputText
        v-model="confirmPassword"
        :error="errors.confirmPassword"
        placeholder="Confirm password"
        type="password"
      />
    </div>

    <EntitiesAuthAuthButton> Confirm</EntitiesAuthAuthButton>
  </EntitiesAuthFormSkeleton>
</template>

<script lang="ts" setup>
import {
  passwordRestoreSchema,
  TPasswordRestoreSchema,
} from "~/src/features/auth/types/auth.types";

const { handleSubmit, errors } = useForm({
  validationSchema: toTypedSchema(passwordRestoreSchema),
});

const { value: password } = useField("password");
const { value: confirmPassword } = useField("confirmPassword");

const emit = defineEmits<{ data: [loginData: TPasswordRestoreSchema] }>();

const onSubmit = handleSubmit((values) => {
  emit("data", values);
});
</script>

<style lang="scss" scoped></style>