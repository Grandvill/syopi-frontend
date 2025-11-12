<template>
    <NuxtLink class="product-card" to="/">
        <img src="../../public/images/rekomendasi/sepatu.png" />
        <div class="product-card-detail">
            <p>Kawabata Sepatu Sandal Kasual Slingback Mules Kawabata Sepatu Sandal Kasual Slingback Mules</p>
            <div class="product-card-footer">
                <div class="product-price">Rp 590.000</div>
                <div class="product-sale">19 Terjual</div>
            </div>
        </div>
    </NuxtLink>
</template>

<script setup>

</script>

<style scoped>
.product-card {
    @apply bg-white;
    @apply border;
}

.product-card img {
    @apply aspect-[1/1];
    @apply object-cover;
}

.product-card-detail {
    @apply text-black;
    @apply p-2;
}

.product-card-detail p {
    @apply text-sm font-normal text-black/80;
    @apply line-clamp-2;
}

.product-card-footer {
    @apply mt-8;
    @apply flex justify-between gap-2;
}
</style>