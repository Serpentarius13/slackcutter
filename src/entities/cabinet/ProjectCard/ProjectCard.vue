<template>
  <figure
    class="grid h-[17.3rem] min-w-[45rem] grid-cols-2 items-stretch justify-start gap-[3.2rem] rounded-medium border-[1px] border-white border-opacity-70 bg-white bg-opacity-[8%] p-[1.8rem] backdrop-blur-[8.2rem]"
  >
    <NuxtImg
      :alt="`Preview of project ${project.video_name}`"
      class="max-h-[13.7rem] w-full rounded-smaller object-cover"
      src="/img/home/home-ghost.png"
    />

    <div class="flex h-full flex-col justify-between">
      <h4 class="text-big text-white">
        {{ project.video_name }}
      </h4>

      <span
        class="text-smallest rounded-smallest bg-white bg-opacity-[6%] pxy-[0.6rem] px-[1.2rem] text-yellow mix-blend-luminosity w-fit"
      >
        {{ getMinutesSeconds(project.properties.duration) }}
      </span>

      <p class="text-smallest text-white">
        <span class="opacity-[40%]"> Last update: </span>
        <br />
        <span class="opacity-[70%]"> yesterday </span>
      </p>
    </div>
  </figure>
</template>

<script lang="ts" setup>
import { IProjectApiData } from "./project-card.types";
import { getMinutesSeconds } from "../../../shared/features/utils/getHoursMinutesSeconds";

interface IProjectCard {
  project: IProjectApiData;
}

defineProps<IProjectCard>();
</script>

<style lang="scss" scoped></style>