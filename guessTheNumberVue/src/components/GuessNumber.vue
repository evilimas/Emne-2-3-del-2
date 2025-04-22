<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ text: string }>()

const secretNumber = ref(Math.ceil(Math.random() * 100))
const guessNumber = ref<number | null>(null)

function newGame(){
  secretNumber.value = Math.ceil(Math.random() * 100)
}
</script>

<template>
  <h2>{{text}}</h2>
  <p>
    {{ secretNumber }}
  </p>
  <p>
    Your guess {{ guessNumber }}
  </p>
  <p v-if="guessNumber < secretNumber">To Low</p>
  <p v-else-if="guessNumber > secretNumber">To High</p>
  <p v-else>You are correct</p>
  
  <!-- <button @click="guess()">Tipp</button>       -->
  <input type="number" v-model.number="guessNumber" />
  <button @click="newGame()">Start new game</button>  
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
