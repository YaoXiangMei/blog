import DefaultTheme from 'vitepress/theme'
import Layout from './components/Layout.vue'
import { ElIcon } from 'element-plus'
import './custom.css'
import 'element-plus/theme-chalk/index.css'
import 'tailwindcss/tailwind.css'
export default {
    ...DefaultTheme,
    Layout,
    enhanceApp({ app, router }) {
      app.use(ElIcon)
    }
}
