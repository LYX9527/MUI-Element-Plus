import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
import vueJsx from '@vitejs/plugin-vue-jsx'
import {resolve} from 'path'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueJsx(),
        AutoImport({
            //引入element plus自动api支持
            resolvers: [ElementPlusResolver()],
            //自动导入vue全家桶
            imports: ['vue', 'vue-router', "vuex"],
            //为true时在项目根目录自动创建
            dts: 'types/auto-imports-vue.d.ts',
        }),
        Components({
            //引入element plus自动api支持 使用二次封装组件需注释掉
            // resolvers: [ElementPlusResolver()],
            //自动加载的组件目录，默认值为 ['src/components']
            dirs: ['src/components'],
            //组件名称包含目录，防止同名组件冲突
            directoryAsNamespace: true,
            //指定类型声明文件，为true时在项目根目录创建
            dts: 'types/components.d.ts',
        })
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, './src')
        },
    },
    server: {
        port: 1234,
        host: true,
    },
    css: {
        // css预处理器
        preprocessorOptions: {
            scss: {
                charset: false,
                additionalData: '@import "./src/assets/scss/index.scss";',
            },
        },
    },
})
