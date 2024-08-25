<script setup>
import { useStorage } from "@/composables/useStorage";

let food = useStorage('food');
</script>

<template>
  <main>
    <!-- use composables to keep the food value in sync with localStorage -->
    <p>
      What is your favorite food?
      <input type="text" v-model="food">
    </p>
  </main>
</template>
