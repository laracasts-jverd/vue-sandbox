<script setup>
import TabbableTextarea from "@/components/TabbableTextarea.vue";
import { useStorage } from "@/composables/useStorage";
import { ref } from "vue";

let food = useStorage('food');
let comment = ref('initial textarea value');
</script>

<template>
  <main>
    <!-- Composables usage -->
    <p>
      What is your favorite food? <input type="text" v-model="food">
    </p>

    <!-- Refactor defineProps & defineEmitd -->
    <form>
      <TabbableTextarea v-model="comment" style="width: 100%; height: 300px;" />
    </form>

  </main>
</template>
