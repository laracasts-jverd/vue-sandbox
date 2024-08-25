<script setup>
import { inject } from 'vue';
let { name, changeName } = inject('name');
let emit = defineEmits(['update:name']);
</script>

<template>
  <input
    type="text"
    :value="name"
    @input="changeName($event.target.value)"
  >
</template>
