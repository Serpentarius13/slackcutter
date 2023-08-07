<template>
  <section class="container-big grid-cols-[0.8fr_0.4fr] grid gap-[2.5rem] h-[75vh]">
    <div
      class="grid grid-rows-[0.99fr_0.01fr] gap-[2.4rem] p-[3.2rem] rounded-[2.5rem] container-bg"
    >
      <SharedUiVideo
        :key="`${videoStore.clipVideoLink} ${videoStore.videoUrlLink}`"
        :video-url="isClip ? videoStore.clipVideoLink : videoStore.videoUrlLink"
        class="aspect-video h-full max-w-full"
      />
      <Transition mode="out-in" name="fade">
        <p
          v-if="videoStore.audioFile"
          class="text-big text-white p-[2rem] bg-dark-blue bg-opacity-40 rounded-big mt-auto"
        >
          {{ videoStore.audioFile?.name }}
        </p>
        <SharedUiItemMenu v-else :items="[addMusicOption]" class="!bg-opacity-10 mt-auto" />
      </Transition>
    </div>

    <slot />
  </section>
</template>

<script lang="ts" setup>
import { EItemMenuRender, IItemMenuOption } from "~/src/shared/ui/ItemMenu/item-menu.types";
import { EFileTypes, promptFileDialog } from "~/src/shared/features/utils/promptFileDialog";
import { useVideoEditor } from "~/stores/useVideoEditor";

interface IVideoEditorProps {
  isClip?: boolean;
}

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