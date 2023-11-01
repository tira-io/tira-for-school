// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

/*
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
      path: '/',
      name: 'Home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: () => import('./components/HelloWorld.vue')
    },
    {
      path: '/Test_1',
      name: 'Test_1',
      component: () => import('./components/Test_1.vue')
    }
  ];

const router = new VueRouter({
  routes,
  mode: 'history' // This removes the '#' from URLs
});

export default router;
*/
