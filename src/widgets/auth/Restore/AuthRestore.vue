<template>
  <section class="relative flex max-w-[41.4rem] flex-col w-full">
    <Transition mode="out-in" name="fade">
      <div v-if="step === 1">
        <h2 class="heading-big mb-[3.2rem]">Password recovery</h2>
        <p class="text-medium w-full text-black opacity-70 mb-[5.7rem]">
          Enter your email account to reset password
        </p>
        <FeaturesAuthRegistrationStart btn-text="Reset" @data="handleStartRestore" />
      </div>

      <FeaturesAuthConfirmEmailForm
        v-else-if="step === 2"
        :email="email"
        @complete="handleConfirmCode"
        @send-sms="handleSendSms"
      />

      <div v-else-if="step === 3" class="flex items-center flex-col">
        <h2 class="heading-big pb-[3.2rem]">Reset your password</h2>
        <div class="mb-[5.7rem] w-full flex justify-center">
          <p class="text-medium max-w-[24.5rem] text-center text-black opacity-70">
            The password must be different than before
          </p>
        </div>

        <FeaturesAuthPasswordResetForm @data="handleCompleteRestore" />
      </div>
    </Transition>
  </section>
</template>

<script lang="ts" setup>
import { useSteps } from "~/src/shared/features/hooks/useSteps";
import { useAuth } from "~/src/features/auth/model/useAuth";
import { TPasswordRestoreSchema, TRegisterData } from "~/src/features/auth/types/auth.types";

import { useToast } from "vue-toastification/dist/index.mjs";
import useModalStore from "~/stores/useModalStore";
import { useLeftImage } from "~/stores/useLeftImage";

const { step, incStep } = useSteps();

const toast = useToast();

const email = ref<string>("");
const code = ref<string>("");

const {
  apiStartPasswordRecover,
  apiSendConfirmationCodeForPasswordRestoring,
  apiFinishPasswordRecover,
} = useAuth();

const modalStore = useModalStore();

const leftImgStore = useLeftImage();

const router = useRouter();

const handleStartRestore = (data: TRegisterData) => {
  apiStartPasswordRecover(data).then(() => {
    leftImgStore.setCode();
    incStep();
    email.value = data.email;
  });
};

const handleConfirmCode = (data: TConfirmationCodeData) => {
  apiSendConfirmationCodeForPasswordRestoring({ ...data, code: "1234" }).then(() => {
    leftImgStore.setRestoreStepThree();
    incStep();
    code.value = "1234";
  });
};

const handleSendSms = () => {
  toast.success("Sms sent");
};

const handleCompleteRestore = (data: TPasswordRestoreSchema) => {
  const dto: TPasswordRestoreDTO = {
    new_password: data.password,
    code: code.value,
    email: email.value,
  };

  apiFinishPasswordRecover(dto).then(() => {
    modalStore.openSuccessModal({
      title: "You have successfully reset your password",
      buttonText: "Continue",
      action: () => {
        router.push("/auth/login");
        modalStore.closeModal();
      },
    });
  });
};
</script>

<style lang="scss" scoped></style>