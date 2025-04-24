<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const secretText = ref<string>('TEE')
const currentText = ref<string>('___')
const guessedLetter = ref<string>('')

function onInput(event: Event){
  const target = event.target as HTMLInputElement | null
  if(target){
    guessedLetter.value = target.value.toUpperCase()
  }
}


function guess(){
  currentText.value = evaluateHangman(secretText.value, currentText.value, guessedLetter.value);
  guessedLetter.value = ''
}

        
function evaluateHangman(secretText : string, currentText : string, guessedLetter : string) : string {
  const index = secretText.indexOf(guessedLetter);
  if (index == -1) return currentText;
  const currentTextBeforeGuessedLetter = currentText.substring(0, index);
  const currentTextAfterGuessedLetter = currentText.substring(index + 1);
  const secretTextAfterGuessedLetter = secretText.substring(index + 1);
  return currentTextBeforeGuessedLetter + guessedLetter
  + evaluateHangman(secretTextAfterGuessedLetter, currentTextAfterGuessedLetter, guessedLetter);
}

function newGame(){
  secretText.value = 'COP'
  currentText.value = '___'

}

</script>

<template>
  <h1>{{ msg }}</h1>

  <h1>{{currentText}}</h1>
  <div v-if="secretText==currentText">
    Løst! <button @click="newGame()">New game!</button>
  </div>
    <input type="text" :value="guessedLetter" @input="onInput" maxlength="1" placeholder="Write only one letter"/>
    <button @click="guess()">Guess</button>

  
</template>

<style scoped>

</style>
