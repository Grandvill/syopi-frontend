<template>
  <div class="cart-product">
    <div class="w-[46%]">
      <div class="flex gap-3 text-sm items-center">
        <NuxtImg :src="item.product.image_url" class="aspect-[1/1] w-20" />
        <p class="line-clamp-2 items-center text-black/85">
          {{ item.product.name }}
        </p>
        <div class="w-40">
          <p>Variasi:</p>
          <p>
            {{ item.variations.map((variant) => variant.value).join(", ") }}
          </p>
        </div>
      </div>
    </div>
    <div class="text-center w-[15%]">
      Rp{{ formatNumber(item.product.price_sale || item.product.price) }}
    </div>
    <div class="flex justify-center flex-col items-center w-[15%] gap-2">
      <BaseInputQuantity v-model="temporaryQty" :max="item.stock" :disabled="statusRemoveItem === 'pending'"/>
      <UButton
        v-if="temporaryQty !== item.qty"
        variant="link"
        size="xs"
        :padded="false"
        :loading="statusUpdateQty == 'pending'"
        :disabled="statusRemoveItem === 'pending'"
        @click="handleUpdateQty"
      >
        Perbarui Kuantitas
      </UButton>
    </div>
    <div class="text-center w-[15%] text-primary">
      Rp{{ formatNumber(item.total) }}
    </div>
    <div class="text-center w-[10%]">
      <UButton
        variant="link"
        color="black"
        :disabled="statusUpdateQty === 'pending'"
        :loading="statusRemoveItem === 'pending'"
        @click="removeItem"
      >
        Hapus
      </UButton>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    default: () => ({}),
  },
});

const temporaryQty = ref(props.item?.qty || 0);

const session = useSession();
const toast = useToast();
const statusUpdateQty = ref("idle");
const { execute: removeItem, status: statusRemoveItem } = useSubmit(
  computed(() => `/server/api/cart/${props.item.uuid}`),
  {
    method: "DELETE",
    onResponse({ response }) {
      if (response.ok) {
        refreshNuxtData("cart");
      }
    },
  }
);

async function handleUpdateQty() {
  statusUpdateQty.value = "pending";
  try {
    // Kirim dengan method POST (bukan PATCH). Backend Laravel menganggapnya
    // update lewat spoof header X-HTTP-Method-Override.
    await $fetch(`/server/api/cart/${props.item.uuid}`, {
      method: "POST",
      headers: {
        ...(session.token ? { Authorization: `Bearer ${session.token}` } : {}),
        "X-HTTP-Method-Override": "PATCH",
      },
      body: {
        variations: props.item?.variations || [],
        qty: temporaryQty.value,
        // note ikut dikirim supaya tidak terhapus saat ubah kuantitas
        note: props.item?.note,
      },
    });
    refreshNuxtData("cart");
  } catch (err) {
    toast.add({
      color: "red",
      title: err?.data?.meta?.messages?.[0] || "Gagal memperbarui kuantitas",
    });
  } finally {
    statusUpdateQty.value = "idle";
  }
}
</script>

<style scoped>
.cart-product {
  @apply flex items-center;
  @apply text-gray-500 text-sm font-normal;
  @apply py-5;
}
</style>
