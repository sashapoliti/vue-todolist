import { toDo } from "./data.js";

const { createApp } = Vue;

createApp({
  data() {
    return {
      toDo,
      itemText : '',
      done : ''
    };
  },
  methods: {
    toggleDone(id) {
      /* console.log("Toggle done method called"); */
      const index = this.toDo.findIndex((el) =>  el.id === id); //find index
      
      if (index !== -1) { this.toDo[index].done = !this.toDo[index].done; }; //control
    },
    removeItem(id) {
      /* console.log("Remove method called"); */
      const index = this.toDo.findIndex((el) =>  el.id === id); //find index

      if (index !== -1) { this.toDo.splice(index, 1); }; //control
    },
    addItem() {
      const newItem = {
        id : null,
        text : this.itemText,
        done : false
      };
      const result = this.toDo.reduce((acc, element) => {
        return element.id > acc ? element.id : acc;
      }, 0); //reduce for max value
      newItem.id = result + 1;
      this.toDo.push(newItem);
      this.itemText = '';
    }
  },
  computed: {
    filteredToDo() {
      return this.toDo.filter((element) => {
        if (this.done === '') {
          return true
        } else if (this.done === 'false') {
          return element.done === false
        } else if (this.done === 'true') {
          return element.done === true
        }
      })
    }
  },
  mounted() {},
}).mount("#app");
