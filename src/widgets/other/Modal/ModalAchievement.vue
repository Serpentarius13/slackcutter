<template>
  <div
    class="flex flex-col gap-[3.5rem] rounded-semi-big bg-white px-[7.5rem] py-[4.4rem] items-center max-w-[44.2rem] sm:max-w-screen max-h-screen"
  >
    <div class="flex gap-[1.2rem] items-center">
      <NuxtIcon name="crown" class="text-[#FEC600]"/>
      <h3 class="text-[2.1rem]">Достижение выполнено</h3>
    </div>

    <figure class="flex flex-col gap-[2.6rem] items-center">
      <NuxtImg src="/img/achievements/1.png" width="200" height="200" />

      <h4 class="text-big text-center">Заполнить профиль более чем на 80%</h4>
    </figure>

    <div class="flex flex-col gap-[1rem] items-center">
      <span class="text-small pb-[1rem] uppercase tracking-[0.32px] opacity-25">
        Награда
      </span>

      <span class="text-[2rem]"> Промокод на 20% </span>

      <CommonButton variant="blue" size="medium">
        YDjux7JDM9KAuc
      </CommonButton>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
