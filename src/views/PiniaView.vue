<script setup>
import { useCounterStore } from '@/stores/counterStore.js';

let counter = useCounterStore();
</script>

<template>
  <main>
    <h1>{{ counter.count }}</h1>
    <button @click="counter.increment">Increment</button>
  </main>
</template>
