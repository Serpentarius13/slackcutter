<template>
  <form class="flex flex-col justify-between h-full" @submit.prevent="onSubmit">
    <div class="flex w-full flex-col gap-[2.2rem]">
      <label
        class="w-[10.9rem] aspect-square block rounded-full group relative bg-red-500 cursor-pointer"
      >
        <input class="hidden" type="file" />

        <!--      <NuxtImg class="w-full h-full object-cover" />-->

        <div
          class="gradiented rounded-full absolute left-0 top-0 w-full h-full flex items-center justify-center group-hover:opacity-100 transition-all opacity-0"
        >
          <NuxtIcon name="main/camera" />
        </div>
      </label>
      <SharedUiInputGroup title="E-mail">
        <SharedUiInputText
          v-model="emailField"
          :error="errors.email"
          placeholder="a@reformat.digital"
        />
      </SharedUiInputGroup>
      <SharedUiInputGroup title="New password">
        <SharedUiInputText
          v-model="password"
          :error="errors.password"
          placeholder="Enter New Password"
          type="password"
        />

        <SharedUiInputText
          v-model="confirmPassword"
          :error="errors.confirmPassword"
          placeholder="Confirm New Password"
          type="password"
        />
      </SharedUiInputGroup>
    </div>

    <EntitiesAuthAuthButton class="mt-[5.9rem]" is-unhovering> Save</EntitiesAuthAuthButton>
  </form>
</template>

<script lang="ts" setup>
import { TPasswordRestoreSchema } from "~/src/features/auth/types/auth.types";
import { profileDataFormSchema } from "~/src/features/cabinet/ProfileDataForm/profile-data-form.types";

interface IProfileDataForm {
  email: string;
  avatarUrl: string;
}

const props = defineProps<IProfileDataForm>();

const { handleSubmit, errors } = useForm({
  validationSchema: toTypedSchema(profileDataFormSchema),
  initialValues: { email: props.email },
});

const { value: password } = useField("password");
const { value: confirmPassword } = useField("confirmPassword");
const { value: emailField } = useField("email");

const emit = defineEmits<{ data: [loginData: TPasswordRestoreSchema] }>();

const onSubmit = handleSubmit((values) => {
  emit("data", values);
});
</script>

<style lang="scss" scoped></style>