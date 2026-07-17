export const useSession = defineStore('session', () => {
    const profile = ref({
        "name": "",
        "email": "",
        "photo_url": "",
        "username": "",
        "phone": "",
        "store_name": "",
        "gender": "",
        "birth_date": "",
        "balance": 0,
    });

    const token = ref("");
    const tokenCookie = useCookie('access_token');

    //dapetnya dari api pada postman
    const registrationForm = ref({
    email: "",
    otp: "",
    password: "",
    password_confirmation: "",
  });

  function resetRegistrationForm() {
    registrationForm.value = {
      email: "",
      otp: "",
      password: "",
      password_confirmation: "",
    };
  }

    function logout() {
        token.value = '';
        profile.value = {
            "name": "",
            "email": "",
            "photo_url": "",
            "username": "",
            "phone": "",
            "store_name": "",
            "gender": "",
            "birth_date": "",
            "balance": 0,
        }
        tokenCookie.value = undefined;
        navigateTo('/');
    }

    return {profile, token, logout, registrationForm, resetRegistrationForm};
})