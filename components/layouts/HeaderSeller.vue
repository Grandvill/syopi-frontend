<template>
  <header class="header-seller">
    <UBreadcrumb :links="links" :ui="ui" />
  </header>
</template>

<script setup>
const route = useRoute();
const breadcrumb = computed(() => {
  const defaultBreadcrumb = [{ label: 'Beranda' }];

  if (!route.meta.breadcrumb || !Array.isArray(route.meta.breadcrumb)) {
    return defaultBreadcrumb;
  }
  return [...defaultBreadcrumb, ...route.meta.breadcrumb];
});
const links = [
  {
    label: 'Home',
  },
  {
    label: 'Navigation',
  },
  {
    label: 'Breadcrumb',
  },
];

const ui = {
  active: 'text-slate-800 dark:text-slate-800 ',
  inactive: 'text-black/50',
  base: 'font-normal text-lg',
  li: 'text-black/50',
};
</script>

<style scoped>
.header-seller {
  @apply bg-white px-4 py-3;
  @apply shadow;
  @apply fixed top-0 left-0 right-0 z-50;
}
</style>
