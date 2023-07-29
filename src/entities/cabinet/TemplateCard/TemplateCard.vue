<template>
  <figure
    class="group/card grid min-h-[27rem] grid-cols-2 justify-start gap-[3.2rem] lg:gap-[2rem] lg:p-[1rem] rounded-medium border-[1px] border-white border-opacity-70 bg-white bg-opacity-[8%] p-[1.8rem] backdrop-blur-[8.2rem]"
  >
    <NuxtImg
      :alt="`Image of template ${template.title}`"
      :src="template.img"
      class="bordered h-full max-h-[23.4rem] w-full rounded-smaller object-cover"
    />

    <div class="flex h-full w-full flex-col justify-between">
      <h4 class="heading-small text-white">
        {{ template.title }}
      </h4>

      <p class="text-small max-w-[24.3rem] text-white opacity-70">
        {{ template.text }}
      </p>

      <EntitiesCabinetCreateProjectBtn
        class="opacity-0 group-hover/card:opacity-100 md:!hidden"
        @click="openTemplateModal"
      >
        Use for New project
      </EntitiesCabinetCreateProjectBtn>
    </div>

    <EntitiesCabinetCreateProjectBtn
      class="!w-full !hidden md:!block col-span-2"
      @click="openTemplateModal"
    >
      Use for New project
    </EntitiesCabinetCreateProjectBtn>
  </figure>
</template>

<script lang="ts" setup>
import { ITemplate } from "./template-card.types";
import useModalStore from "~/stores/useModalStore";

interface IProjectCard {
  template: ITemplate;
}

const props = defineProps<IProjectCard>();

const modalStore = useModalStore();

const openTemplateModal = () => {
  modalStore.openInitModal({
    title: props.template.title,
    backgroundImage: {
      imgSource: props.template.img,
      imgAlt: `Preview image of ${props.template.title} template`,
    },
    optimizedFor: [
      { imgSource: "/icons/social/youtube.svg", imgAlt: "Youtube icon" },
      { imgSource: "/icons/social/tiktok.svg", imgAlt: "Tiktok icon" },
      { imgSource: "/icons/social/insta.svg", imgAlt: "Instagram icon" },
    ],
    text: "loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem",
  });
};
</script>

<style lang="scss" scoped>
.bordered {
  border-bottom-right-radius: 5.3rem;
}
</style>