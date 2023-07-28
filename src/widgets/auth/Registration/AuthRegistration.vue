<template>
  <section class="relative flex flex-col items-center w-full">
    <Transition mode="out-in" name="fade">
      <div v-if="step === 1" class="mb-[9.25rem]">
        <FeaturesAuthRegistrationStart class="mb-[5.7rem]" @data="handleRegisterStart" />
        <p class="text-small w-full text-center text-black opacity-[40%]">
          By registering, you confirm that you have read and agreed to the Terms of Policy
        </p>
      </div>

      <FeaturesAuthConfirmEmailForm
        v-else-if="step === 2"
        :email="email"
        @complete="handleConfirmCode"
        @send-sms="handleSendSms"
      />
      <FeaturesAuthPersonalInfoForm v-else-if="step === 3" @data="handleRegisterComplete" />
    </Transition>

    <EntitiesAuthAuthSocialButtons v-if="step === 1" />
  </section>
</template>

<script lang="ts" setup>
import { useSteps } from "~/src/shared/features/hooks/useSteps";
import { useAuth } from "~/src/features/auth/model/useAuth";
import { TRegisterCompleteData, TRegisterData } from "~/src/features/auth/types/auth.types";
import { useUserStore } from "~/stores/useUserStore";

import { useToast } from "vue-toastification/dist/index.mjs";
import useModalStore from "~/stores/useModalStore";
import { useLeftImage } from "~/stores/useLeftImage";

const { step, incStep } = useSteps();

const toast = useToast();

const email = ref<string>("");

const {
  apiStartRegister,

  apiSendConfirmationCode,
  apiResendEmailCode,
} = useAuth();

const userStore = useUserStore();
const modalStore = useModalStore();

const leftImgStore = useLeftImage();

const router = useRouter();

const handleRegisterStart = (data: TRegisterData) => {
  console.log(data);
  apiStartRegister(data).then(() => {
    leftImgStore.setCode();
    incStep();
    email.value = data.email;
  });
};

const handleConfirmCode = (data: TConfirmationCodeData) => {
  apiSendConfirmationCode({ ...data, code: "1234" }).then(() => {
    leftImgStore.setProfileSetup();
    incStep();
    code.value = "1234";
  });
};

const handleSendSms = () => {
  apiResendEmailCode({ email: email.value });
};

const handleRegisterComplete = (data: TRegisterCompleteData) => {
  userStore.completeRegister(data, email.value).then(() => {
    modalStore.openSuccessModal({
      title: "You have successfully registered",
      buttonText: "Continue",
      action: () => {
        router.push("/cabinet");
        modalStore.closeModal();
      },
    });
  });
};
</script>

<style lang="scss" scoped></style>