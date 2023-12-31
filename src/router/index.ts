import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Layout from '../views/Layout.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Users from "@/views/Users.vue";
import Links from "@/views/Links.vue";
import Products from "@/views/products/Products.vue";
import ProductForm from "@/views/products/ProductForm.vue";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {path: '/login', component: Login},
  {path: '/register', component: Register},
  {
    path: '',
    component: Layout,
    children: [
      {path: '', redirect: '/users'},
      {path: '/users', component: Users},
      {path: '/users/:id/links', component: Links},
      {path: '/products', component: Products},
      {path: '/products/create', component: ProductForm}
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
