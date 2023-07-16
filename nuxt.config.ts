// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css:['~/assets/scss/main.scss'],
  runtimeConfig:({
    public:{
      baseUrl: 'https://backend-iteach.karimjonov.uz/api'
    }

  })
})
