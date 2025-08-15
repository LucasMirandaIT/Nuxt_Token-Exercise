// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["nuxt-auth-utils"],
  runtimeConfig: {
    public: {
      apiURL: "https://689e4a983fed484cf876cea8.mockapi.io/api",
    },
  },
  app: {
    head: {
      title: "Nuxt Auth Utils Example",
    },
  },
  devServer: {
    port: 8080,
    https: true,
  },
});
