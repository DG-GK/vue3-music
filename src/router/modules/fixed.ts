const Layout = () => import('@/layout/index.vue');
const Home = () => import('@/views/home/index.vue');
const Selected = () => import('@/views/selected/index.vue');

export default [
  {
    path: '/home',
    component: Layout,
    name: 'home',
    meta: {
      title: '为我推荐',
    },
    icon: 'icon-home',
    children: [
      {
        path: '',
        component: Home,
      },
    ],
  },
  {
    path: '/selected',
    component: Layout,
    name: 'selected',
    meta: {
      title: '云音乐精选',
    },
    icon: 'icon-jingxuanyoupin',
    children: [
      {
        path: '',
        component: Selected,
      },
    ],
  }
]
