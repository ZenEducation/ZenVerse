export default defineNuxtConfig({
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://themes.googleusercontent.com/fonts/css?kit=cz1jpBwGM3olgm6yAbYiUmFNHreHjGDULiILnCQaL3AhwzbRXCq9VLiKmr71AM0EhmorhrP7WPNHD-c8XM5pw2aJKlHrtewGmHjl3ZIvTIgs-BimimGMd68Ci4l6bz476lboFduP1IjgyK1FWy3UUh9IGyTIcG1GYguEjgy0uV4GouCgZ0IK-dUppgFJ9gaADb1dvSgxp-370RvRJtjBEqyztD1g4QMI0P111Piq098',
      },
    ],
  },
  ssr: false,
  srcDir: "./",
  css: ["@/assets/css/main.css"],

  experimental: { payloadExtraction: false },

  runtimeConfig: {
    process: {
      browser: true,
      client: true,
    },
    browser: {},
    client: {},
    public: {
      isClient: true,
    },
  },

  modules: [
    // ...
    [
      "@pinia/nuxt",
      {
        autoImports: [
          // automatically imports `defineStore`
          "defineStore", // import { defineStore } from 'pinia'
          // automatically imports `defineStore` as `definePiniaStore`
          ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
        ],
      },
    ],
    ["@vueuse/nuxt", {}],
  ],
  //buildModules: ["@pinia/nuxt"],
  alias: {
    "./runtimeConfig": "./runtimeConfig.browser",
  },

  //
  plugins: [{ src: "@/plugins/amplify.ts", mode: "client" }],
  vite: {
    // temp-fix for dev, it breaks build for now (see: https://github.com/nuxt/framework/issues/4916)
    define: {
      // global: {}
      "window.global": {},
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  build: {},

  // target: "static"
});

