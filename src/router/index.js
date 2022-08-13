import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter)


const router = new VueRouter({
    routes: [
        {
            path: '/home',
            component: () => import('../page/Home.vue')
        },
        {
            path: '',
            redirect: '/detail'
        },
        {
            path: '/detail',
            component: () => import('../page/Detail.vue')
        }
    ]
})

export default router