<template>
  <div class="relative">
    <div id="player" class="w-full h-full"></div>
    <Transition name="fade">
      <div
        class="shadowed absolute left-0 top-0 z-[120] flex h-full w-full items-center justify-center bg-black bg-opacity-40"
        v-if="!isVideoStarted"
      >
        <button
          class="flex items-center justify-center rounded-full bg-transparent p-[1.4rem] text-white ring-1 ring-white hover:ring-4"
          @click="startVideo"
        >
          <NuxtIcon name="video/play" />
        </button>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import pjs from "~/features/lib/pjs";

const props = defineProps<{ videoUrl: string}>();

const isVideoStarted = ref<boolean>(false);

function startVideo() {
  isVideoStarted.value = true;

  window.dispatchEvent(new Event("video-start"));
}

onMounted(() => {
  pjs.then(() => {
    //@ts-expect-error undefined variable
    const player = new Playerjs({
      id: "player",
      file: props.videoUrl,
      ready: "playerReady",
    });

    window.addEventListener("video-start", () => {
      player.api("play");
    });
  });
});
</script>

<style scoped lang="scss">
.shadowed {
  background: radial-gradient(
    ellipse at top,

    transparent 0%,
    rgba(0, 0, 0, 0.705) 70%
  );
}
</style>
