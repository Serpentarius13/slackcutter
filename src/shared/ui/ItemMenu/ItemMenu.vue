<template>
  <ul class="rounded-medium-small bg-white bg-opacity-20 p-[2.7rem] backdrop-blur-[12px]">
    <li
      v-for="option in items"
      :key="option.text"
      class="py-[2.7rem] first:pt-[0] last:pb-[0] border-b-2 border-black border-opacity-[6%] last:border-0"
    >
      <button class="group flex w-full justify-between items-center">
        <figure class="flex items-center gap-[1.6rem]">
          <NuxtImg
            :alt="option.img.imgAlt"
            :src="option.img.imgSource"
            class="aspect-square w-[3.5rem]"
          />

          <span class="text-medium text-white">
            {{ option.text }}
          </span>
        </figure>

        <div
          v-if="option.leftRenderType === EItemMenuRender.BUTTON"
          class="text-small rounded-[6rem] bg-blue px-[1.2rem] h-[3.8rem] flex items-center text-white transition-all group-hover:-translate-y-[0.3rem] leading-[22.4px] font-semibold"
        >
          Connect
        </div>

        <NuxtIcon
          v-else-if="option.leftRenderType === EItemMenuRender.ARROW"
          class="text-white opacity-40 transition-all group-hover:opacity-100"
          name="main/gt"
        />
      </button>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { EItemMenuRender, IItemMenuOption } from "./item-menu.types";

interface IItemMenu {
  items: IItemMenuOption[];
}

defineProps<IItemMenu>();
</script>

<style lang="scss" scoped></style>