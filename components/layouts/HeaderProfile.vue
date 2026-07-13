<template>
  <div class="header-profile">
    <UContainer class="header-profile-container">
      <template v-if="!session.token">
        <UButton color="white" variant="link" to="/registration" :padded="false" class="px-3">Daftar</UButton>
        <UButton color="white" variant="link" to="/login" :padded="false" class="px-3">Login</UButton>
      </template>
      <UDropdown v-else :items="profileItems">
        <template #default="{ open }">
          <div class="flex gap-2 items-center">
            <UAvatar :src="session.profile.photo_url" :alt="session.profile.name" icon="i-heroicons:user" img-class="object-cover"/>
            <p>{{session.profile.name}}</p>
            <UIcon
              name="i-heroicons:chevron-down-20-solid"
              class="w-4 h-4 transition-all"
              :class="[open && 'rotate-180']"
            />
          </div>
        </template>
      </UDropdown>
    </UContainer>
  </div>
</template>

<script setup>
const session = useSession();

const profileItems = [
  [
    {
      label: "Akun Saya",
      icon: "i-heroicons:user",
      to: '/my-account/profile'
    },
    {
      label: "Switch to Seller",
      icon: "i-heroicons:arrow-path",
      to: '/seller/order'
    },
    {
      label: "Logout",
      icon: "i-heroicons:arrow-left-start-on-rectangle",
      click: session.logout
    },
  ],
];
</script>

<style scoped>
@reference "tailwindcss";

.header-profile {
  @apply bg-primary py-2 text-white;
}

.header-profile-container {
  @apply flex justify-end;
  @apply divide-x divide-gray-50/50;
}
</style>
