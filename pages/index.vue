<template>
  <div class="flex flex-col gap-6">
    <section class="banner-section">
      <UContainer>
        <featureHomepageCarousel :items="items" />
      </UContainer>
    </section>
    <section class="category-section">
      <UContainer>
        <div class="category-section-card">
            <div class="category-section-header">
              <h2>Kategori</h2>
            </div>
            <div class="category-section-content">
              <NuxtLink class="category-item"></NuxtLink>
            </div>
        </div>
      </UContainer>
    </section>
    <section class="product-section"></section>
  </div>
</template>

<script setup>
const items = [
  'https://picsum.photos/1920/1080?random=1',
  'https://picsum.photos/1920/1080?random=2',
  'https://picsum.photos/1920/1080?random=3',
  'https://picsum.photos/1920/1080?random=4',
  'https://picsum.photos/1920/1080?random=5',
  'https://picsum.photos/1920/1080?random=6',
];
</script>

<style scoped>
.banner-section {
  @apply bg-white py-7;
}

.category-section-card {
  @apply bg-white text-black;
}

.category-section-header {
  @apply p-5;
  @apply border-b border-black/5;
}

.category-section-header h2 {
  @apply text-base text-black/55 font-medium;
  @apply uppercase;
}

.category-section-content {
  @apply grid grid-cols-10;
}

.category-item {
  @apply p-2;
  @apply border-b border-r border-black/5;
}
</style>
