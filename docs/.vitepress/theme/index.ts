// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import ImagePreview from './components/ImagePreview.vue'
import './style.css'
import './blockquote.css'
import './custom-block.css'
import './custom.css'
import './secret.css'
import './watermark.css'
import './watermark.js'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app, router, siteData }) {
    app.component('ImagePreview', ImagePreview)
  }
} satisfies Theme
