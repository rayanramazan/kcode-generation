// @ts-ignore
export default defineAppConfig({
    nuxtIcon: {
        size: '50px', // default <Icon> size applied
        class: 'icon', // default <Icon> class applied
        aliases: {
            'nuxt': 'logos:nuxt-icon',
        }
    },
    title: 'Hello Nuxt',
    theme: {
        dark: true,
        colors: {
            primary: '#ff0000'
        }
    },
    windiCSS: {
        safelist: 'prose prose-sm m-auto',

    }
})
