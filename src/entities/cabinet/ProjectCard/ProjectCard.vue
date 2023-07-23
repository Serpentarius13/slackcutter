<template>
  <figure
    class="grid h-[17.3rem] grid-cols-2 justify-start gap-[3.2rem] rounded-medium border-[1px] border-white border-opacity-70 bg-white bg-opacity-[8%] p-[1.8rem] backdrop-blur-[8.2rem]"
  >
    <NuxtImg
      class="h-full w-full object-cover rounded-smaller"
      :src="project.img"
      :alt="`Preview of project ${project.title}`"
    />

    <div class="flex h-full flex-col justify-between">
      <h4 class="text-big text-white">
        {{ project.title }}
      </h4>

      <span
        class="text-smallest rounded-smallest bg-white bg-opacity-[6%] px-[0.6rem] py-[1.2rem] text-yellow mix-blend-luminosity"
      >
        {{ project.duration }}
      </span>

      <p class="text-smallest text-white">
        <span class="text-opacity-40"> Last update: </span>
        <span class="text-opacity-70"> {{ project.lastUpdate }} </span>
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
