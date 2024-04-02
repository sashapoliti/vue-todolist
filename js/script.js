import { toDo } from "./data.js";

const { createApp } = Vue;

createApp({
  data() {
    return {
      toDo,
    };
  },
  methods: {
    toggleDone(id) {
      console.log("Toggle done method called");
      const index = this.toDo.findIndex((el) =>  el.id === id); //trovo index corrispondente a id
      
      if (index !== -1) { this.toDo[index].done = !this.toDo[index].done; }; //controllo se l'elemento è presente e cambio
    },
    removeItem(id) {
      console.log("Remove method called");
      const index = this.toDo.findIndex((el) =>  el.id === id); //trovo index corrispondente a id

      if (index !== -1) { this.toDo.splice(index, 1); }; //controllo se l'elemento è presente ed elimino
    }
  },
  computed: {},
  mounted() {},
}).mount("#app");
