<template>
  <SellerCard title="Informasi Saldo">
    <div class="space-y-6 mt-4">
      <div class="border rounded-sm p-4 shadow space-y-4">
        <p class="text-black/65">Saldo</p>
        <div class="flex items-center gap-4">
          <span class="text-3xl font-medium">Rp{{ formatNumber(1000) }}</span>
          <UButton @click="openWithDraw = true">Tarik Dana</UButton>
        </div>
      </div>
      <p class="text-lg font-medium">0 Transaksi</p>
      <BaseDataTable :columns="columns" :rows="transaction">
        <template #amount-data="{ row }">Rp{{ formatNumber(row.amount) }}</template>
      </BaseDataTable>
    </div>

    <UModal v-model="openWithDraw">
      <UCard>
        <div class="flex justify-between items-center">
          <span>Tarik Dana</span>
          <UButton icon="i-heroicons:x-mark" variant="ghost" color="grey" @click="openWithDraw = false"/>
        </div>
        <form class="space-y-4 mt-4">
          <UFormGroup label="Bank">
          <USelectMenu :options="[]" size="lg" />
          </UFormGroup>
          <UFormGroup label="No. Rekening">
            <UInput size="lg" />
          </UFormGroup>
          <UFormGroup label="Nama Pemilik Rekening">
            <UInput size="lg" />
          </UFormGroup>
          <UFormGroup label="Jumlah Penarikan">
            <UInput type="number" size="lg" />
          </UFormGroup>
          <UFormGroup label="Deskripsi">
            <UTextarea size="lg" />
          </UFormGroup>
          <div class="flex gap-2 items-center justify-end pt-4">
            <UButton color="white">Tutup</UButton>
            <UButton>Konfirmasi</UButton>
          </div>
        </form>
      </UCard>
    </UModal>
  </SellerCard>
</template>

<script setup>
definePageMeta({
  breadcrumb: [{ label: 'Saldo Penjual' }],
});

const openWithDraw = ref(false)

const columns = [
  {
    label: 'Transaksi Tipe',
    key: 'type',
    rowClass: 'capitalize',
  },
  {
    label: 'Jumlah',
    key: 'amount',
    rowClass: 'font-bold',
  },
  {
    label: 'Deskripsi',
    key: 'description',
  },
  {
    label: 'Waktu',
    key: 'time',
  },
];

const transaction = [
  {
    uuid: '0192671-a6c4-11ec-a8d1-0242ac120002',
    type: 'deposit',
    amount: '10000',
    description: 'Penjualan produk INV-2-20241006101344',
    time: '2024-10-07 14:28:25',
  },
];
</script>

<style lang="scss" scoped></style>
