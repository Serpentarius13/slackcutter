<template>
  <WidgetsCabinetVideoEditorVideoEditorSidepanel>
    <div>
      <SharedUiButton :theme="ButtonThemes.outlineYellow" class="!w-full mb-[2rem]">
        Regenerate
      </SharedUiButton>
      <p class="text-small text-white opacity-70">
        You can regenerate your clip if you don't like it or want to try new music
      </p>
    </div>

    <div>
      <SharedUiItemMenu :items="menuItems" class="!bg-opacity-10 mb-[2.4rem]" />
      <SharedUiButton :theme="ButtonThemes.blue" class="!w-full" @click="videoStore.downloadClip">
        <div class="grid grid-cols-[0.9fr_0.1fr] gap-[1.4rem] items-center w-full">
          <span class="text-medium font-bold text-white"> Export </span>

          <NuxtIcon :filled="true" name="main/pacman" />
        </div>
      </SharedUiButton>
    </div>
  </WidgetsCabinetVideoEditorVideoEditorSidepanel>
</template>

<script lang="ts" setup>
import { ButtonThemes } from "~/src/shared/ui/Button/buttonThemes";
import { useVideoEditor } from "~/stores/useVideoEditor";
import { EItemMenuRender, IItemMenuOption } from "~/src/shared/ui/ItemMenu/item-menu.types";
import { shareToFacebook } from "~/src/shared/lib/fb";

interface IVideoEditorSidepanelStepsExportProps {}

defineProps<IVideoEditorSidepanelStepsExportProps>();

const videoStore = useVideoEditor();

const menuItems: IItemMenuOption[] = [
  {
    img: { imgSource: "/icons/social/facebook-yellow.svg", imgAlt: "Yellow Facebook icon" },
    text: "Export to Facebook",
    leftRenderType: EItemMenuRender.ARROW,
    action: () => shareToFacebook({ href: "google.com" }),
  },
];
</script>

<style lang="scss" scoped></style>