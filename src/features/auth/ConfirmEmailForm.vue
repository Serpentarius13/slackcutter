<template>
  <form
    class="flex w-full max-w-[34.9rem] flex-col items-center gap-[5.7rem]"
    @submit.prevent="$emit('sendSms')"
  >
    <p class="text-medium text-center opacity-70">
      Enter the code we sent to the {{ email || "placeholderemail@mail.ru" }}
    </p>
    <div class="flex items-center justify-center gap-[1.9rem]">
      <SharedUiInputDigitCell
        v-for="i in 4"
        :key="i"
        :digit="getDigitByIndex(i - 1)"
      />
    </div>

    <SharedUiButton
      :theme="ButtonThemes.purple"
      v-if="isPossibleToSendAgain"
      @click="handleSendSms"
    >
      Send again
    </SharedUiButton>
    <p class="text-medium text-center opacity-70" v-else>
      Resend in {{ secondsLeft }} seconds
    </p>

    <SharedUiAuthButton :disabled="str.length !== 4">
      Verify now
    </SharedUiAuthButton>
  </form>
</template>

<script setup lang="ts">
import { isDigit } from "~/src/shared/features/utils/isDigit";
import { ButtonThemes } from "~/src/shared/ui/Button/buttonThemes";

interface IConfirmEmailForm {
  email: string;
}

const props = defineProps<IConfirmEmailForm>();

const SECONDS_LEFT = 30;

const str = ref<string>("");

const secondsLeft = ref<number>(SECONDS_LEFT);
const intervalRef = ref<NodeJS.Timeout | any>(null);

const isPossibleToSendAgain = computed<boolean>(() => !intervalRef.value);

const emit = defineEmits<{
  complete: [info: { code: string; email: string }];
}>();

const handleAddStr = (unparsed: string) => {
  if (isDigit(unparsed)) {
    if (str.value.length >= 4) {
      removeOneLetter();
    }
    str.value = `${str.value}${unparsed}`;
  }
};

const removeOneLetter = () => {
  str.value = str.value.slice(0, str.value.length - 1);
};

const eventListener = (ev: KeyboardEvent) => {
  switch (ev.key) {
    case "Backspace":
      removeOneLetter();
    default:
      handleAddStr(ev.key);
  }
};

const getDigitByIndex = (ix: number): number | null =>
  !!str.value[ix] ? parseFloat(str.value[ix]) : null;

function initCountDown() {
  intervalRef.value = setInterval(() => {
    if (secondsLeft.value === 0) {
      clearInterval(intervalRef.value);
      secondsLeft.value = SECONDS_LEFT;
      return;
    }
    secondsLeft.value--;
  }, 1000);
}

function handleSendSms() {
  if (isPossibleToSendAgain.value) {
    console.log("sent sms");
    initCountDown();
  }
}

const handleComplete = () => {
  if (str.value.length === 4) {
    emit("complete", { code: str.value, email: props.email });
  }
};

onBeforeMount(() => {
  initCountDown();
});

onMounted(() => {
  document.addEventListener("keydown", eventListener);
});

onUnmounted(() => {
  document.removeEventListener("keydown", eventListener);
});
</script>

<style scoped lang="scss"></style>
