<template>
  <ul class="flex flex-wrap gap-[1.2rem] items-center">
    <li v-for="tag in tags" :key="tag.slug">
      <button
        :class="[
          tag.slug === activeTag
            ? 'bg-white text-black border-opacity-100'
            : 'bg-transparent text-white border-white border-opacity-[30%]',
        ]"
        class="py-[2rem] px-[3.8rem] rounded-[6rem] text-small transition-all border-[1px] block leading-[100%]"
        @click="activeTag = tag.slug"
      >
        {{ tag.text }}
      </button>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { ITag } from "~/src/shared/features/types/shared.types";

interface ITagsProps {
  tags: ITag[];
}

const props = defineProps<ITagsProps>();

const emit = defineEmits(["update:modelValue"]);

const activeTag = ref<string>();

onMounted(() => {
  activeTag.value = props.tags[0].slug;
});

watch(activeTag, () => {
  emit("update:modelValue", activeTag.value);
});
</script>

<style lang="scss" scoped></style>