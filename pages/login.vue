<template>
    <section class="bg-primary">
        <UContainer class="grid grid-cols-2 h-full py-20">
            <div class="flex justify-center items-center">
                <div class="flex flex-col gap-14 text-white text-center">
                    <h1 class="text-8xl">Syopi</h1>
                    <p>Tempat Belanja Online No.1 <br /> di Asia Tenggara dan Taiwan</p>
                </div>
            </div>
            <div>
                <UCard class="w-96 
                ui: {
                    rounded: 'rounded-sm',
                }
                ">
                    <h2>Login</h2>
                    <form class="mt-7 space-y-7" @submit.prevent="handleSubmit">
                        <UFormGroup :error="v$.phone_email.$errors?.[0]?.$message">
                            <UInput v-model="form.phone_email" placeholder="No. Handphone/Email" size="lg" />
                        </UFormGroup>
                        <UFormGroup :error="v$.password.$errors?.[0]?.$message">
                        <BaseInputPassword
                            v-model="form.password"
                            placeholder="Password"
                            size="lg"
                        />
                        </UFormGroup>
                        <div>
                            <!-- block button biar full width, max-w-44 biar ga terlalu lebar -->
                            <UButton type="submit" block :loading="status === 'pending' || statusProfile === 'pending'">Login</UButton>
                            <UButton variant="link" to="/forgot-password" color="blue" :padded="false" class="mt-2">Lupa Password</UButton>
                        </div>
                    </form>
                    <UDivider label="ATAU" class="my-4" 
                    :ui="{
                        label: 'text-gray-300 font-normal',
                    }" />
                    <UButton block color="white">
                        <img src="~/assets/images/google.png" class="w-6 h-6" />
                        Google
                    </UButton>
                    <p class="text-sm font-normal text-black/55 mt-3 text-center">Baru di Syopi? <NuxtLink to="/registration" class="text-primary">Daftar Sekarang</NuxtLink></p>
                </UCard>
            </div>
        </UContainer>
    </section>
</template>

<script setup>
import { useVuelidate } from '@vuelidate/core';
import { email, helpers, required, minLength } from '@vuelidate/validators';

definePageMeta({
    layout: 'auth',
    header: {
        title: 'Login',
    },
});

const session = useSession();
const {profile, token: tokenSession} = storeToRefs(session);
const token = useCookie('access_token');

const nuxtApp = useNuxtApp();

const form = ref({
    email: '',
    password: '',
});

const rules = {
    phone_email: {required, isValidUsername: helpers.withMessage("Value is not valid", (value) => {
        if (value) {
        if (/^\d{4}/.test(value)) {
          // checking phone number
          return /^\d+$/.test(value);
        }

        // chekcing email
        return email.$validator(value);
      }
      return true;
    })},
    password: {required, minLength: minLength(8)},
}

const $externalResults = reff({})

const v$ = useVuelidate(rules, form, {
    $autoDirty: true, //bikin form jadi state
    $externalResults,
});

const { status, execute, error, data } = useSubmit("/server/api/login");

const {execute: getProfile, status: statusProfile} = useApi('/server/api/profile', {
    immediate: false,
    onResponse({ response }) {
        if(response.ok) {
            profile.value = response._data?.data;
            
            nuxtApp.runWithContext(() => {
                navigateTo('/');
            });
        }
    },
})

async function handleSubmit() {
    const isValid = await v$.value.$validate();
    if(!isValid) return;
    //kalo valid fetch api

    await execute(form.value);

    if (error.value) {
        $externalResults.value = error.value.data?.meta?.validations || {};
        return;
    }

    if(status.value === 'success' && data.value?.data?.token) {
        tokenSession.value = data.value?.data?.token;
        token.value = data.value?.data?.token;
        getProfile();
    }
}
</script>

<style scoped>

</style>