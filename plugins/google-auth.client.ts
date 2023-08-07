import vue3GoogleLogin from "vue3-google-login";

export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig();

  const token = runtimeConfig.public.googleAuthToken;

  if (!token) throw new Error("No google token");

  const authOptions = {
    clientId: token,
  };
  nuxtApp.vueApp.use(vue3GoogleLogin, authOptions);
});
