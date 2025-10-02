<template>
  <div>
    <section class="banner-section">
      <UContainer>
        <featureHomepageCarousel :items="items" />
      </UContainer>
    </section>
    <section class="category-section"></section>
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
</style>
