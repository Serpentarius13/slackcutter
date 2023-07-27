<template>
  <section class="relative flex flex-col items-center">
    <Transition mode="out-in" name="fade">
      <FeaturesAuthRegistrationStart
        v-if="step === 1"
        class="mb-[5.7rem]"
        @data="handleRegisterStart"
      />
      <FeaturesAuthConfirmEmailForm
        v-else-if="step === 2"
        :email="email"
        @complete="handleConfirmCode"
        @send-sms="handleSendSms"
      />
      <FeaturesAuthPersonalInfoForm
        v-else-if="step === 3"
        @data="handleRegisterComplete"
      />
    </Transition>

    <EntitiesAuthAuthSocialButtons />
  </section>
</template>

<script lang="ts" setup>
import { useSteps } from "~/src/shared/features/hooks/useSteps";
import { useAuth } from "~/src/features/auth/model/useAuth";
import {
  TRegisterCompleteData,
  TRegisterData,
} from "~/src/features/auth/types/auth.types";
import { useUserStore } from "~/stores/useUserStore";

import { useToast } from "vue-toastification/dist/index.mjs";

const { step, incStep } = useSteps();

const email = ref<string>("");

const {
  apiStartRegister,

  apiSendConfirmationCode,
  apiResendEmailCode,
} = useAuth();

const userStore = useUserStore();

const router = useRouter();

const handleRegisterStart = (data: TRegisterData) => {
  console.log(data);
  apiStartRegister(data).then(() => {
    incStep();
    email.value = data.email;
  });
};

const handleConfirmCode = (data: TConfirmationCodeData) => {
  apiSendConfirmationCode({ ...data, code: "1234" }).then(() => incStep());
};

const handleSendSms = () => {
  apiResendEmailCode({ email: email.value });
};

const handleRegisterComplete = (data: TRegisterCompleteData) => {
  userStore.completeRegister(data).then(() => {
    router.push("/cabinet");
  });
};

onMounted(() => {
  const toast = useToast();
  toast.success("ss");
});
</script>

<style lang="scss" scoped></style>