import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router"
import Home from "@/views/Home/index.vue"
import Container from "@/components/container/src/index.vue"

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        component: Container,
        children: [
            {
                path: "/",
                component: Home
            },
            {
                path: "/chooseIcon",
                component: () => import("@/views/ChooseIcon/index.vue")
            },
            {
                path: '/chooseArea',
                component: () => import("@/views/ChooseArea/index.vue")
            },
            {
                path:'/trend',
                component:()=>import("@/views/Trend/index.vue")
            },
            {
                path:'/notification',
                component:()=>import("@/views/Notification/index.vue")
            },
            {
                path:"/menus",
                component:()=>import("@/views/Menus/index.vue")
            },
            {
                path:'/progress',
                component:()=>import("@/views/Progress/index.vue")
            }
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router