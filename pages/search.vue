<template>
  <UContainer id="search-section">
    <div class="search-filter">
      <div class="filter-title">
        <IconFilter />
        <h2>Filter</h2>
      </div>
      <div class="filter-item">
        <h3>Batas Harga</h3>
        <div class="price-inputs">
          <UInput
            type="number"
            placeholder="Rp MIN"
            color="white"
            :ui="{
              base: 'bg-white border-gray-300',
            }"
          />
          <div class="price-divider" />
          <UInput
            type="number"
            placeholder="Rp MAX"
            color="white"
            :ui="{
              base: 'bg-white border-gray-300',
            }"
          />
        </div>
        <UButton block color="red" class="apply-button">TERAPKAN</UButton>
      </div>
      <hr class="divider" />
      <div class="filter-item">
        <h3>Berdasarkan Kategori</h3>
        <div class="category-list">
          <UCheckbox label="Kategori 1" color="blue" />
          <UCheckbox label="Kategori 2" color="gray" />
          <UCheckbox label="Kategori 3" color="gray" />
          <UCheckbox label="Kategori 4" color="gray" />
        </div>
      </div>
      <hr />
      <UButton block color="red" class="apply-button">HAPUS SEMUA</UButton>
    </div>
    <div class="search-results">
      <div class="search-keyword">
        <IconLamp />
        <p>Hasil pencarian untuk '<span>Testing keyword</span>'</p>
      </div>
      <div class="search-sort">
        <div class="search-sort-control">
          <p>Urutkan</p>
          <UButton class="btn-termurah">Termurah</UButton>
          <UButton color="white" class="px-6">Termahal</UButton>
        </div>
        <div class="search-sort-pagination">
          <p><span>1</span>/17</p>
          <div>
            <UButton icon="i-heroicons:chevron-left-20-solid" color="white" size="xs" disabled />
            <UButton icon="i-heroicons:chevron-right-20-solid" color="gray-600" size="xs" />
          </div>
        </div>
      </div>
      <div class="search-content">
        <BaseProductCard v-for="i in 10" :key="`product-${i}`" title="Kawabata Sepatu Sandal Kasual Slingback Mules…" price="100000" image="images/rekomendasi/sepatu.png" sale="19" />
      </div>
      <div class="flex justify-center mt-8">
        <UPagination
          v-model="page"
          :page-count="5"
          :total="items.length"
          :inactive-button="{
            variant: 'link',
            class: 'text-black/40 hover:text-primary px-3 py-1',
          }"
          :active-button="{
            class: 'px-3 py-1',
          }"
          :prev-button="{
            variant: 'link',
            class: 'text-black/40 hover:text-primary px-3 py-1',
          }"
          :next-button="{
            variant: 'link',
            class: 'text-black/40 hover:text-primary px-3 py-1',
          }"
          :ui="{
            wrapper: 'space-x-4',
            base: 'text-xl font-light',
            default: {
              prevButton: {
                icon: 'i-heroicons:chevron-left',
              },
              nextButton: {
                icon: 'i-heroicons:chevron-right',
              },
            },
          }"
        />
      </div>
    </div>
  </UContainer>
</template>

<script setup>
const page = ref(1);
const items = ref(Array(55));
</script>

<style scoped>
#search-section {
  @apply py-8 flex gap-4;
}

.search-filter {
  @apply flex flex-col gap-5;
  @apply w-64 bg-gray-50 p-4 rounded;
}

.filter-title {
  @apply flex gap-2 items-center;
}

.filter-title h2 {
  @apply text-base font-bold text-black/80;
  @apply uppercase;
}

.filter-item {
  @apply flex flex-col gap-3;
}

.filter-item h3 {
  @apply text-sm text-black/80 font-semibold mb-1;
}

.price-inputs {
  @apply flex gap-2 items-center;
}

.price-divider {
  @apply h-[1px] bg-gray-400 w-4 flex-shrink-0;
}

.apply-button {
  @apply py-2.5 mt-1;
  @apply text-white;
}

.divider {
  @apply border-gray-300 my-1;
}

.category-list {
  @apply flex flex-col gap-2.5;
}

/* Style untuk label checkbox - text abu-abu terang */
.category-list :deep(label) {
  @apply text-gray-400;
}

/* Style untuk checkbox box - border dan background putih */
.category-list :deep(input[type='checkbox']) {
  @apply border-gray-400 bg-white;
}

/* Ketika di-check - background hitam/gelap agar checkmark putih terlihat */
.category-list :deep(input[type='checkbox']:checked) {
  @apply bg-gray-800 border-gray-800;
}

/* Ensure input styling */
:deep(.price-inputs input) {
  @apply bg-white text-black text-sm;
}

:deep(.price-inputs input::placeholder) {
  @apply text-gray-500;
}

.search-results {
  @apply flex-1;
  @apply text-black;
}

.search-keyword {
  @apply flex items-center gap-2;
  @apply text-gray-800;
}

.search-keyword span {
  @apply text-primary;
}

.search-sort {
  @apply flex items-center gap-2 justify-between;
  @apply px-5 py-3;
  @apply bg-black/5;
  @apply mt-4;
}

.search-sort-control {
  @apply flex items-center gap-3;
}

.btn-termurah {
  @apply text-white px-6;
}

.search-sort-control p {
  @apply text-sm text-gray-600 font-normal;
}

.search-sort-pagination {
  @apply flex gap-5 items-center;
}

.search-sort-pagination p {
  @apply text-sm font-normal text-black/80;
}

.search-sort-pagination span {
  @apply text-primary;
}

.search-content {
  @apply grid grid-cols-5 gap-3;
  @apply mt-3;
}
</style>
