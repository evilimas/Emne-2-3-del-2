<template>
  <main>
    <div v-if="product">
      <h1>{{ product.name }}</h1>
      <p>Pris: {{ product.price }}</p>
      <p>Details: {{ product.description }}</p>
      <button @click="router.push('/product')">Back to products list</button>
      <button @click="goToNextProduct">Next product</button>
    </div>
    <p v-else>Product does not exist</p>
  </main>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getProductById } from '../products';
import type { Product } from '../products';

const route = useRoute();
const router = useRouter();
const product = ref<Product | undefined>();

watch(
  () => route.params.id,
  (id) => {
    product.value = getProductById(parseInt(id as string));
  },
  { immediate: true }
);

function goToNextProduct(): void {
  const nextId = product.value.id + 1;
  router.push({ name: 'product', params: { id: nextId } });
}
</script>

<style></style>
