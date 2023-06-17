// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",

    "nuxt-icons",
    "@vee-validate/nuxt",
    "@nuxt/image-edge",
    "nuxt-swiper",
  ],

  css: ["@/styles/main.scss"],
  runtimeConfig: {
    public: {
      apiBase: process.env.API_URL,
      baseUrl: process.env.BASE_URL,
    },
  },

  vite: {
    vue: {
      script: {
        defineModel: true,
        propsDestructure: true,
      },
    },
  },

  experimental: {
    typedPages: true,
  },

  components: [{ path: "~/src" }],
});
