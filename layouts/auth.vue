<template>
  <div class="auth-layout">
    <LayoutsHeaderWhite />
    <main class="main-layout"><slot /></main>
    <LayoutsFooter />
  </div>
</template>

<script setup></script>

<style scoped>
@reference "tailwindcss";

.auth-layout {
  @apply flex flex-col min-h-screen;
}

.main-layout {
  @apply flex-1 bg-slate-300;
}
</style>
