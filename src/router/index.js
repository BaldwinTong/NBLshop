import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = r => require.ensure([], () => r(require('../views/Home')), 'Home');
const Mine = r => require.ensure([], () => r(require('../views/Mine')), 'Mine');
import About from '../views/About.vue'

Vue.use(VueRouter);
// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//     return originalPush.call(this, location).catch(err => err)
// }
export default new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/mine',
            name: 'Mine',
            component: Mine
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },

    ],
})

// export default { router }