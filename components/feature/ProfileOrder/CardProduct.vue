<template>
    <div class="flex gap-3">
        <img src="https://picsum.photos/200/300" class="aspecr-[1/1] w-20 h-20 object-cover" />
        <div class="flex-1">
            <p class="line-clamp-2 text-base">Product Name</p>
            <p class="text-sm text-black/55">Variasi: white, 39</p>
            <p class="text-sm">x1</p>
        </div>
        <div class="flex items-center">
            Rp{{ formatNumber(1000) }}
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>