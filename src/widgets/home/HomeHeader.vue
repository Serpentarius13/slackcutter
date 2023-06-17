<template>
  <section class="w-screen header" id="header">
    <div
      class="container flex flex-col justify-center items-center text-center"
    >
      <h1 class="heading-big">
        Don't have time to master <br />
        professional editing tools?
      </h1>

      <h2 class="text-big mt-[1.8rem]">
        <span class="text-light-gray">
          Meet the new AI-based tool for automatic creation of previews
        </span>

        <br />
        <span class="text-white">
          for you videos in Instagram Reels, TikToks and Vines
        </span>
      </h2>

      <div class="flex items-center gap-[2.2rem] mt-[4.2rem]">
        <SharedUiButton :theme="ButtonThemes.purple">
          Start Now
        </SharedUiButton>

        <SharedUiButton :theme="ButtonThemes.outline">
          <div class="flex items-center gap-[1rem]">
            <NuxtIcon name="main/play" />

            How it works
          </div>
        </SharedUiButton>
      </div>

      <NuxtImg
        src="/img/home/home-header.png"
        class="mt-[1.9rem] w-[60.5rem] h-[27rem] max-w-screen"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ButtonThemes } from "~/src/shared/ui/Button/buttonThemes";
</script>

<style scoped lang="scss">
.header {
  @apply w-screen min-h-[91.1rem];
}
</style>
