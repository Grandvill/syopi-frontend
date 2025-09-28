<template>
  <header class="header-white">
    <LayoutsHeaderProfile />
    <div class="header-bottom">
      <UContainer class="header-bottom-container">
        <div>
          <BaseLogo color="orange" />
        </div>
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
}
</style>
