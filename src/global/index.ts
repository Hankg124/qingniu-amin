
import type { App } from 'vue'
import GlobalElementPlus from './ElementPlus'
import GlobalElementPlusIcon from './ElementPlusIcon'


export const Global = (app: App) => {
    app.use(GlobalElementPlus)
    app.use(GlobalElementPlusIcon)
}
