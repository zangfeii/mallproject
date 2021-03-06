import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () =>
  import ('../views/home/Home')
const Cart = () =>
  import ('../views/cart/Cart.vue')
const Profile = () =>
  import ('../views/profile/Profile.vue')
const Category = () =>
  import ("../views/category/Category.vue")
const Detail = () =>
  import ('../views/detail/detail.vue')

Vue.use(VueRouter)
const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/detail/:iid',
    component: Detail,
    meta: {
      pageTitle: '商品详情',
      keepAlive: true
    }
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router