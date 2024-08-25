<script setup>
import TabbableTextarea from "@/components/TabbableTextarea.vue";
import { ref } from "vue";

let comment = ref('initial textarea value');
</script>

<template>
  <main>
     <!-- Keeping the textarea in sync with the parent component's state -->
    <form>
      <label for="comment">Comment: {{ comment }}</label>
      <TabbableTextarea v-model:comment="comment" style="width: 100%; height: 300px;" />
    </form>
  </main>
</template>
