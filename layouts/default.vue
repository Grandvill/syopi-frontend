<template>
  <div class="default-layout">
    <header class="header-orange">
      <div class="header-top">
        <UContainer class="header-top-container">
          <UButton color="white" variant="link" :padded="false" label="Daftar" />
          <UButton color="white" variant="link" :padded="false" label="Login" />
        </UContainer>
      </div>
      <div class="header-bottom">
        <UContainer class="header-bottom-container">
          <BaseLogo />
          <div>Search Bar</div>
          <div>Cart Button</div>
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
  @apply bg-orange-600 py-2;
}

.header-top-container {
  @apply flex justify-end;
  @apply divide-x divide-gray-50/50;
}

.header-orange .header-bottom {
  @apply bg-gradient-to-b from-orange-600 to-[#FF6633];
  @apply flex-1;
}

.header-bottom-container {
  @apply flex justify-between items-center;
  @apply h-full;
}
</style>
