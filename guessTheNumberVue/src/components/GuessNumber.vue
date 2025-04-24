<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ text: string }>()

const secretNumber = ref(Math.ceil(Math.random() * 100))
const guessNumber = ref<number | null>(null)

function newGame(){
  secretNumber.value = Math.ceil(Math.random() * 100)
  guessNumber.value = null
}

function getText(){
  if(guessNumber.value! < secretNumber.value){
    return 'To Low'
  } else if(guessNumber.value! > secretNumber.value){
    return 'To High'
  } else{
    return 'You are correct'
  }
}
</script>

<template>
  <div>
    <h2>{{text}}</h2>
    <p>
      {{ secretNumber }}
    </p>
    <p>
      Your guess {{ guessNumber }}
    </p>
    <p>{{ getText() }}</p>
    <input type="number" v-model.number="guessNumber" />
    <button @click="newGame()">Start new game</button>  
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
