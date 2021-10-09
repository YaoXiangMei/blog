import DefaultTheme from 'vitepress/theme'
import Layout from './components/Layout.vue'
import ElementPlus from 'element-plus'
import Comment from '@/components/comment/Index.vue'
import './custom.css'
import 'element-plus/theme-chalk/index.css'
import 'tailwindcss/tailwind.css'
import './tailwind.css'
export default {
    ...DefaultTheme,
    Layout,
    enhanceApp({ app }) {
      app.component('Comment', Comment)
      app.use(ElementPlus)
    }
}
