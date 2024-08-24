<script setup>
import TabbableTextarea from "@/components/TabbableTextarea.vue";
import { useStorage } from "@/composables/useStorage";
import { ref } from "vue";

let food = useStorage('food');
let comment = ref('initial textarea value');
</script>

<template>
  <main>
    <!-- use useStorage composables to keep the food value in sync with localStorage -->
    <p>
      What is your favorite food? <input type="text" v-model="food">
    </p>

     <!-- Keeping the textarea in sync with the parent component's state -->
    <form>
      <label for="comment">Comment: {{ comment }}</label>
      <TabbableTextarea v-model:comment="comment" style="width: 100%; height: 300px;" />
    </form>

  </main>
</template>
