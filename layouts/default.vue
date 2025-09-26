<template>
  <div class="default-layout">
    <LayoutsHeaderOrange />
    <main class="main-layout">
      <slot />
    </main>

    <LayoutsFooter />
  </div>
</template>

<style>
@reference "tailwindcss";

.default-layout {
  @apply flex flex-col min-h-screen;
}

.main-layout {
  @apply flex-1 bg-slate-300;
}
</style>
