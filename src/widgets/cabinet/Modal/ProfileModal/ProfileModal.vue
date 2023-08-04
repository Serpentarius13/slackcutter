<template>
  <div
    class="py-[3.4rem] px-[3.2rem] rounded-[2rem] bg-modal-bg relative w-[77.7rem] max-w-[90vw] min-h-[90vh] backdrop-blur-[107px]"
  >
    <h2 class="heading-smaller text-white mb-[3.5rem]">Settings</h2>

    <SharedUiTabsWrapper
      :button-classes="[
        'current:bg-gray current:opacity-100 rounded-[1.2rem] opacity-70 text-white transition-all py-[2rem] px-[2.95rem] text-medium w-full',
      ]"
      :nav-classes="['flex flex-col gap-[1.4rem] w-full']"
      class="grid grid-cols-[auto_1fr] gap-[2.2rem] h-full"
    >
      <SharedUiTabsItem title="Personal data">
        <WidgetsCabinetModalProfileModalTabsProfileInfoTab />
      </SharedUiTabsItem>

      <SharedUiTabsItem title="Integrations"> Integrations</SharedUiTabsItem>
    </SharedUiTabsWrapper>

    <SharedUiButtonModalButton
      class="absolute top-[3.2rem] right-[3.2rem] !bg-white !bg-opacity-20"
    />
  </div>
</template>

<script lang="ts" setup>
interface IProfileModalProps {}

defineProps<IProfileModalProps>();
</script>

<style lang="scss" scoped></style>
