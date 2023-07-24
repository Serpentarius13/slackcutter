<template>
  <WidgetsCabinetCabinetItemList
    title="My projects"
    :card-list="projectsCardList"
    class="mb-[7.6rem]"
  />

  <WidgetsCabinetCabinetItemList
    title="Templates"
    :card-list="templatesCardList"
  />
</template>

<script setup lang="ts">
import { IProject } from "~/src/entities/cabinet/ProjectCard/project-card.types";
import { ITemplate } from "~/src/entities/cabinet/TemplateCard/template-card.types";
import {
  ECabinetCardsTypes,
  ICardList,
} from "~/src/entities/cabinet/cabinet-cards.types";

const projects: IProject[] = [
  {
    img: "/img/home/home-ghost.png",
    title: "Summer Chill",
    duration: "0:45",
    lastUpdate: new Date().toUTCString().toString(),
  },
  {
    img: "/img/home/home-ghost.png",
    title: "Summer Chill",
    duration: "0:45",
    lastUpdate: new Date().toUTCString().toString(),
  },
  {
    img: "/img/home/home-ghost.png",
    title: "Summer Chill",
    duration: "0:45",
    lastUpdate: new Date().toUTCString().toString(),
  },
  {
    img: "/img/home/home-ghost.png",
    title: "Summer Chill",
    duration: "0:45",
    lastUpdate: new Date().toUTCString().toString(),
  },
  {
    img: "/img/home/home-ghost.png",
    title: "Summer Chill",
    duration: "0:45",
    lastUpdate: new Date().toUTCString().toString(),
  },
];

const projectsCardList: ICardList = {
  type: ECabinetCardsTypes.PROJECT,
  items: projects,
};

const templates: ITemplate[] = [
  {
    img: "/img/cabinet/template-prev.png",
    title: "Summer Chill",
    text: "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
  },
  {
    img: "/img/cabinet/template-prev.png",
    title: "Summer Chill",
    text: "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
  },
  {
    img: "/img/cabinet/template-prev.png",
    title: "Summer Chill",
    text: "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
  },
  {
    img: "/img/cabinet/template-prev.png",
    title: "Summer Chill",
    text: "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
  },
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

<style scoped lang="scss"></style>
