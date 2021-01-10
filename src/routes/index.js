import { loadable } from '@/utils'

const routes = [
  { 
    path: '/home',
    exact: true,
    name: 'Home',
    component: loadable(() => import(/* webpackChunkName: 'Home' */ '@/views/Home'))
  },
  { 
    path: '/components',
    exact: true,
    name: 'Components',
    component: loadable(() => import(/* webpackChunkName: 'Components' */ '@/views/Components'))
  },
  { 
    path: '/components/editor',
    exact: true,
    name: 'Editor',
    component: loadable(() => import(/* webpackChunkName: 'Editor' */ '@/views/Components/Editor'))
  },
  { 
    path: '/components/video',
    exact: true,
    name: 'Video',
    component: loadable(() => import(/* webpackChunkName: 'Video' */ '@/views/Components/Video'))
  },
  { 
    path: '/components/verify',
    exact: true,
    name: 'Verify',
    component: loadable(() => import(/* webpackChunkName: 'Verify' */ '@/views/Components/Verify'))
  },
  { 
    path: '/error-page',
    exact: true,
    name: 'ErrorPage',
    component: loadable(() => import(/* webpackChunkName: 'ErrorPage' */ '@/views/ErrorPage'))
  }
]

export default routes