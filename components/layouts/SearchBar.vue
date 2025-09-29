<!-- SearchBar.vue -->
<template>
  <div :class="['searchbar', { 'no-padded': !padded }]">
    <input placeholder="CEK: Flash Sale Rp17 Lokal!" class="search-input" />
    <UButton icon="i-heroicons:magnifying-glass" class="px-6" v-bind="attribute" />
  </div>
</template>

<script setup>
const props = defineProps({
  padded: {
    type: Boolean,
    default: true,
  },
});

const attribute = computed(() => {
  if (!props.padded) {
    return {
      ui: {
        rounded: 'rounded-none',
      },
    };
  }
  return {};
});
</script>

<style scoped>
@reference "tailwindcss";

.searchbar {
  @apply bg-white flex items-center rounded-sm text-black;
}

.searchbar:not(.no-padded) {
  @apply p-1;
}

.searchbar.no-padded {
  @apply border-2 border-primary;
}

.search-input {
  @apply flex-1 pl-3 outline-none text-black placeholder-gray-500 bg-transparent;
}
</style>
