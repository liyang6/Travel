import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home/Home.vue'
import City from '../pages/city/City.vue'

Vue.use(VueRouter);

var routes = [
  { path: "/",name:"Home",component: Home },
  { path: "/city",name:"City",component: City }
];

var router = new VueRouter({ routes });

export default router
