<template>
  <section class="container flex flex-col gap-[7.6rem]">
    <h2 class="heading-big mx-auto">Easy steps</h2>

    <ul class="flex flex-col gap-[2rem]">
      <li>
        <EntitiesHomeProgressStep :step="1" width="32.5%">
          Paste a link to your full-length video on YouTube or Vimeo <br />
          <span class="text-light-purple">(free)</span> or upload one from your
          phone
          <span class="text-light-purple">(subscription required)</span>
        </EntitiesHomeProgressStep>
      </li>

      <li>
        <EntitiesHomeProgressStep :step="2" width="48.3%">
          Specify a track on Spotify or choose one <br />
          from your playlist on the phone —
          <span class="text-light-purple">optional</span>
        </EntitiesHomeProgressStep>
      </li>
      <li>
        <EntitiesHomeProgressStep :step="3" width="100%">
          Choose a template — fpv, GoPro or streaming <br />

          <span class="flex items-center gap-[0.3rem]">
            and preview length (1-3 minutes) and click on
            <NuxtIcon name="main/pacman" class="rotate-[30deg] text-yellow" />
          </span>
        </EntitiesHomeProgressStep>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
