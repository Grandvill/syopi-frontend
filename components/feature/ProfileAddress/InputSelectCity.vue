<template>
  <UPopover
    :popper="{ placement: 'bottom-start', strategy: 'absolute' }"
    :ui="{
      width: 'w-full',
      rounded: 'rounded-sm',
    }"
    @update:open="handlecheckselected"
  >
    <UInput
        :model-value="showSelected"
        :placeholder="placeholder"
        class="w-full"
        size="lg"
    />

    <template #panel="{close}">
      <div>
        <UTabs
        v-model="tabActive"
          :items="items"
          :ui="{
            list: {
              background: 'bg-white border-b',
              padding: 'p-0',
              rounded: 'rounded-none',
              marker: {
                wrapper:
                  '!top-[0px] left-0 !h-[100%] border-b-2 border-primary',
                rounded: 'rounded-none',
                shadow: 'shadow-none',
              },
              tab: {
                active: 'text-primary',
                inactive: 'text-black/80',
                rounded: 'rounded-none',
              },
            },
          }"
        >
          <template #item="{ item }">
            <template v-if="options[item.key].length">
              <UButton
                v-for="child in options[item.key]"
                :key="child.uuid"
                variant="ghost"
                block
                :color="
                  form[item.key]?.uuid === child.uuid ? 'primary' : 'gray'
                "
                class="justify-start"
                :label="child.name"
                @click="handleSelect(child, item.key, close)"
            />
          </template>
          <p v-else class="text-center my-3 text-black/40">Tidak ada data yang ditemukan</p>
        </template>  
        </UTabs>
      </div>
    </template>
  </UPopover>
</template>

<script setup>
defineProps({
    placeholder: {
        type: String,
        default: 'Provinsi, Kota',
    },
});
const tabActive = ref(0);
const form = reactive({
    province: null,
    city: null,
});

const showSelected = computed(
  () => `${form.province?.name || ""}${form.city ? `, ${form.city.name}` : ""}`
);

const items = computed(() => [
    {
        label: 'Provinsi',
        key: 'province',
    },
    {
        label: 'Kota',
        key: 'city',
        disabled: !form.province?.uuid,
    },
]);

const options = computed(() => ({
    city: cities.value,
    province: provinces.value,
}));

const provinces = computed(() => [
    {
        uuid: 'ee8d57c-9b1e-4a7c-8d0e-9f2b1c3a1a2b',
        name: 'Bali',
    },
    {
        uuid: 'a1b2c3d-4e5f-6789-0abc-def123456789',
        name: 'Bangka Belitung',
    },
    {
        uuid: '12345678-90ab-cdef-1234-567890abcdef',
        name: 'Banten',
    },
    {
        uuid: 'abcdef12-3456-7890-abcd-ef1234567890',
        name: 'Bengkulu',
    },
    {
        uuid: '7890abcd-1234-5678-90ab-cdef12345678',
        name: 'Jawa Barat',
    },
]);

const cities = computed(() => [
    {
        uuid: 'f444e5c-9b1e-4a7c-8d0e-9f2b1c3a1a2b',
        province: {
            uuid: 'ee8d57c-9b1e-4a7c-8d0e-9f2b1c3a1a2b',
            name: 'Bali',
        },
        external_id: '104',
        name: 'Kabupaten Cianjur',
    }
].filter((item) => item.province.uuid === form.province?.uuid));

async function handleSelect(value, type, close) {
    form[type] = value;
    
    await nextTick();
    if(type === 'province') {
        form.city = null;
        tabActive.value = 1;
    } else {
        tabActive.value = 0;
        close();
    }
}

function handlecheckselected(isOpen) {
    if(!isOpen) {
        tabActive.value = 0;
        if(!form.city) {
            form.province = null;
        }
    }
}

</script>



<style lang="scss" scoped></style>
