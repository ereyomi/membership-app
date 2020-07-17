import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'
import store from '@/store/index'
import '@fortawesome/fontawesome-free/js/all.min.js'


Vue.use( VueRouter )


export const router = new VueRouter({
    mode: 'history', // short for `routes: routes`
    routes,
})


router.beforeEach( ( to, from, next ) => {
    if ( to.matched.some( record => record.meta.requireAuth ) )
    {
        console.log(store.state.loggedInUser)
        if (!store.state.loggedInUser)
        {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
        } else {
            next()
        } 
    } else
    {
        next()
    }
})

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
    router,
    store,
}).$mount('#app')
