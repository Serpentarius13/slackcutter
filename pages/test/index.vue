<template>
  <ClientOnly>
    <SharedUiItemMenu :items="items" />
  </ClientOnly>
</template>

<script lang="ts" setup>
import { EItemMenuRender, IItemMenuOption } from "~/src/shared/ui/ItemMenu/item-menu.types";

const items: IItemMenuOption[] = [
  {
    text: "Share to TikTok",
    leftRenderType: EItemMenuRender.BUTTON,
    img: { imgSource: "/icons/social/tiktok-yellow.svg", imgAlt: "Tiktok icon" },
  },
  {
    text: "Instagram",
    leftRenderType: EItemMenuRender.BUTTON,
    img: { imgSource: "/icons/social/insta-yellow.svg", imgAlt: "Instagram icon" },
  },
  {
    text: "Facebook",
    leftRenderType: EItemMenuRender.BUTTON,
    img: { imgSource: "/icons/social/facebook-yellow.svg", imgAlt: "Facebook icon" },
  },
  {
    text: "Youtube",
    leftRenderType: EItemMenuRender.BUTTON,
    img: { imgSource: "/icons/social/youtube-yellow.svg", imgAlt: "Youtube icon" },
  },
  {
    text: "Export to Gallery",
    leftRenderType: EItemMenuRender.ARROW,
    img: { imgSource: "/icons/main/export-yellow.svg", imgAlt: "Export icon" },
  },
];
</script>

<style lang="scss" scoped></style>