import { define } from '../utils/types'
import type { Theme } from 'vitepress'

import VPApp, { globals, NotFound } from '../vitepress'

import ElementPlus from 'element-plus'
import * as ElementPlusIcons from '@element-plus/icons-vue'

import './style.css'
import 'uno.css'

export default define<Theme>({
  NotFound,
  Layout: VPApp,
  enhanceApp: ({ app }) => {
    app.use(ElementPlus)

    globals.forEach(([name, Comp]) => {
      app.component(name, Comp)
    })
    for (const [key, Comp] of Object.entries(ElementPlusIcons)) {
      app.component(key, Comp)
    }
  },
})