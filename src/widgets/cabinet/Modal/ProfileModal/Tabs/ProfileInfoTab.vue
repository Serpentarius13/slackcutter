<template>
  <div class="w-full bg-white p-[2.2rem] 2xl:p-[3.2rem] rounded-[1.4rem]">
    <FeaturesCabinetProfileDataForm />
  </div>
</template>

<script lang="ts" setup>
interface IProfileInfoTabProps {}

defineProps<IProfileInfoTabProps>();

const email = ref<string>("");
</script>

<style lang="scss" scoped>
.gradiented {
  background:
    linear-gradient(0deg, rgba(9, 12, 49, 0.8) 0%, rgba(9, 12, 49, 0.8) 100%),
    lightgray 16.129px 9.478px / 70.405% 90.011% no-repeat;
}
</style>
