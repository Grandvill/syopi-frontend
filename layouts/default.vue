<template>
  <div class="default-layout">
    <header class="header-orange">
      <div class="header-top">
        <UContainer class="header-top-container">
          <UButton color="gray" variant="ghost" label="Daftar" />
          <UButton color="gray" variant="ghost" label="Login" />
        </UContainer>
      </div>
      <div class="header-bottom"></div>
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
  @apply bg-orange-700 py-2;
}

.header-top-container {
  @apply flex justify-end;
}
</style>
