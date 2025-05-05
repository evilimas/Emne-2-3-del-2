<script setup lang="ts">
import { products } from '../products';
</script>

<template>
  <div>
    <h1>ProductList</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        <router-link to="`/product/${product.id}`">{{
          product.name
        }}</router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
