<template>
  <section class="header w-screen" id="header">
    <div
      class="container flex flex-col items-center justify-center text-center"
    >
      <h1
        class="heading-biggest"
        data-aos="rotate-in"
        :data-aos-delay="delayRightAfterStart"
        data-aos-once="true"
      >
        Don't have time to master <br />
        professional editing tools?
      </h1>

      <h2
        class="text-big mt-[1.8rem]"
        data-aos="rotate-in"
        :data-aos-delay="delayRightAfterStart"
        data-aos-once="true"
      >
        <span class="text-light-gray">
          Meet the new AI-based tool for automatic creation of previews
        </span>

        <br />
        <span class="text-white">
          for you videos in Instagram Reels, TikToks and Vines
        </span>
      </h2>

      <div
        class="mt-[4.2rem] flex items-center gap-[2.2rem] sm:flex-col"
        data-aos="fade-up"
        :data-aos-delay="delayRightAfterStart + 500"
        data-aos-once="true"
      >
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

      <img
        src="/img/home/home-header.webp"
        alt="Video editing is blocking Pacman's path to Ghost"
        class="mt-[1.9rem]"
        data-aos="rotate-in"
        data-aos-once="true"
        :data-aos-delay="delayRightAfterStart"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { delayRightAfterStart } from "~/src/shared/features/constants/aos.constants";
import { ButtonThemes } from "~/src/shared/ui/Button/buttonThemes";
</script>

<style scoped lang="scss">
.header {
  @apply min-h-[80rem] w-screen lg:min-h-0;
}
</style>
