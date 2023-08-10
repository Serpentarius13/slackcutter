<template>
  <!--  <ClientOnly>-->
  <!--    <SharedUiItemMenu :items="items" />-->
  <!--  </ClientOnly>-->

  <!--  <PacmanAnimation />-->

  <WidgetsCabinetModalProfileModal class="!h-fit fixed left-1/2 -translate-x-1/2 top-0" />
</template>

<script lang="ts" setup>
import { EItemMenuRender, IItemMenuOption } from "~/src/shared/ui/ItemMenu/item-menu.types";
import useModalStore from "~/stores/useModalStore";

const modalStore = useModalStore();

onMounted(() => {
  download("https://www.youtube.com/watch?v=LI_dzsMVN9Q", "abobus.mp4", "video/mp4").then((d) =>
    console.log(d),
  );
});

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