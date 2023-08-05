<template>
  <section class="container grid-cols-[0.6fr_0.4fr] grid gap-[2.5rem]">
    <div class="grid grid-rows-[0.9fr_0.1fr] gap-[2.4rem] p-[3.2rem] rounded-[2.5rem] container-bg">
      <SharedUiVideo
        class="w-full h-full aspect-square"
        video-url="https://www.youtube.com/watch?v=5L2nfQvzGPI"
      />

      <SharedUiItemMenu :items="[addMusicOption]" class="!bg-opacity-10" />
    </div>

    <WidgetsCabinetVideoEditorSidepanel />
  </section>
</template>

<script lang="ts" setup>
import { EItemMenuRender, IItemMenuOption } from "~/src/shared/ui/ItemMenu/item-menu.types";
import { promptFileDialog } from "~/src/shared/features/utils/promptFileDialog";

interface IVideoEditorProps {}

defineProps<IVideoEditorProps>();

const promptAudioFile = () => {
  promptFileDialog();
};

const addMusicOption: IItemMenuOption = {
  img: { imgSource: "/icons/other/link-yellow.svg", imgAlt: "Yellow link icon" },
  text: "Select Music",
  leftRenderType: EItemMenuRender.PLUS,
  action: promptAudioFile,
};
</script>

<style lang="scss" scoped></style>