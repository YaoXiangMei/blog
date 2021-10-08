import path from 'path'
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// import Components from 'unplugin-vue-components/vite'
export default {
  base: '/blog/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  plugins: [
    // Components({
    //   resolvers: [
    //     ElementPlusResolver(),
    //   ],
    // }),
  ],
}
