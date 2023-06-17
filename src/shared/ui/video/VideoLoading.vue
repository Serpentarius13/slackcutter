<template>
  <div
    class="relative"
    :style="!isLoaded ? { width, height } : {}"
  >
    <CommonVideo :videoUrl="videoUrl" class="z-[220]" v-if="isLoaded" />

    <Transition name="fade">
      <div
        class="absolute inset-0 m-auto flex h-full w-full items-center justify-center bg-gray-300"
        v-if="!isLoaded"
      >
        <CommonLoading size="40" duration="1000" />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import sleep from "~/features/utils/sleep";

const isLoaded = ref<boolean>(false);

const props = withDefaults(defineProps<{ videoUrl: string; width?: string, height?: string }>(), {width: '100vw', height: '100vh'})
onMounted(() => {
  sleep(2000).then(() => (isLoaded.value = true));
});
</script>

<style scoped lang="scss"></style>
