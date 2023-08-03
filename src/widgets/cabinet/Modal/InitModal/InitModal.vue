<template>
  <WidgetsCabinetModalInitModalWrapper>
    <div class="relative max-w-full">
      <NuxtImg
        :alt="backgroundImage.imgAlt"
        :src="backgroundImage.imgSource"
        alt="Preview of modal"
        class="h-[34rem] max-w-full w-full object-cover rounded-t-medium-small lg:h-[25rem]"
      />

      <div class="gradiented h-[10rem] absolute bottom-0 left-0 w-full" />
    </div>

    <div class="gradiented-bottom p-[5.4rem] rounded-b-medium-small lg:p-[3rem] md:p-[1.4rem]">
      <div
        :style="isAnyMenuOpenedComputed ? { opacity: 0 } : { opacity: 1 }"
        class="flex items-end justify-between gap-y-[3rem] border-b-[1px] border-white pb-[4.2rem] lg:flex-col lg:items-start lg:gap-y-[1rem] lg:pb-[2rem] transition-all"
      >
        <div>
          <h2 class="heading-medium-small mb-[3.2rem] text-white lg:mb-[1.4rem]">{{ title }}</h2>
          <p class="text-small max-w-[33.5rem] text-white opacity-80 lg:max-w-full">
            Perfect for action sequences, sci-fi scenes, or any video that needs a little extra
            'wow' effect
          </p>
        </div>

        <div class="lg:flex lg:items-center lg:justify-between lg:w-full">
          <span class="text-small block mb-[2.9rem] uppercase opacity-[89%] lg:mb-[0]">
            Optimized for
          </span>

          <EntitiesCabinetVideoSocialList :socials="optimizedFor" />
        </div>
      </div>

      <EntitiesCabinetCreateProjectBtn
        class="mt-[4rem] w-full lg:mt-[2rem] md:mt-[1.4rem] z-[10]"
        @click="openMenu"
      >
        Create new project
      </EntitiesCabinetCreateProjectBtn>
      <Transition mode="out-in" name="fade">
        <div
          v-if="isAnyMenuOpenedComputed"
          class="w-full h-full transition-all bg-darkest-blue bg-opacity-[50%] left-0 top-0 absolute"
        >
          <Transition name="fade">
            <div v-if="isOpenedMenu">
              <div
                v-click-away="closeMenu"
                class="absolute left-1/2 -translate-x-1/2 w-[90%] bottom-[15rem]"
              >
                <SharedUiItemMenu :items="items" />
              </div>
            </div>

            <FeaturesCabinetFileFromLinkUploader
              v-else-if="isOpenedLinkMenu"
              v-click-away="closeLinkMenu"
              class="absolute bottom-0 left-0"
            />
          </Transition>
        </div>
      </Transition>
    </div>
  </WidgetsCabinetModalInitModalWrapper>
</template>

<script lang="ts" setup>
import { IInitModalProps } from "./init-modal.types";
import { EItemMenuRender, IItemMenuOption } from "~/src/shared/ui/ItemMenu/item-menu.types";
import { promptFileDialog } from "~/src/shared/features/utils/promptFileDialog";

defineProps<IInitModalProps>();

const isOpenedMenu = ref<boolean>(false);

const isOpenedLinkMenu = ref<boolean>(false);

const openMenu = () => (isOpenedMenu.value = true);
const closeMenu = () => (isOpenedMenu.value = false);
const openLinkMenu = () => {
  isOpenedMenu.value = false;
  isOpenedLinkMenu.value = true;
};

const closeLinkMenu = () => {
  isOpenedLinkMenu.value = false;
  isOpenedMenu.value = true;
};

const isAnyMenuOpenedComputed = computed(() => isOpenedLinkMenu.value || isOpenedMenu.value);

const items: IItemMenuOption[] = [
  {
    text: "Upload Video by Link",
    leftRenderType: EItemMenuRender.ARROW,
    img: { imgSource: "/icons/other/link-yellow.svg", imgAlt: "Link icon" },
    action: openLinkMenu,
  },
  {
    text: "Select from Gallery",
    leftRenderType: EItemMenuRender.ARROW,
    img: { imgSource: "/icons/other/export-yellow.svg", imgAlt: "Upload icon" },
    action: () => promptFileDialog((v) => console.log(v)),
  },
];
</script>

<style lang="scss" scoped>
.gradiented {
  background: linear-gradient(180deg, rgba(4, 7, 45, 0) 0%, #04072d 100%);
}

.gradiented-bottom {
  background: linear-gradient(to top, #0057ff 0%, #04072d);
}
</style>