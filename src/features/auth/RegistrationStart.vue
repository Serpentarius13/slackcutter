<template>
  <EntitiesAuthFormSkeleton @submit.prevent="onSubmit">
    <SharedUiInputText v-model="email" :error="errors.email" placeholder="Your email" />

    <EntitiesAuthAuthButton> {{ btnText ?? "Create account" }}</EntitiesAuthAuthButton>
  </EntitiesAuthFormSkeleton>
</template>

<script lang="ts" setup>
import { emailSchema, TEmailData } from "~/src/shared/features/types/zod.types";

interface IRegistrationStart {
  btnText?: string;
}

defineProps<IRegistrationStart>();

const { handleSubmit, errors } = useForm({
  validationSchema: toTypedSchema(emailSchema),
});

const { value: email } = useField("email");

const emit = defineEmits<{ data: [loginData: TEmailData] }>();

const onSubmit = handleSubmit((values) => {
  emit("data", values);
});
</script>

<style lang="scss" scoped></style>