<template>
  <div class="seller-layout">
    <LayoutsHeaderSeller />
    <!-- <aside>Sidebar</aside> -->
    <main class="main-content">
      <slot />
    </main>
  </div>
</template>

<script setup></script>

<style scoped>
.seller-layout {
  @apply flex flex-col;
  @apply min-h-screen;
  @apply relative;
  @apply text-slate-800;
  @apply bg-white;
}

.main-content {
  @apply flex-1;
  @apply bg-black/10;
}
</style>
