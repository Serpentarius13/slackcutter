<template>
  <section
    class="container relative flex flex-col items-center justify-center"
    v-bind="$attrs"
  >
    <button
      class="home-video group relative flex aspect-square w-[52.4rem] max-w-[95vw] items-center justify-center rounded-full"
      @click="
        modalStore.openIFrameModal('https://www.youtube.com/embed/q08E8A-LnA8')
      "
    >
      <div
        class="flex aspect-square w-[12.1rem] max-w-[30%] items-center justify-center rounded-full border-[1px] border-white backdrop-blur-medium transition-all group-hover:scale-105"
      >
        <NuxtIcon name="main/play-big" />
      </div>
    </button>

    <div
      class="tech-grid absolute -bottom-[11rem] h-[17.5rem] w-screen "
      data-aos="fade-in"
      data-aos-duration="1000"
    />
  </section>
</template>

<script setup lang="ts">
import useModalStore from "~/stores/useModalStore";

const modalStore = useModalStore();
</script>

<style scoped lang="scss">
.home-video {
  background: url("/img/home/home-video.webp") 0 0 / cover no-repeat;

  div {
    background: rgba(217, 217, 217, 0.3);
  }

  &::after {
    @apply absolute left-0 top-0 -z-[2]  h-[99%] w-[99%]  rounded-full;
    content: "";

    background-repeat: no-repeat;
    background-size: 50% 50%, 50% 50%;
    background-position: 0 0, 100% 0, 100% 100%, 0 100%;
    background-image: linear-gradient(transparent, transparent),
      linear-gradient(transparent, transparent),
      linear-gradient(transparent, transparent),
      linear-gradient(#ffda00, #ffda00);

    animation: rotate 5s linear infinite;
  }
}

.tech-grid {
  background: url("/img/home/home-video-grid.png") 0 0 / cover no-repeat;
}
</style>
