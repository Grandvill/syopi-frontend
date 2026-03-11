<template>
    <section class="bg-white">
        <UContainer class="py-14">
            <UCard class="max-w-[500px] mx-auto auth-shadow">
                <div class="flex gap-7 items-center">
                    <UButton icon="i-heroicons:arrow-left" variant="link" />
                    <h3 class="text-xl font-normal">Reset Password</h3>
                </div>
                <div class="px-16 pb-16 pt-9">
                    <form class="space-y-6">
                        <UFormGroup>
                            <UInput placeholder="Email" size="lg" />
                        </UFormGroup>
                        <UButton block class="uppercase">Berikutnya</UButton>
                    </form>
                </div>
            </UCard>
        </UContainer>
    </section>
</template>

<script>
definePageMeta({
  layout: "auth",
  header: {
    class: "custom-shadow sticky top-0 z-40",
    title: "Reset Password",
  },
});
</script>

<style scoped>
.auth-shadow {
  box-shadow: 0px 3px 10px 0px #00000024;
}
</style>