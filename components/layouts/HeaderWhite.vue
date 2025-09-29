<template>
  <header class="header-white">
    <LayoutsHeaderProfile />
    <div class="header-bottom">
      <UContainer class="header-bottom-container">
        <div class="flex gap-4 items-center">
          <BaseLogo color="orange" />
          <hr class="w-[1px] h-5 bg-primary" />
          <p class="text-xl text-black">Tittle</p>
        </div>
        <LayoutsSearchBar class="w-1/2" :padded="false" />
      </UContainer>
    </div>
  </header>
</template>

<script setup></script>

<style scoped>
@reference "tailwindcss";

.header-bottom {
  @apply bg-white;
}

.header-bottom-container {
  @apply flex justify-between items-center gap-10;
  @apply py-7;
}
</style>
