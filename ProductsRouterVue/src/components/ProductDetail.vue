<template>
  <main>
    <div>
      <h1>{{ product?.name }}</h1>
      <p>{{ product?.price }}</p>
      <p>{{ product?.description }}</p>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { products, getProductById } from '../products';

const route = useRoute();
const router = useRouter();
const id = parseInt(route.params.id);
const product = getProductById(id);
</script>

<style></style>
