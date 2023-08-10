<template>
  <WidgetsCabinetCabinetItemList
    :card-list="{ type: ECabinetCardsTypes.PROJECT, items: clips ?? [] }"
    class="mb-[7.6rem]"
    title="My projects"
  />

  <WidgetsCabinetCabinetItemList :card-list="templatesCardList" title="Templates" />
</template>

<script lang="ts" setup>
import { ITemplate } from "~/src/entities/cabinet/TemplateCard/template-card.types";
import { ECabinetCardsTypes, ICardList } from "~/src/entities/cabinet/cabinet-cards.types";
import { useVideoApi } from "~/src/features/cabinet/model/useVideoApi";

const { getAllClips } = useVideoApi();

const { data: clips } = await useLazyAsyncData("projects", () => getAllClips());

const templates: ITemplate[] = [
  {
    img: "/img/cabinet/template-prev.png",
    title: "Summer Chill",
    text: "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
  },
];

const templatesCardList: ICardList = {
  type: ECabinetCardsTypes.TEMPLATE,
  items: templates,
};
</script>

<style lang="scss" scoped></style>