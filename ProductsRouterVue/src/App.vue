<script setup lang="ts"></script>

<template>
  <div>
    <nav>
      <RouterLink to="/product">Products</RouterLink>
      <RouterLink to="/product/:id"></RouterLink>
    </nav>
    <RouterView />
  </div>
</template>

<style scoped></style>
