import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home/Home.vue'

Vue.use(VueRouter);

var routes = [
  { path: "/", component: Home },
];

var router = new VueRouter({ routes });

export default router
