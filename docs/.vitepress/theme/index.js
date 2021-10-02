import DefaultTheme from 'vitepress/theme'
import Layout from './components/Layout.vue'
import { ElIcon } from 'element-plus'
import Comment from '@/components/comment/index.vue'
import './custom.css'
import 'element-plus/theme-chalk/index.css'
import 'tailwindcss/tailwind.css'
console.log(Comment)
export default {
    ...DefaultTheme,
    Layout,
    enhanceApp({ app, router }) {
      app.use(ElIcon)
      app.component('Comment', Comment)
    }
}
