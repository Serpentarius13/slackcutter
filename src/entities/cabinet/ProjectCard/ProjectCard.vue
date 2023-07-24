<template>
  <figure
    class="grid h-[17.3rem] grid-cols-2 items-stretch justify-start gap-[3.2rem] rounded-medium border-[1px] border-white border-opacity-70 bg-white bg-opacity-[8%] p-[1.8rem] backdrop-blur-[8.2rem]"
  >
    <NuxtImg
      class="max-h-[13.7rem] w-full rounded-smaller object-cover"
      :src="project.img"
      :alt="`Preview of project ${project.title}`"
    />

    <div class="flex h-full flex-col justify-between">
      <h4 class="text-big text-white">
        {{ project.title }}
      </h4>

      <span
        class="text-smallest rounded-smallest bg-white bg-opacity-[6%] pxy-[0.6rem] px-[1.2rem] text-yellow mix-blend-luminosity w-fit"
      >
        {{ project.duration }}
      </span>

      <p class="text-smallest text-white">
        <span class="opacity-[40%]"> Last update: </span>
        <br />
        <span class="opacity-[70%]"> {{ project.lastUpdate }} </span>
      </p>
    </div>
  </figure>
</template>

<script setup lang="ts">
import { IProject } from "./project-card.types";

interface IProjectCard {
  project: IProject;
}

defineProps<IProjectCard>();
</script>

<style scoped lang="scss"></style>
