<template>
  <footer class="footer">
    <UContainer class="footer-container">
      <div class="footer-top">
        <div>
          <h3>Layanan Pelanggan</h3>
          <nav>
            <ul>
              <li v-for="(item, index) in layananPengguna" :key="`${item}-${index}`">
                <UButton variant="link" :padded="false" size="xs" class="footer-text"> {{ item }} </UButton>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <h3>Jelajahi Syopo</h3>
          <nav>
            <ul>
              <li v-for="(item, index) in jelajahi" :key="`${item}-${index}`">
                <UButton variant="link" :padded="false" size="xs" class="footer-text"> {{ item }} </UButton>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <div>
            <h3>Pembayaran</h3>
            <div class="flex flex-wrap gap-2">
              <div class="footer-item">
                <img src="~/assets/images/seabank.png" alt="seabank" />
              </div>
              <div class="footer-item">
                <img src="~/assets/images/bca.png" alt="bca" />
              </div>
              <div class="footer-item">
                <img src="~/assets/images/bni.png" alt="bni" />
              </div>
              <div class="footer-item">
                <img src="~/assets/images/bri.png" alt="bri" />
              </div>
              <div class="footer-item">
                <img src="~/assets/images/bsi.png" alt="bsi" />
              </div>
              <div class="footer-item">
                <img src="~/assets/images/cimb.png" alt="cimb" />
              </div>
              <div class="footer-item">
                <img src="~/assets/images/mandiri.png" alt="mandiri" />
              </div>
              <div class="footer-item">
                <img src="~/assets/images/permata.png" alt="permata" />
              </div>
              <div class="footer-item">
                <img src="~/assets/images/alfamart.png" alt="alfamart" />
              </div>
            </div>
          </div>
          <div class="mt-6">
            <h3>Pengiriman</h3>
            <div class="flex flex-wrap gap-2">
              <div class="footer-item">
                <img src="~/assets/images/spx.png" alt="spx" />
              </div>
              <div class="footer-item">
                <img src="~/assets/images/jnt.png" alt="jnt" />
              </div>
              <div class="footer-item">
                <img src="~/assets/images/jne.png" alt="jne" />
              </div>
              <div class="footer-item">
                <img src="~/assets/images/ninja.png" alt="ninja" />
              </div>
              <div class="footer-item">
                <img src="~/assets/images/sicepat.png" alt="sicepat" />
              </div>
              <div class="footer-item">
                <img src="~/assets/images/gosend.png" alt="gosend" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h3>Ikuti Kami</h3>
            <nav>
              <ul>
                <li>
                  <UButton variant="link" :padded="false" size="xs" class="footer-text">
                    <template #leading>
                      <img src="~/assets/images/facebook.png" alt="facebook" />
                      Facebook
                    </template>
                  </UButton>
                </li>
                <li>
                  <UButton variant="link" :padded="false" size="xs" class="footer-text">
                    <template #leading>
                      <img src="~/assets/images/instagram.png" alt="instagram" />
                      Instagram
                    </template>
                  </UButton>
                </li>
                <li>
                  <UButton variant="link" :padded="false" size="xs" class="footer-text">
                    <template #leading>
                      <img src="~/assets/images/twitter.png" alt="twitter" />
                      Twitter
                    </template>
                  </UButton>
                </li>
                <li>
                  <UButton variant="link" :padded="false" size="xs" class="footer-text">
                    <template #leading>
                      <img src="~/assets/images/linkedin.png" alt="linkedin" />
                      Linkedin
                    </template>
                  </UButton>
                </li>
              </ul>
            </nav>
          </div>
          <div class="mt-6">
            <h3>Keamanan</h3>
            <div class="flex flex-wrap gap-2">
              <div class="footer-item size-lg">
                <img src="~/assets/images/certified.png" alt="certified" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3>Download Aplikasi Syopi</h3>
          <div class="flex gap-3">
            <img src="~/assets/images/qrcode.png" alt="qrcode" />
            <div class="flex flex-col gap-2">
              <img src="~/assets/images/appstore.png" alt="appstore" />
              <img src="~/assets/images/playstore.png" alt="playstore" />
              <img src="~/assets/images/appgalery.png" alt="appgalery" />
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p class="footer-text">© 2025 Syopi. Hak Cipta Dilindungi</p>
        <div class="flex items-center gap-1">
          <span class="footer-text">Negara:</span>
          <div class="flex divide-x divide-black/20">
            <UButton v-for="item in country" :key="item" variant="link" class="footer-text px-1.5" :padded="false">{{ item }}</UButton>
          </div>
        </div>
      </div>
    </UContainer>
  </footer>
</template>

<script setup>
const layananPengguna = ['Bantuan', 'Metode Pembayaran', 'SyopoPay', 'Koin Syopo', 'Lacak Pesanan Pembeli', 'Lacak Pengiriman Penjual', 'Gratis Ongkir', 'Pengembalian Barang & Dana', 'Garansi Syopo', 'Hubungi Kami'];

const jelajahi = ['Tentang Kami', 'Karir', 'Kebijakan Syopo', 'Kebijakan Privasi', 'Blog', 'Syopo Mall', 'Seller Center', 'Flash Sale', 'Kontak Media', 'Syopo Affiliate'];

const country = ['Singapura', 'Indonesia', 'Thailand', 'Malaysia', 'Vietnam', 'Filipina', 'Brazil', 'Mexico', 'Colombia', 'Chile', 'Taiwan'];
</script>

<style scoped>
.footer {
  @apply border-t-4 border-primary;
  @apply bg-gray-50;
  @apply text-black;
}

.footer-container {
  @apply flex flex-col;
}

.footer-top {
  @apply grid grid-cols-5; /* maksimal 5 kolom, jika lebih maka akan mengikuti ukuran layar/ke bawah */
  @apply pt-11 pb-8;
  @apply border-b;
}

.footer h3 {
  @apply font-bold text-xs;
  @apply mb-5;
}

.footer-text {
  @apply text-xs text-black/65;
  @apply font-normal;
}

.footer-item {
  @apply w-[60px] h-[30px];
  @apply bg-white rounded-sm p-1 shadow;
}

.footer-item.size-lg {
  @apply w-[112px] h-[52px];
}

.footer-bottom {
  @apply py-10;
  @apply flex justify-between;
}
</style>
