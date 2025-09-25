<template>
  <UButton variant="link" color="white" ::padded="false" label="Logo" to="/" class="logo"> Syopi </UButton>
</template>

<script setup></script>

<style>
@reference "tailwindcss";
.logo {
  @apply text-4xl;
  @apply no-underline;
}
</style>
