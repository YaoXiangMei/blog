import path from 'path'
// import styleImport from 'vite-plugin-style-import'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
export default {
  base: '/blog/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
      // vue: 'vue/dist/vue.esm-bundler.js',
    },
  },
  plugins: [
    Components({
      resolvers: [
        ElementPlusResolver(),
      ],
    }),
    // styleImport({
    //   libs: [
    //     {
    //       libraryName: 'element-plus',
    //       resolveStyle: (name) => {
    //         return `element-plus/theme-chalk/${name}.css`
    //       },
    //       resolveComponent: (name) => {
    //         return `element-plus/lib/${name}`
    //       },
    //     },
    //   ],
    // }),
  ],
}
