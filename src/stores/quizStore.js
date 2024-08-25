import { reactive } from "vue";

export let state = reactive({
  name: 'This is a quiz',
  questions: [],
  setName(name) {
    state.name = name;
  },
});
