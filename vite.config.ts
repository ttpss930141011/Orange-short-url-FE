import { defineConfig, loadEnv, ConfigEnv, UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
// import viteSvgIcons from 'vite-plugin-svg-icons'
// import { createHtmlPlugin } from 'vite-plugin-html'
// import viteCompression from 'vite-plugin-compression'
// import eslintPlugin from 'vite-plugin-eslint'
// import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { wrapperEnv } from './src/utils/getEnv'

// @see: https://vitejs.dev/config/
export default defineConfig((mode: ConfigEnv): UserConfig => {
  const env = loadEnv(mode.mode, process.cwd())
  const viteEnv = wrapperEnv(env)
  console.log('viteEnv', viteEnv)
  return {
    base: './',
    // alias config
    resolve: {
      alias: {
        '@': resolve(__dirname, './src')
      }
    },
    // global css
    css: {
      preprocessorOptions: {
        less: {
          // modifyVars: {
          // 	"primary-color": "#1DA57A",
          // },
          javascriptEnabled: true,
          additionalData: `@import "@/styles/var.less";`
        }
      }
    },
    // server config
    server: {
      host: '0.0.0.0',
      port: viteEnv.VITE_PORT,
      open: viteEnv.VITE_OPEN,
      cors: true,
      https: false,
      proxy: {
        '/api': {
          target: 'http://localhost:20201/',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    },
    // plugins
    plugins: [
      react()
      // createHtmlPlugin({
      //   inject: {
      //     data: {
      //       title: viteEnv.VITE_GLOB_APP_TITLE
      //     }
      //   }
      // }),
      // // * 使用 svg 图标
      // createSvgIconsPlugin({
      //   iconDirs: [resolve(process.cwd(), 'src/assets/icons')],
      //   symbolId: 'icon-[dir]-[name]'
      // }),
      // // * EsLint 报错信息显示在浏览器界面上
      // eslintPlugin(),
      // // * gzip compress
      // viteEnv.VITE_BUILD_GZIP &&
      //   viteCompression({
      //     verbose: true,
      //     disable: false,
      //     threshold: 10240,
      //     algorithm: 'gzip',
      //     ext: '.gz'
      //   })
    ],
    esbuild: {
      pure: viteEnv.VITE_DROP_CONSOLE ? ['console.log', 'debugger'] : []
    },
    // build configure
    build: {
      outDir: 'dist',
      // esbuild 打包更快，但是不能去除 console.log，去除 console 使用 terser 模式
      minify: 'esbuild',
      // minify: "terser",
      // terserOptions: {
      // 	compress: {
      // 		drop_console: viteEnv.VITE_DROP_CONSOLE,
      // 		drop_debugger: true
      // 	}
      // },
      assetsDir: 'static/assets',
      rollupOptions: {
        output: {
          // Static resource classification and packaging
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
        }
      }
    }
  }
})
