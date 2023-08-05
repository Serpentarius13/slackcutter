<template>
  <section class="container-big grid-cols-[0.6fr_0.4fr] grid gap-[2.5rem]">
    <div class="grid grid-rows-[0.9fr_0.1fr] gap-[2.4rem] p-[3.2rem] rounded-[2.5rem] container-bg">
      <SharedUiVideo :video-url="videoStore.videoUrlLink" class="w-full h-full aspect-square" />

      <Transition mode="out-in" name="fade">
        <p
          v-if="videoStore.audioFile"
          class="text-big text-white p-[2rem] bg-dark-blue bg-opacity-40 rounded-big"
        >
          {{ videoStore.audioFile?.name }}
        </p>
        <SharedUiItemMenu v-else :items="[addMusicOption]" class="!bg-opacity-10" />
      </Transition>
    </div>

    <slot />
  </section>
</template>

<script lang="ts" setup>
import { EItemMenuRender, IItemMenuOption } from "~/src/shared/ui/ItemMenu/item-menu.types";
import { EFileTypes, promptFileDialog } from "~/src/shared/features/utils/promptFileDialog";
import { useVideoEditor } from "~/stores/useVideoEditor";

interface IVideoEditorProps {}

defineProps<IVideoEditorProps>();

const videoStore = useVideoEditor();

const handleAddAudioFile = (files: File[]) => {
  const audioFile = files[0];

  if (!audioFile) return;

  videoStore.setAudioFile(audioFile);
};

const promptAudioFile = () => {
  promptFileDialog(handleAddAudioFile, EFileTypes.AUDIO);
};

const addMusicOption: IItemMenuOption = {
  img: { imgSource: "/icons/other/link-yellow.svg", imgAlt: "Yellow link icon" },
  text: "Select Music",
  leftRenderType: EItemMenuRender.PLUS,
  action: promptAudioFile,
};
</script>

<style lang="scss" scoped></style>