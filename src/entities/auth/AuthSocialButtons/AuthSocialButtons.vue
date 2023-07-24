<template>
  <div class="flex w-full flex-col items-center gap-[4.2rem]">
    <span class="text-small text-light-black"> or Continue With </span>

    <ul class="flex items-center gap-[1.2rem]">
      <li v-for="btn in socialButtons" :key="btn.icon">
        <EntitiesAuthAuthProviderButton
          :icon="btn.icon"
          :class="[btn.color]"
          @click="$emit(btn.name)"
        />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
interface IAuthSocialButton {
  icon: string;
  color: string;
  name: string;
}

const socialButtons: IAuthSocialButton[] = [
  {
    icon: "google",
    color: "bg-dark-purple",
    name: "google",
  },

  {
    icon: "facebook",
    color: "bg-dark-blue",
    name: "facebook",
  },

  {
    icon: "apple",
    color: "bg-black",
    name: "apple",
  },
];

const emit = defineEmits(["apple", "google", "facebook"]);
</script>

<style scoped lang="scss"></style>
