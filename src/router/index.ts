import { createRouter, createWebHashHistory } from 'vue-router'
import fixed from './modules/fixed.ts'

export const fixedRoutes = [...fixed]

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