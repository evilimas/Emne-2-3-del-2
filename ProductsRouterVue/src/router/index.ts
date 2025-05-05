// import { createRouter } from 'vue-router';

import ProductDetail from '../components/ProductDetail.vue';
import ProductsList from '../components/ProductsList.vue';
import { createWebHistory, createRouter } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/products',
      name: 'products',
      component: ProductsList,
    },
    {
      path: '/product/:id',
      name: 'product',
      component: ProductDetail,
      props: true,
    },
  ],
});

export default router;
