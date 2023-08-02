import EN_US from './locale/en.json'
import AR_IQ from './locale/ar.json'
import KUSA_KU from './locale/kr_so.json'
export default defineNuxtConfig({
    ssr: false,
    // @ts-ignore
    swr: true,
    buildModules: [
        '@nuxtjs/compression'
    ],
    compression: {
        threshold: 10240,
        gzip: {
            level: 9
        },
        brotli: {
            quality: 11
        }
    },
    optimize: {
        minify: true,
        target: 'es2018',
        brotli: true,
        differential: true,
        preload: true
    },
    serverMiddleware: ['compression'],
    terser: {
        terserOptions: {
            compress: {
                drop_console: true
            }
        }
    },
    target: 'static',
    runtimeConfig: {
        apiSecret: '123',
        public: {
          apiBase: '/api'
        }
      },
    experimental: {
        reactivityTransform: false,
    },
      modules: [
          'nuxt-windicss',
          'nuxt-headlessui',
          'nuxt-icon',
          '@vueuse/nuxt',
          '@nuxtjs/i18n',
      ],
    i18n: {
        locales: [
            {
                code: 'EN_US',
                name: 'English',
                iso: 'en-US',
                files: ['en.JSON']
            },
            {
                code: 'AR_IQ',
                name: 'Arabic',
                iso: 'ar-IQ',
                files: ['ar.JSON']
            },
            {
                code: 'KUSA_KU',
                iso: 'ku-KU',
                name: 'Kurdish (Sorani)',
                files: ['kr_so.JSON']
            },
        ],
        defaultLocale: 'EN_US',
        langDir: "locale/",
        lazy: false,
        vueI18n: {
            messages: {
                'EN_US': EN_US,
                'AR_IQ': AR_IQ,
                'KUSA_KU': KUSA_KU,
            }
        }
    },
    plugins: [
        '~/plugins/i18n.ts',
    ],
})