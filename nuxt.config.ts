// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",

    "nuxt-icons",
    "@vee-validate/nuxt",
    "@nuxt/image-edge",
    "nuxt-swiper",
    "@vite-pwa/nuxt",
  ],

  css: ["@/styles/main.scss", "aos/dist/aos.css"],
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

  app: {
    head: {
      meta: [
        {
          name: "description",
          content:
            "SlackCutter is an awesome tool to cut your videos towards suiting your viewer much better.",
        },
      ],
      title: "SlackCutter",
    },
  },

  pwa: {
    registerType: "autoUpdate",
    manifest: {
      name: "Slack Cutter",
      short_name: "SlackCut",
      description:
        "SlackCutter is an awesome tool to cut your videos towards suiting your viewer much better.",

      theme_color: "#0A0F17",

      icons: [
        {
          src: "/icons/icon_64.jpg",
          type: "image/jpg",
        },
        {
          src: "/icons/icon_144.jpg",
          type: "image/jpg",
        },
        {
          src: "/icons/icon_192.jpg",
          type: "image/jpg",
        },
        {
          src: "/icons/icon_512.jpg",
          type: "image/jpg",
        },
      ],
    },

    workbox: {
      navigateFallback: "/",
      globPatterns: ["**/*.{js,css,html,png,svg,ico}"],
    },

    devOptions: {
      enabled: true,
      type: "module",
    },
  },
});
