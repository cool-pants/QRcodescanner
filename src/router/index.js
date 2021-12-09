import { createRouter, createWebHistory } from "vue-router";
import Logged from '../components/Logged.vue'
import App from '../App.vue'

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Logged,
    },
    // {
    //     path: '/home',
    //     name: 'Home',
    //     component: ,
    // },
]

const router = createRouter({ history:createWebHistory(), routes })

export default router