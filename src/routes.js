import Profile from './components/Profile'
import Signup from './components/Signup'
import Login from './components/Login'
// Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
export const routes = [
    {
        path: '/',
        component: Signup,
    },
    {
        path: '/profile',
        name: 'profile',
        component: Profile,
        meta: {requireAuth: true}
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/signup',
        name: 'signup',
        component: Signup,
    },
]
