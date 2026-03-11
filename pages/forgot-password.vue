<template>
    <section class="bg-white">
        <UContainer class="py-14">
            <UCard class="max-w-[500px] mx-auto auth-shadow">
               <FeatureForgotPasswordEmail />
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