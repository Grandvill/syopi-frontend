<template>
  <UButton variant="link" color="white" :padded="false" label="Logo" to="/" class="logo" style="text-decoration: none"> Syopi </UButton>
</template>

<script setup></script>

<style>
@reference "tailwindcss";
.logo {
  @apply text-4xl font-normal;
}
</style>
