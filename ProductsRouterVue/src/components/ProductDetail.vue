<template>
  <main>
    <div>
      <h1>{{ product?.name }}</h1>
      <p>Pris: {{ product?.price }}</p>
      <p>Details: {{ product?.description }}</p>
      <button @click="router.push('/product')">Back to products list</button>
      <button @click="goToNextProduct">Next product</button>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { products, getProductById } from '../products';

const route = useRoute();
const router = useRouter();

const product = ref();

watch(
  () => route.params.id,
  (id) => {
    product.value = getProductById(id);
  }
);

function goToNextProduct() {}
</script>

<style></style>
