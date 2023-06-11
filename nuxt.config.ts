export default defineNuxtConfig({
  sourcemap: {
    client: true,
    server: false
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
    ["@vueuse/nuxt"],
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
    build: {
      chunkSizeWarningLimit: 2000
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },


  // target: "static"
});

