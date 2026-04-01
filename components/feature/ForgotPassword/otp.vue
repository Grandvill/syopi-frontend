<template>
    <div class="flex gap-7 items-center">
        <UButton icon="i-heroicons:arrow-left" variant="link" @click="emit('back')" />
        <h3 class="text-xl font-normal">Masukkan Kode OTP</h3>
    </div>
    <div class="px-16 pb-16 pt-9">
        <p class="text-center text-sm text-black/80 mt-2">Kode OTP telah dikirim via email ke</p>
        <p class="text-center font-medium text-black/80">user@example.com</p>
        <form class="space-y-16 mt-16">
            <UFormGroup>
                <BaseInputPin v-model="otpValue"/>
            </UFormGroup>
            <div>
                <p class="text-black/25 text-sm text-center">Mohon tunggu {{ 47 }} detik untuk mengirim ulang.</p>
                <UButton block class="uppercase" @click="emit('next')">Berikutnya</UButton>
            </div>
        </form>
    </div>
</template>

<script setup>
const emit = defineEmits(['next', 'back']);
const otpValue = ref("");
</script>

<style lang="scss" scoped>

</style>