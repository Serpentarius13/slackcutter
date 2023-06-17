<template>
  <table class="text-[2rem] lg:text-[1.6rem] md:text-[1.4rem]">
    <thead>
      <tr>
        <th>
          <slot name="thead" />
        </th>

        <slot name="tdata" />
      </tr>
    </thead>

    <h2
      class="absolute w-full -translate-y-[4rem] lg:text-center text-[2rem] font-bold lg:-translate-y-[3rem] sm:text-[1.6rem] xs:text-[1.2rem]"
    >
      {{ caption }}
    </h2>

    <tbody>
      <tr
        v-for="{ title, values } in data"
        :key="title"
        class="beffore relative border-t-[1px] border-black border-opacity-[15%] before:hidden last:border-b-[1px] lg:before:block"
        :data-title="title"
      >
        <th
          class="min-w-[30rem] text-start font-normal opacity-40 xl:min-w-[23rem] lg:hidden"
        >
          {{ title }}
        </th>

        <td
          v-for="value in values"
          :key="typeof value === 'string' ? value : value.value"
          :style="
            typeof value === 'object' && value.isBad ? { opacity: '40%' } : {}
          "
          class="w-[45.7rem] py-[2.6rem] text-center before:hidden lg:pt-[4rem] lg:before:block"
        >
          {{ typeof value === "string" ? value : value.value }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { ITableRow } from "~/features/types/shared.types";

defineProps<{ data: ITableRow[]; caption: string }>();
</script>

<style scoped lang="scss">
table {
  @apply w-full;
}

.beffore {
  &::before {
    content: attr(data-title);
    @apply absolute top-[1rem] w-full text-center font-bold;
  }
}
</style>
