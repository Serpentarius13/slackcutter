<template>
  <SharedUiInputError :error="error">
    <label class="relative">
      <input
        v-model="model"
        :class="[
          'text-medium w-full rounded-medium-big border-2 font-medium border-gray-400 border-opacity-[30%] px-[2.6rem] py-[1.8rem] text-black text-opacity-60 outline-none  transition-all hover:border-opacity-70 hover:text-opacity-100 focus:border-opacity-70 focus:text-opacity-100 focus:outline-none',
        ]"
        :placeholder="placeholder"
        :type="inputType"
      />

      <button
        aria-label="password switcher"
        class="absolute right-[3rem] top-1/2 -translate-y-1/2 text-black z-[10] bg-white"
        type="button"
        @click="changeInputType"
      >
        <NuxtIcon v-if="props.type === 'password'" :name="iconNameComputed" class="w-[2.2rem]" />
      </button>
    </label>
  </SharedUiInputError>
</template>

<script lang="ts" setup>
type TInputType = "text" | "password";

interface ITextInput {
  type?: TInputType;
  placeholder: string;
  icon?: string;
  error?: string | undefined;
}

const props = withDefaults(defineProps<ITextInput>(), { type: "text" });

const inputType = ref<TInputType>(props.type);

const iconNameComputed = computed<"input/eye-off" | "input/eye-on">(() => {
  if (inputType.value === "password") return "input/eye-off";
  else return "input/eye-on";
});

function changeInputType() {
  if (inputType.value === "password") inputType.value = "text";
  else inputType.value = "password";
}

const model = defineModel({ required: true });
</script>

<style lang="scss" scoped></style>
