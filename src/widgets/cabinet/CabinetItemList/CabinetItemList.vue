<template>
  <section class="flex flex-col gap-[3.6rem]">
    <h2 class="heading-medium text-white">
      {{ title }}

      <span class="opacity-30 transition-all hover:opacity-100">
        &#40;{{ cardList.items.length }}&#41;
      </span>
    </h2>

    <SharedUiSwiper
      :slides="cardList.items"
      v-slot="{ slide }"
      :has-navigation="true"
      :options="{ slidesPerView: 'auto', spaceBetween: 18 }"
      class="swiper"
    >
      <EntitiesCabinetProjectCard
        v-if="cardList.type === ECabinetCardsTypes.PROJECT"
        :project="slide"
      />

      <EntitiesCabinetTemplateCard
        v-else-if="cardList.type === ECabinetCardsTypes.TEMPLATE"
        :template="slide"
      />
    </SharedUiSwiper>
  </section>
</template>

<script setup lang="ts">
import {
  ECabinetCardsTypes,
  ICardList,
} from "~/src/entities/cabinet/cabinet-cards.types";

interface ICabinetItemList {
  cardList: ICardList;
  title: string;
}

defineProps<ICabinetItemList>();
</script>

<style scoped lang="scss">
.swiper {
  overflow: visible;
}
:global(.swiper-slide) {
  margin: 0;
  width: fit-content;
}
</style>
