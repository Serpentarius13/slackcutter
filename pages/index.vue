<template>
  <WidgetsHomeHeader />

  <WidgetsHomeHero class="mt-[10rem] 2xl:mt-[20rem] md:mt-[27rem]" />

  <WidgetsHomeVideo class="mt-[20rem]" />

  <WidgetsHomeSteps class="mt-[15rem]" />

  <WidgetsHomeCTA class="!mt-[28rem]" />
  <WidgetsHomeFooter class="mt-[10.2rem]" />
</template>

<script lang="ts" setup>
definePageMeta({ layout: "home" });
</script>
