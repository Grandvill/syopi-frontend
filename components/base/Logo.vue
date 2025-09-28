<template>
  <UButton variant="link" :color="color" :padded="false" label="Logo" to="/" class="logo" style="text-decoration: none"> Syopi </UButton>
</template>

<script setup>
defineProps({
  color: {
    type: String,
    default: 'white',
    validator: (propsValue) => ['white', 'orange'].includes(propsValue),
  },
});
</script>

<style>
@reference "tailwindcss";
.logo {
  @apply text-4xl font-normal;
}
</style>
