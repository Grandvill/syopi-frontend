<!-- SearchBar.vue -->
<template>
  <div class="searchbar">
    <input placeholder="CEK: Flash Sale Rp17 Lokal!" class="search-input" />
    <UButton icon="i-heroicons:magnifying-glass" class="px-6" />
  </div>
</template>

<style scoped>
@reference "tailwindcss";

.searchbar {
  @apply bg-white p-1 flex items-center rounded-sm;
}

.search-input {
  @apply flex-1 pl-3 outline-none text-black placeholder-gray-500 bg-transparent;
}
</style>
