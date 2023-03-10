import {createRouter, createWebHistory} from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import {useUserStore} from './stores/user'
import Editar from './views/Editar.vue'
const requireAuth = async(to, from, next) => {
    const userStore = useUserStore()
   const user = await userStore.currentUser()
   if(user){
    next()
   }else{
    next('/login')
   }
   userStore.loadingSession = false
}

const routes = [ 
    {path : '/', component : Home ,beforeEnter: requireAuth},
    {path : '/editar/:id', component : Editar ,beforeEnter: requireAuth},
    {path: '/login', component : Login},
    {path: '/register', component : Register},
];

const router = createRouter({
    routes,
    history: createWebHistory()
});

export default router;

