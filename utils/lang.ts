import {useI18n} from "vue-i18n";

export interface ILocales {
    [key: string]: {
        name: string
        favicon: string,
        code: string,
        iso: string,
        status: string,
        direction: string,
    }
}


export const availableLocales: ILocales = {
    AR_IQ: {name: 'العربية', iso: 'EN_US', code: 'AR_IQ', status: '1', favicon: 'storage/1/ar.jpg', direction: 'rtl'},
    EN_US: {name: 'English', iso: '', code: 'EN_US', status: '1', favicon: 'storage/1/en.jpg', direction: 'ltr'},
    KUKA_KU: {
        name: 'Kurdish (Kurmanji)',
        iso: 'en-us',
        code: 'KUKA_KU',
        status: '1',
        favicon: 'storage/1/en.jpg',
        direction: 'ltr'
    },
    KUSA_KU: {
        name: 'Kurdish (Sorani)',
        iso: 'en-us',
        code: 'KUSA_KU',
        status: '1',
        favicon: 'storage/1/en.jpg',
        direction: 'ltr'
    }
};

// {
export function LanguageManager() {
    const {locale} = useI18n()
    const localeUserSetting = useCookie('locale')
    const getSystemLocale = (): string => {
        try {
            const foundLang = window
                ? window.navigator.language.substring(0, 2)
                : 'EN_US'
            return availableLocales[foundLang] ? foundLang : 'EN_US'
        } catch (error) {
            return 'EN_US'
        }
    }
    const getUserLocale = (): string =>
        localeUserSetting.value || getSystemLocale()

    // state
    const localeSetting = useState<string>('locale.setting', () =>
        getUserLocale()
    )
    // watchers
    watch(localeSetting, (localeSetting) => {
        locale.value = localeSetting
        localeUserSetting.value = localeSetting
        // navigateTo('/')
    })

    // init locale
    const init = () => {
        localeSetting.value = getUserLocale()
    }
    locale.value = localeSetting.value
    onBeforeMount(() => init())

    return {
        localeSetting,
        init,
    }
}
