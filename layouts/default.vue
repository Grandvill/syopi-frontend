<template>
  <div class="default-layout">
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

    <main class="main-layout">
      <slot />
    </main>

    <footer>Footer</footer>
  </div>
</template>

<style>
@reference "tailwindcss";

.default-layout {
  @apply flex flex-col min-h-screen bg-red-200;
}

.main-layout {
  @apply flex-1 bg-slate-300;
}

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
