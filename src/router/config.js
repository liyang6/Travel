import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/pages/home/Home.vue'

Vue.use(VueRouter);

var routes = [
  { path: "/home", component: Home },
  { path: "*", redirect: "/home" }
];

var router = new VueRouter({ routes });

export default router
