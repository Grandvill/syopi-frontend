<template>
    <section class="bg-primary">
        <UContainer class="grid grid-cols-2 h-full py-20">
            <div class="flex justify-center items-center">
                <div class="flex flex-col gap-14 text-white text-center">
                    <h1 class="text-8xl">Syopi</h1>
                    <p>Tempat Belanja Online No.1 <br /> di Asia Tenggara dan Taiwan</p>
                </div>
            </div>
            <div>
                <UCard class="w-96 
                ui: {
                    rounded: 'rounded-sm',
                }
                ">
                    <h2>Login</h2>
                    <form class="mt-7 space-y-7">
                        <UFormGroup>
                            <UInput placeholder="No. Handphone/Email" size="lg" />
                        </UFormGroup>
                        <UFormGroup>
                            <UInput placeholder="Password" size="lg" />
                        </UFormGroup>
                        <div>
                            <!-- block button biar full width, max-w-44 biar ga terlalu lebar -->
                            <UButton block>Login</UButton>
                            <UButton variant="link" color="blue" :padded="false" class="mt-2">Lupa Password</UButton>
                        </div>
                    </form>
                    <UDivider label="ATAU" class="my-4" 
                    :ui="{
                        label: 'text-gray-300 font-normal',
                    }" />
                    <UButton block color="white">
                        <img src="~/assets/images/google.png" class="w-6 h-6" />
                        Google
                    </UButton>
                    <p class="text-sm font-normal text-black/55 mt-3 text-center">Baru di Syopi? <NuxtLink to="/registration" class="text-primary">Daftar Sekarang</NuxtLink></p>
                </UCard>
            </div>
        </UContainer>
    </section>
</template>

<script>
definePageMeta({
    layout: 'auth',
    header: {
        title: 'Login',
    },
});
</script>

<style scoped>

</style>