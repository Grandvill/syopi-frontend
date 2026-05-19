<template>
    <div>
        <h3 class="font-medium text-lg">Atur Password</h3>
        <p class="text-sm text-black/65">
            Untuk keamanan akun Anda, mohon untuk tidak menyebarkan password Anda ke orang lain.
        </p>
        <hr class="mt-5 mb-11 border-gray-200/50">
        <form class="space-y-3">
            <UFormGroup label="Password Baru" :ui="{
                wrapper: 'flex gap-5',
                container: 'w-96',
                label: {
                    wrapper: 'pt-2',
                    base: 'text-normal text-black/55 text-right w-40'
                }
            }">
                <BaseInputPassword size="lg"/>
            </UFormGroup>
            <UFormGroup label="Konfirmasi Password" :ui="{
                wrapper: 'flex gap-5',
                container: 'w-96',
                label: {
                    wrapper: 'pt-2',
                    base: 'text-normal text-black/55 text-right w-40'
                }
            }">
                <BaseInputPassword size="lg"/>
                <UButton label="Konfirmasi" class="mt-8" />
            </UFormGroup>
        </form>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>