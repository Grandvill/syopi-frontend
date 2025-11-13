<template>
    <UContainer id="search-section">
        <div class="search-filter">
            <div class="filter-title">
                <IconFilter/>
                <h2>Filter</h2>
            </div>
            <div class="filter-item">
                <h3>Batas Harga</h3>
                <div class="flex gap-2 items-center">
                    <UInput type="number" placeholder="Rp Min"
                    :ui="{
                            base: 'bg-gray-200 text-gray-700 opacity-100 border border-gray-400',
                            color: { white: 'bg-gray-200' }
                        }"
                        class="price-input"
                    />
                    <UInput type="number" placeholder="Rp Max"
                    :ui="{
                            base: 'bg-gray-200 text-gray-700 opacity-100 border border-gray-400',
                            color: { white: 'bg-gray-200' }
                        }"
                        class="price-input"
                    />
                </div>
            </div>
        </div>
    </UContainer>
</template>

<script setup>

</script>

<style scoped>
#search-section {
    @apply py-8 flex gap-4;
}

.filter-title {
    @apply flex gap-2 items-center;
}

.filter-title h2{
    @apply text-base font-bold text-black/80;
    @apply uppercase;
}

.filter-item h3 {
    @apply text-black;
}

.price-input :deep(input[type="number"]) {
    color: #000000 !important;
    -webkit-text-fill-color: #000000 !important;
}
</style>