// import { createRouter } from 'vue-router';

import ProductDetail from '../components/ProductDetail.vue';
import ProductsList from '../components/ProductsList.vue';

const router = createRouter({
  routes: [
    {
      path: '/product',
      name: 'product',
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
