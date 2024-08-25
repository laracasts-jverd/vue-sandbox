<script setup>
import Child from "@/components/Child.vue";
import { ref, provide } from "vue";

let name = ref('John Doe');
provide('name', {
  name: 'John Doe',
  changeName: (newName) => name.value = newName
});
</script>

<template>
  <main>
    <!-- Using provide/inject to avoid props drilling in multiple component levels -->
     <div>
      <label>name: {{ name }}</label>
      <Child />
     </div>
  </main>
</template>
