<template>
  <WidgetsCabinetModalInitModalWrapper>
    <div class="relative">
      <NuxtImg
        src="/img/cabinet/modal-prev.png"
        alt="Preview of modal"
        class="h-[34rem] w-full object-cover rounded-t-medium-small"
      />

      <div class="gradiented h-[10rem] absolute bottom-0 left-0 w-full" />
    </div>

    <div class="gradiented-bottom p-[5.4rem] rounded-b-medium-small">
      <div
        class="flex items-end justify-between gap-y-[3rem] border-b-[1px] border-white pb-[4.2rem]"
      >
        <div>
          <h2 class="heading-medium-small mb-[3.2rem] text-white">
            VFX Template
          </h2>
          <p class="text-small max-w-[33.5rem] text-white opacity-80">
            Perfect for action sequences, sci-fi scenes, or any video that needs
            a little extra 'wow' effect
          </p>
        </div>

        <div>
          <span class="text-small block mb-[2.9rem] uppercase opacity-[89%]">
            Optimized for
          </span>

          <EntitiesCabinetVideoSocialList :socials="socials" />
        </div>
      </div>

      <EntitiesCabinetCreateProjectBtn class="mt-[4rem] w-full">
        Create new project
      </EntitiesCabinetCreateProjectBtn>
    </div>
  </WidgetsCabinetModalInitModalWrapper>
</template>

<script setup lang="ts">
import { IVideoSocial } from "~/src/shared/ui/Socials/video-social.types";

const socials: IVideoSocial[] = [
  { iconName: "social/youtube" },
  { iconName: "social/tiktok" },
  { iconName: "social/insta" },
];
</script>

<style scoped lang="scss">
.gradiented {
  background: linear-gradient(180deg, rgba(4, 7, 45, 0) 0%, #04072d 100%);
}

.gradiented-bottom {
  background: linear-gradient(to top, #0057ff 0%, #04072d);
}
</style>
