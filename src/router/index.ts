import { createRouter, createWebHashHistory } from 'vue-router'
import home from './modules/home.ts'

export const fixedRoutes = home

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            redirect: "/home"
        },
        ...fixedRoutes
    ]
})

export default router