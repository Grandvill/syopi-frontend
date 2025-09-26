<template>
  <footer class="footer">
    <UContainer class="footer-container">
      <div class="footer-top"></div>
      <div class="footer-bottom"></div>
    </UContainer>
  </footer>
</template>

<script setup></script>

<style scoped>
.footer {
  @apply border-t-4 border-primary;
  @apply bg-gray-50;
}

.footer-container {
  @apply flex flex-col;
  @apply py-6;
  @apply gap-6;
}
</style>
