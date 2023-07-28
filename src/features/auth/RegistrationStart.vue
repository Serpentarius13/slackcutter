<template>
  <EntitiesAuthFormSkeleton @submit.prevent="onSubmit">
    <SharedUiInputText v-model="email" :error="errors.email" placeholder="Your email" />

    <EntitiesAuthAuthButton> {{ btnText ?? "Create account" }}</EntitiesAuthAuthButton>
  </EntitiesAuthFormSkeleton>
</template>

<script lang="ts" setup>
import { registerSchema, TRegisterData } from "~/src/features/auth/types/auth.types";

interface IRegistrationStart {
  btnText?: string;
}

defineProps<IRegistrationStart>();

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