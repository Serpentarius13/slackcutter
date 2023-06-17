<template>
  <ul class="flex gap-[4rem] text-[1.7rem] text-black lowercase">
    <li v-for="{ slug, text } in navLinks" :key="text">
      <NuxtLink
        :to="slug"
        :class="[
          $route.path.includes(slug) && 'opacity-100',
          'opacity-80  hover:opacity-[100]',
        ]"
      >
        {{ text }}
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
interface INavLink {
  readonly slug: string;
  readonly text: string;
}

const navLinks: INavLink[] = [
  { slug: "/courses", text: "образовательные курсы" },
  { slug: "/subscription", text: "тарифы и планы" },
  { slug: "/catalog", text: "каталог" },
  { slug: "/mentor", text: "Менторство" },
  { slug: "/payment", text: "Оплата" },
];
</script>

<style scoped lang="scss"></style>
