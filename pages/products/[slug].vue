<template>
  <UContainer as="section" class="flex flex-col gap-5 py-5">
    <UBreadcrumb :links="links" :ui="uiBreadcrumb" />
    <UCard>
      <div class="product-briefing">
        <div class="product-image">
          <div class="bg-primary w-[450px] aspect-[1/1]"></div>
        </div>
        <div class="product-information"></div>
      </div>
    </UCard>
    <UCard>
      <div class="product-seller"></div>
    </UCard>
  </UContainer>
</template>

<script setup>
const colorMode = useColorMode();
console.log(colorMode.value);

const dataDummy = computed(() => {
  return {
    uuid: 'ebfbf3ac-8010-11ef-9abb-3dda8f3f8c01',
    name: 'Produk 100',
    slug: 'produk-100',
    price: 100000,
    price_sale: 80000,
    rating: 4,
    rating_count: 2,
    sale_count: 0,
    price_discount_percentage: 20,
    stock: 68,
    category: {
      slug: 'makanan',
      name: 'Makanan',
      description: null,
      parent: {
        slug: 'makanan-minuman',
        name: 'Makanan & Minuman',
        description: null,
      },
    },
    description: 'Deskripsi produk 100. Lorem ipsum bla\n bla bla',
    weight: 9,
    length: 34,
    width: 34,
    height: 97,
    video_url: 'http://localhost:8000/storage/attachment.mp4',
    seller: {
      username: 'azizah',
      store_name: 'Azizah Store',
      photo_url: 'http://localhost:8000/storage/user-photo/iAdzpaTT8wNzF58ZQ67Ys4YwTzFnQHW3tLFY3msm.jpg',
      product_count: 33,
      rating_count: 66,
      join_date: '2 weeks ago',
      send_from: {
        uuid: '8c438746-79c5-11ef-b707-97a05ceb87e2',
        is_default: true,
        receiver_name: 'Azis Hapidin',
        receiver_phone: '08888',
        city: {
          uuid: 'ee8eb26c-78fe-11ef-bd77-9e4478916c69',
          province: {
            uuid: 'ee8d857c-78fe-11ef-bd77-9e4478916c69',
            name: 'Bali',
          },
          external_id: 128,
          name: 'Kabupaten Gianyar',
        },
        district: 'Bojong',
        postal_code: '43222',
        detail_address: 'Jl. ABC No. 123',
        address_note: 'Dekat tugu pahlawan',
        type: 'home',
      },
    },
    images: ['http://localhost:8000/storage/attachment2.jpg', 'http://localhost:8000/storage/attachment4.jpg', 'http://localhost:8000/storage/attachment1.jpg', 'http://localhost:8000/storage/attachment3.jpg'],
    variations: [
      {
        name: 'Ukuran',
        values: ['M', 'L', 'XL'],
      },
      {
        name: 'Warna',
        values: ['Hitam', 'Kuning', 'Biru'],
      },
    ],
    review_summary: {
      1: 0,
      2: 1,
      3: 0,
      4: 0,
      5: 1,
      with_attachment: 2,
      with_description: 2,
    },
    other_product: [
      {
        uuid: 'ebd71974-8010-11ef-9abb-3dda8f3f8c01',
        name: 'Produk 26',
        slug: 'produk-26',
        price: 86971,
        price_sale: null,
        price_discount_percentage: null,
        sale_count: 0,
        image_url: 'http://localhost:8000/storage/attachment1.jpg',
        stock: 66,
      },
      {
        uuid: 'ebd984de-8010-11ef-9abb-3dda8f3f8c01',
        name: 'Produk 31',
        slug: 'produk-31',
        price: 95979,
        price_sale: null,
        price_discount_percentage: null,
        sale_count: 0,
        image_url: 'http://localhost:8000/storage/attachment1.jpg',
        stock: 79,
      },
      {
        uuid: 'ebe6e782-8010-11ef-9abb-3dda8f3f8c01',
        name: 'Produk 58',
        slug: 'produk-58',
        price: 51470,
        price_sale: null,
        price_discount_percentage: null,
        sale_count: 0,
        image_url: 'http://localhost:8000/storage/attachment4.jpg',
        stock: 59,
      },
      {
        uuid: 'ebec2e90-8010-11ef-9abb-3dda8f3f8c01',
        name: 'Produk 68',
        slug: 'produk-68',
        price: 37069,
        price_sale: null,
        price_discount_percentage: null,
        sale_count: 0,
        image_url: 'http://localhost:8000/storage/attachment3.jpg',
        stock: 75,
      },
      {
        uuid: 'ebf0821a-8010-11ef-9abb-3dda8f3f8c01',
        name: 'Produk 77',
        slug: 'produk-77',
        price: 92435,
        price_sale: null,
        price_discount_percentage: null,
        sale_count: 0,
        image_url: 'http://localhost:8000/storage/attachment1.jpg',
        stock: 95,
      },
      {
        uuid: 'ebf563c0-8010-11ef-9abb-3dda8f3f8c01',
        name: 'Produk 87',
        slug: 'produk-87',
        price: 65521,
        price_sale: null,
        price_discount_percentage: null,
        sale_count: 0,
        image_url: 'http://localhost:8000/storage/attachment2.jpg',
        stock: 12,
      },
    ],
  };
});

const links = computed(() => [
  {
    label: 'Syopo',
    to: '/',
  },
  {
    label: dataDummy.value.category.parent.name,
    to: `/`,
  },
  {
    label: dataDummy.value.category.name,
    to: `/categories/${dataDummy.value.category.parent.slug}/${dataDummy.value.category.slug}`,
  },
  {
    label: dataDummy.value.name,
  },
]);

const uiBreadcrumb = {
  active: 'text-black/80',
  inactive: 'text-[#0055AA]',
  li: 'text-black/80',
  base: 'font-normal',
};

const items = [
  'https://picsum.photos/1920/1080?random=1',
  'https://picsum.photos/1920/1080?random=2',
  'https://picsum.photos/1920/1080?random=3',
  'https://picsum.photos/1920/1080?random=4',
  'https://picsum.photos/1920/1080?random=5',
  'https://picsum.photos/1920/1080?random=6',
  'https://picsum.photos/1920/1080?random=1',
  'https://picsum.photos/1920/1080?random=2',
  'https://picsum.photos/1920/1080?random=3',
  'https://picsum.photos/1920/1080?random=4',
  'https://picsum.photos/1920/1080?random=5',
  'https://picsum.photos/1920/1080?random=6',
  'https://picsum.photos/1920/1080?random=1',
  'https://picsum.photos/1920/1080?random=2',
  'https://picsum.photos/1920/1080?random=3',
  'https://picsum.photos/1920/1080?random=4',
  'https://picsum.photos/1920/1080?random=5',
  'https://picsum.photos/1920/1080?random=6',
];
</script>

<style scoped>
.product-briefing {
  @apply flex gap-8;
}

.product-image {
  @apply w-[400px];
}
</style>
