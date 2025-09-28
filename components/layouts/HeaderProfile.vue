<template>
  <div class="header-profile">
    <UContainer class="header-profile-container">
      <UButton color="white" variant="link" :padded="false" class="px-3">Daftar</UButton>
      <UButton color="white" variant="link" :padded="false" class="px-3">Login</UButton>
    </UContainer>
  </div>
</template>

<script setup></script>

<style scoped>
@reference "tailwindcss";

.header-profile {
  @apply bg-primary py-2 text-white;
}

.header-profile-container {
  @apply flex justify-end;
  @apply divide-x divide-gray-50/50;
}
</style>
