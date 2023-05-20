import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  modules: [
    '@nuxt/image-edge'
  ],
  content: {
    sources: {
      content: {
        driver: 'fs',
	      base: resolve('../content')
      }
    }
  },
  css: [
    resolve('./assets/css/main.css')
  ],
  dir: {
    public: '../public'
  }
})
