<template>
  <WidgetsCabinetVideoEditorVideoEditorSidepanel>
    <div class="">
      <header class="w-full">
        <div class="pr-[1rem] pb-[4.2rem] border-b-[1px] border-white border-opacity-[12%]">
          <h2 class="heading-medium-semi mb-[3.2rem]">VFX Video</h2>

          <p class="text-small text-white opacity-70">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolores ea ex placeat
            quo? Ad aspernatur delectus, error expedita fuga itaque iure laudantium nihil pariatur
            rem sunt totam unde vero.
          </p>
        </div>
      </header>

      <div class="pt-[4.2rem]">
        <h3 class="text-big text-white mb-[4.2rem]">Select preview duration</h3>

        <SharedUiTags :tags="videoDurationTags" />
      </div>
    </div>

    <SharedUiButton :theme="ButtonThemes.blue" class="!w-full" @click="makeVideoRecord">
      <div class="grid grid-cols-[0.9fr_0.1fr] gap-[1.4rem] items-center w-full">
        <span class="text-medium font-bold text-white"> Generate </span>

        <NuxtIcon :filled="true" name="main/pacman" />
      </div>
    </SharedUiButton>
  </WidgetsCabinetVideoEditorVideoEditorSidepanel>
</template>

<script lang="ts" setup>
import { ITag } from "~/src/shared/features/types/shared.types";
import { ButtonThemes } from "~/src/shared/ui/Button/buttonThemes";
import { useVideoEditor } from "~/stores/useVideoEditor";
import useModalStore from "~/stores/useModalStore";

interface IVideoEditorSidepanelStepGenerateProps {}

defineProps<IVideoEditorSidepanelStepGenerateProps>();

const modalStore = useModalStore();
const videoStore = useVideoEditor();

const router = useRouter();

const makeVideoRecord = () => {
  videoStore.makeVideoRecord().then(() => {
    modalStore.closeModal();

    router.push(`/editor/${videoStore.videoReceived.videoId}`);
  });
  modalStore.openLoadingModal();
};

const videoDurationTags: ITag[] = [
  { text: "30s", slug: "30" },
  { text: "1 min", slug: "60" },
  { text: "3 min", slug: "180" },
];
</script>

<style lang="scss" scoped></style>