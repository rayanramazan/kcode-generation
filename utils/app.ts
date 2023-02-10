import {LanguageManager} from './lang'

export function AppSetup() {
    // use language manager
    const languageManager = LanguageManager()
    // const setting = setupSetting()
    sessionStorage.clear();
    // vue transition bug handle
    const messages = [
        `Uncaught NotFoundError: Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.`, // chromium based
        `NotFoundError: The object can not be found here.`, // safari
    ]
    if (typeof window !== 'undefined') {
        window.addEventListener('error', (ev) => {
            if (messages.includes(ev.message)) {
                ev.preventDefault()
                window.location.reload()
            }
        })
    }
    // @ts-ignore
    return {
        languageManager,
    }
}