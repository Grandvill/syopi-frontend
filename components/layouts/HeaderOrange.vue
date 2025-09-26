<template>
  <header class="header-orange">
    <div class="header-top">
      <UContainer class="header-top-container">
        <UButton color="white" variant="link" :padded="false" class="px-3">Daftar</UButton>
        <UButton color="white" variant="link" :padded="false" class="px-3">Login</UButton>
      </UContainer>
    </div>
    <div class="header-bottom">
      <UContainer class="header-bottom-container">
        <BaseLogo />
        <LayoutsSearchBar class="flex-1" />
        <UButton>
          <IconCart variant="link" />
        </UButton>
      </UContainer>
    </div>
  </header>
</template>

<script setup></script>

<style scoped>
.header-orange {
  @apply text-white flex flex-col;
  height: 120px;
}

.header-orange .header-top {
  @apply bg-primary py-2;
}

.header-top-container {
  @apply flex justify-end;
  @apply divide-x divide-gray-50/50;
}

.header-orange .header-bottom {
  @apply bg-gradient-to-b from-primary to-[#FF6633];
  @apply flex-1;
}

.header-bottom-container {
  @apply flex justify-between items-center gap-12;
  @apply h-full;
}
</style>
