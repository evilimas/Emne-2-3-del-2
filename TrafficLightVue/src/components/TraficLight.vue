<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ text: string }>()

const colors : string[][] = [[gray, gray, green], [gray, yellow, gray], [red, gray, gray], [red, yellow, gray]]



function showGreen() {
            return /*HTML*/`
                <div id="trafficLight" @click="showYellow()">
                    <div class="light" style="background-color: gray;"></div>
                    <div class="light" style="background-color: gray;"></div>
                    <div class="light" style="background-color: green;"></div>            
                </div>
            `;
        }

        function showYellow() {
            return /*HTML*/`
                <div id="trafficLight" @click="showRed()">
                    <div class="light" style="background-color: gray;"></div>
                    <div class="light" style="background-color: yellow;"></div>
                    <div class="light" style="background-color: gray;"></div>            
                </div>
            `;
        }

        function showRed() {
            return /*HTML*/`
                <div id="trafficLight" @click="showRedYellow()">
                    <div class="light" style="background-color: red;"></div>
                    <div class="light" style="background-color: gray;"></div>
                    <div class="light" style="background-color: gray;"></div>            
                </div>
            `;
        }

        function showRedYellow() {
            return /*HTML*/`
                <div id="trafficLight" @click="showGreen()">
                    <div class="light" style="background-color: red;"></div>
                    <div class="light" style="background-color: yellow;"></div>
                    <div class="light" style="background-color: gray;"></div>            
                </div>
            `;
        }


</script>

<template>
  <div>
    <h1>{{ text }}</h1>
    <div>
      <div class="yellow" id="trafficLight" @click="showYellow()">
                    <div class="light" style="background-color: gray;"></div>
                    <div class="light" style="background-color: gray;"></div>
                    <div class="light" style="background-color: green;"></div>            
                </div>


    </div>

  </div>

</template>

<style scoped>
   #trafficLight {
            display: flex;
            flex-direction: column;
            width: 3rem;
            height: 10rem;
            background-color: black;
            padding: 1rem;
            gap: 1rem;
        }

        div.light {
            border-radius: 50%;
            width: 3rem;
            height: 3rem;
        }
</style>
