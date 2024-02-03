import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  modules: [
    // https://github.com/nuxt/image
    '@nuxt/image-edge',
    // https://github.com/nuxt/devtools
    '@nuxt/devtools'
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
  },
  // Fix issue with Nuxt 3.5 under windows
  experimental: {
    watcher: 'chokidar'
  },
})
