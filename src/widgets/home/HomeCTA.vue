<template>
  <section class="container flex flex-col items-center gap-[6.4rem]">
    <img
      src="/img/home/home-ghost.png"
      alt="Yellow ghost from Pacman game"
      class="ghost"
    />

    <div class="flex flex-col items-center gap-[4.2rem]">
      <h2 class="heading-big max-w-[83.8rem] text-center">
        time to try new AI-based tool for automatic creation of previews for you
        videos in Instagram Reels, TikToks and Vines
      </h2>

      <SharedUiButton :theme="ButtonThemes.yellow" :style="ButtonStyles.unshadowed"> Start now </SharedUiButton>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ButtonThemes, ButtonStyles} from "~/src/shared/ui/Button/buttonThemes";
</script>

<style scoped lang="scss">
@keyframes ghosty {
  0% {
    transform: translateY(25%);
  }
  50% {
    transform: translateY(-25%);
  }

  100% {
    transform: translateY(25%);
  }
}

.ghost {
  animation: ghosty 4s linear infinite;
}
</style>
