<template>
  <div class="flex flex-col gap-6 pb-6">
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
              <FeatureHomepageCategoryItem
              v-for="i in 20"
              :key="`cat-${i}`"
                title="elektronik"
                image="/images/kategori/elektronik.png"
              />
            </div>
        </div>
      </UContainer>
    </section>
    <section class="product-section">
      <UContainer>
        <div class="product-section-header">
          <h2>Rekomendasi</h2>
        </div>
        <div class="product-section-content">
          <BaseProductCard v-for="i in 36" :key="`product-${i}`" title="Kawabata Sepatu Sandal Kasual Slingback Mules…" price="100000" image="images/rekomendasi/sepatu.png" />
        </div>
      </UContainer>
    </section>

    <UContainer>
      <UButton color="white" class="font-normal px-28">
        Login untuk Lihat Lainnya
      </UButton>
    </UContainer>
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

.product-section-header {
  @apply bg-white;
  @apply border-b-4 border-primary;
  @apply p-5;
}

.product-section-header h2 {
  @apply text-base text-primary font-medium;
  @apply text-center;
  @apply uppercase;
}

.product-section-content {
  @apply grid grid-cols-6 gap-3;
  @apply mt-3;
}
</style>
