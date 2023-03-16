const { createApp } = Vue;

createApp({
  // creo una lista di todo
  // in modo da eliminare o vedere quelle che ho già stilato

  data() {
    return {
      todos: [
        {
          text: 'Comprare il pane',
          done: false
        },
        {
          text: 'Andare a fare benzina',
          done: false
        },
        {
          text: 'Bagnare le piante',
          done: false
        },
        {
          text: 'Pulire casa',
          done: false
        },
        {
          text: 'Fare il cambio armadio',
          done: false
        },
      ],
      
      // nuova Todo vuota

      newTodo: {
        text: '',
        done: false
      },


    }
  },


  methods: {

    // // toggleTodo
    toggleTodo(todo) {
      console.log(todo);
      
     
      todo.done = !todo.done;

    },

   

    
    deleteTodo(todoIndex) {
      
      // cancella un elemento di un array
      this.todos.splice(todoIndex, 1);

    },

    addTodo() {
    

      
      if(this.newTodo.text == "") {

        alert("non puoi inserire un todo vuoto");

        
      } else {
       
        this.todos.push(this.newTodo);


     
        this.newTodo = {
          text: '',
          done: false
        }

       
      }

      
      

    }

  },

}).mount('#app')