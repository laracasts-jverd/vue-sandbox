<script setup>
import { state } from "@/stores/quizStore";
</script>

<template>
  <main>
    <!-- Using the global state to keep the name in sync with the parent component's state -->
    <div>
      <h5>{{ state.name }}</h5>
      <button @click="state.name = 'Quiz name has been changed'">Change name</button>
    </div>
  </main>
</template>
