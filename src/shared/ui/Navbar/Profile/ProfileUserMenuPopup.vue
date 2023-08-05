<template>
  <div
    class="w-full flex flex-col -z-[2] items-start pt-[6rem] pb-[3rem] px-[3.4rem] rounded-[3rem] bg-darker-blue border-[1px] border-white border-opacity-[12%] last:border-none child:py-[2rem] text-small text-white first:pt-0 last:pb-0"
  >
    <button
      class="border-b-white border-b-[1px] w-full text-start border-opacity-20"
      @click="modalStore.openProfileModal"
    >
      Settings
    </button>

    <button @click="userStore.logout">Logout</button>
  </div>
</template>

<script lang="ts" setup>
import { useUserStore } from "~/stores/useUserStore";
import useModalStore from "~/stores/useModalStore";

const userStore = useUserStore();

const modalStore = useModalStore();
</script>

<style lang="scss" scoped></style>