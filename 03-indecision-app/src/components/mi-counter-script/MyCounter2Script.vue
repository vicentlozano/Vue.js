<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>
    <div>
      <button class="p-5 bg-blue-500 rounded hover:bg-blue-700 mr-2"  @click="counter++">+1</button>
      <button class="p-5 bg-blue-500 rounded hover:bg-blue-700 mr-2"  @click="counter--">-1</button>
    </div>
  </section>
</template>
<script lang="ts" src="./MyCounter2Script"></script>
