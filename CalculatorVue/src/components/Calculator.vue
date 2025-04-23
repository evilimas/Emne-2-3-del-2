<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ header: string }>()

// type Display = {
//   display: string | number
// }

const display = ref<number | null>(null)

function addToDisplay(number : number){
    display.value += number 
}

function clearDisplay(){
    display.value = null;
}

function calculate(){
    display.value = eval(display.value);
}

</script>

<template>
  
  <div id="container">
    <h1>{{ header }}</h1>
        <input id="display" v-model="display" readonly>
        <div id="keys">
            <button @click="addToDisplay('+')">+</button>
            <button @click="addToDisplay('7')">7</button>
            <button @click="addToDisplay('8')">8</button>
            <button @click="addToDisplay('9')">9</button>
            <button @click="addToDisplay('-')">-</button>
            <button @click="addToDisplay('4')">4</button>
            <button @click="addToDisplay('5')">5</button>
            <button @click="addToDisplay('6')">6</button>
            <button @click="addToDisplay('*')">*</button>
            <button @click="addToDisplay('1')">1</button>
            <button @click="addToDisplay('2')">2</button>
            <button @click="addToDisplay('3')">3</button>
            <button @click="addToDisplay('/')">/</button>
            <button @click="addToDisplay('0')">0</button>
            <button @click="calculate()">=</button>
            <button @click="clearDisplay()">C</button>
        </div>
    </div>

  
</template>

<style scoped>

#container {
            font-family: "Arial", sans-serif;
            max-width: 500px;
            border-radius: 15px;
            border: 1px solid black;
            padding: 15px;
            background-color: rgb(51, 51, 176);
            overflow: hidden;
        }

        #display {
            width: 90%;
            padding: 20px;
            border-radius: 10px;
            text-align: left;
            background-color: rgb(20, 19, 54);
            color: aliceblue;
            font-size: 2em;
        }

        #keys {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
            padding: 25px;
        }

        button {
            height: 3em;
            width: 3em;
            border-radius: 40px;
            border: none;
            color: aliceblue;
            background-color: rgb(20, 19, 54);
            font-size: 2em;
            font-weight: bold;
            cursor: pointer;
        }
        button:hover{
            background-color: rgb(69, 84, 148);
        }

</style>
