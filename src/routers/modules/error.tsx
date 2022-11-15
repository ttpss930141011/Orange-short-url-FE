import React from 'react'
import lazyLoad from '@/routers/utils/lazyLoad'
import { RouteObject } from '@/routers/interface'

// 錯誤頁面模塊
const errorRouter: Array<RouteObject> = [
  {
    path: '/403',
    element: lazyLoad(React.lazy(() => import('@/components/ErrorMessage/403'))),
    meta: {
      requiresAuth: true,
      title: '403頁面',
      key: '403'
    }
  },
  {
    path: '/404',
    element: lazyLoad(React.lazy(() => import('@/components/ErrorMessage/404'))),
    meta: {
      requiresAuth: false,
      title: '404頁面',
      key: '404'
    }
  },
  {
    path: '/500',
    element: lazyLoad(React.lazy(() => import('@/components/ErrorMessage/500'))),
    meta: {
      requiresAuth: false,
      title: '500頁面',
      key: '500'
    }
  }
]

export default errorRouter
