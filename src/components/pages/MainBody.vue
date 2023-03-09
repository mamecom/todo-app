<template>
    <main id="main-display">
        <div id="addTodo">
            <MasterText class="task" :value="data" @inputValue="inputData" placeholder="タスクを記入"></MasterText>
            <MasterButton class="add-Button" @click="showModal()">タスクを追加</MasterButton>
            <MasterModal
                v-if=modal
                @close-modal="getTodoDay"
            >
            </MasterModal>
            <div id="todoCard">
                <TodoCard 
                >今日のタスク</TodoCard>
                <TodoCard>今日以外のタスク</TodoCard>
            </div>
        </div>
    </main>
</template>
  
<script>
  import MasterButton from '../parts/MasterButton.vue';
  import MasterText from '../parts/MasterText.vue';
  import MasterModal from '../parts/MasterModal.vue';
  import TodoCard from '../parts/TodoCard.vue';
  import { ref } from 'vue'

  let id = 3
  
  export default {
    data() {
        return {
            data: "",
            newTodoText: "",
            modal: false,
            tododay: '',
        }
    },
    components: {
        MasterButton,
        MasterText,
        MasterModal,
        TodoCard,
    },
    methods: {
        inputData(value) {
            this.newTodoText = value;
            // todos.value.push({text: this.showInputData})
        },
        showModal() {
            this.modal = true;
        },
        getTodoDay($event) {
            this.modal = false;
            this.tododay= $event;
            const newTodo = ref({ id: id, text: this.newTodoText ,day: "2023/2/28" , complete: false })
            this.addTodo(newTodo);
            
            // if (this.todoDay = "today") {
                // var today = new Date();
                // var day = today.getDate();
                // var month = today.getMonth() + 1; 
                // var year = today.getFullYear();
                // console.log(`${year}/${month}/${day}`);
                // this.$store.state.day = true;
            // }
        },
        addTodo(todo) {
            console.log(todo)
            this.$store.dispatch('addTodo', todo)
        }
    },
    computed: {
        todos() {
            return this.$store.state.todos;
        }
    }
  }
  </script>
  
  <style>
    #main-display {
      text-align: center;
    }

    #addTodo {
        display: block;
        padding-top: 100px;
    }
  
    .task {
      font-size: 100%;
      padding: 0 10px;
      box-sizing: border-box;
      margin-right: 37px;
      border: 1px solid #000000;
      width: 349px;
      height: 55px;
    }
    .add-Button {
      display: inline-block;
      font-size: 19px;
      padding: 12px 28px;
      background-color: #D7E9B9;
      border: none;
      border-radius: 5px;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }

    #todoCard {
        display: flex;
        justify-content: space-around;
        padding: 100px;
    }
  
  </style>