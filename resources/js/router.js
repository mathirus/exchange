import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Error from './views/Error.vue'
import CoinDetail from './views/CoinDetail.vue'



Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',

    routes:[
     {
        path:'/',
        name:'Home',
        component: Home
     },
     {
        path:'/About',
        name:'About',
        component: About
     },
     {
      path:'/coin/:id',
      name:'coin-detail',
      component: CoinDetail
     },
     {
        path:'*',
        name:'Error',
        component: Error
     }

    ]
})