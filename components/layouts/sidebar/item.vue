<template>
  <NuxtLink v-if="!item.children" :to="item.to">
    <div class="flex gap-2 items-center">
      <UIcon v-if="item.icon" :name="item.icon" class="w-6 h-6" />
      <p class="text-sm">{{ item.label }}</p>
    </div>
  </NuxtLink>
  <template>
    <UAccordion
      :items="[
        {
          label: item.label,
          icon: item.icon,
        },
      ]"
    >
    </UAccordion>
  </template>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: () => ({}),
  },
});
</script>

<style lang="scss" scoped></style>
