<template>
  <ul
    class="rounded-medium-small bg-white bg-opacity-20 p-[2.7rem] backdrop-blur-[12px]"
  >
    <li v-for="option in items" :key="option.text">
      <button
        class="group flex w-full justify-between border-b-2 border-black border-opacity-[6%] py-[2.7rem] first:pt-[0] last:pb-[0]"
      >
        <figure class="flex items-center gap-[1.6rem]">
          <NuxtIcon
            :name="option.iconName"
            class="aspect-square w-[3.5rem] text-yellow"
          />

          <span class="text-medium text-white">
            {{ option.text }}
          </span>
        </figure>

        <div
          class="text-small rounded-[6rem] bg-blue px-[1.2rem] py-[1.4rem] text-white transition-all group-hover:-translate-y-[1rem]"
          v-if="option.leftRenderType === EItemMenuRender.BUTTON"
        >
          Connect
        </div>

        <NuxtIcon
          name="gt"
          class="text-white opacity-40 transition-all group-hover:opacity-100"
          v-else-if="option.leftRenderType === EItemMenuRender.ARROW"
        />
      </button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { EItemMenuRender } from "./item-menu.types";
import { IItemMenuOption } from "./item-menu.types";

interface IItemMenu {
  items: IItemMenuOption[];
}

defineProps<IItemMenu>();
</script>

<style scoped lang="scss"></style>
