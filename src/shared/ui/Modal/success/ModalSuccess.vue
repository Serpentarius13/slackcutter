<template>
  <div class="w-screen h-screen success-modal-wrapper flex justify-center items-center">
    <SharedUiModalSuccessModalContentsSuccess
      :action="action"
      :button-text="buttonText"
      :title="title"
    />
  </div>
</template>

<script lang="ts" setup>
import { IModalSuccessProps } from "~/src/shared/ui/Modal/success/modal-success.types";

defineProps<IModalSuccessProps>();
</script>

<style lang="scss" scoped>
.success-modal-wrapper {
  background: radial-gradient(circle at 25% 60%, #05082e 0%, #565871 100%, #1b1d40 100%) 0 100%/200%
    200%;
}
</style>