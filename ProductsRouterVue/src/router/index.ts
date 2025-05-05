// import { createRouter } from 'vue-router';

import ProductDetail from '../components/ProductDetail.vue';
import ProductsList from '../components/ProductsList.vue';
import { createWebHistory, createRouter } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/product',
      component: ProductsList,
    },
    {
      path: '/product/:id',
      component: ProductDetail,
      props: true,
    },
  ],
});

export default router;
