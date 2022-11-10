import { Navigate, useRoutes } from 'react-router-dom'
import { RouteObject } from '@/routers/interface'
// import { RouteObject } from 'react-router-dom'
import Login from '@/views/login/index'

// * 导入所有router
const metaRouters = import.meta.globEager('./modules/*.tsx')

// * 处理路由
export const routerArray: RouteObject[] = []

console.log(metaRouters)
Object.keys(metaRouters).forEach((item) => {
  Object.keys(metaRouters[item]).forEach((key: any) => {
    routerArray.push(...metaRouters[item][key])
  })
})

export const rootRouter: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/login" />
  },
  {
    path: '/login',
    element: <Login />,
    meta: {
      requiresAuth: false,
      title: '登录页',
      key: 'login'
    }
  },
  ...routerArray,
  {
    path: '*',
    element: <Navigate to="/404" />
  }
]

const Router = () => useRoutes(rootRouter)

export default Router