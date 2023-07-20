<template>
  <form class="flex w-full max-w-[34.9rem] flex-col gap-[5.7rem]">
    <p class="text-medium text-center opacity-70">
      Enter the code we sent to the a@reformat.digital
    </p>
    <div class="flex items-center justify-center gap-[1.9rem]">
      <SharedUiInputDigitCell
        v-for="i in 4"
        :key="i"
        :digit="getDigitByIndex(i)"
      />
    </div>

    <Transition name="fade">
      <SharedUiButton
        :theme="ButtonThemes.outline"
        v-if="isPossibleToSendAgain"
      >
        Send again
      </SharedUiButton>
      <p class="text-medium text-center opacity-70" v-else>
        Resend in {{ secondsLeft }} seconds
      </p>
    </Transition>

    <SharedUiAuthButton> Verify now </SharedUiAuthButton>
  </form>
</template>

<script setup lang="ts">
import { isDigit } from "~/src/shared/features/utils/isDigit";
import { ButtonThemes } from "~/src/shared/ui/Button/buttonThemes";

const SECONDS_LEFT = 30;

const str = ref<string>("");

const secondsLeft = ref<number>(SECONDS_LEFT);
const intervalRef = ref<NodeJS.Timeout | any>(null);

const isPossibleToSendAgain = computed<boolean>(() => !!intervalRef.value);

const emit = defineEmits<{ sendSms: [] }>();

const handleAddStr = (unparsed: string) => {
  if (isDigit(unparsed) && str.value.length < 4) {
    str.value += unparsed;
  }
};

const eventListener = (ev: KeyboardEvent) => {
  handleAddStr(ev.key);
};

const getDigitByIndex = (ix: number): number | null =>
  !!str.value[ix] ? parseFloat(str.value[ix]) : null;

const initCountDown = () => {
  intervalRef.value = setInterval(() => {
    if (secondsLeft.value === 0) {
      clearInterval(intervalRef.value);
      secondsLeft.value = SECONDS_LEFT;
      return;
    }
    secondsLeft.value--;
  }, 1000);
};

const handleSendSms = () => {
  if (isPossibleToSendAgain.value) {
    emit("sendSms");
    initCountDown();
  }
};

onMounted(() => {
  document.addEventListener("keydown", eventListener);
  initCountDown();
});

onUnmounted(() => {
  document.removeEventListener("keydown", eventListener);
});
</script>

<style scoped lang="scss"></style>
