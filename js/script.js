import { toDo } from "./data.js";

const { createApp } = Vue;

createApp({
  data() {
    return {
      toDo,
    };
  },
  methods: {},
  computed: {},
  mounted() {},
}).mount("#app");
