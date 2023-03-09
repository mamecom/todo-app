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
                <TodoCard>今日のタスク</TodoCard>
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
            judgeDay: 1,
            resultTodoDay: 1,
            date: new Date()
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
        },
        showModal() {
            this.modal = true;
        },
        getTodoDay($event) {
            this.modal = false;
            this.todayOrOtherday= $event;
            var resultDay = this.judgeTodoDay(this.todayOrOtherday);
            if (1 != resultDay) {                       // HACK: 今日、今日以外の判定を数値ではなく明示的にしたい
                // const newTodo = ref({ id: id, text: this.newTodoText ,day: this.date , complete: false })
                // this.addTodayTodo(newTodo, this.date);
            }
            console.log(resultDay)
            const newTodo = ref({ id: id, text: this.newTodoText ,day: this.date , complete: false })
            this.addTodayTodo(newTodo);
        },
        judgeTodoDay(todayOrOtherday) {
            var day = this.date.getDate();
            var month = this.date.getMonth() + 1; 
            var year = this.date.getFullYear();
            if (todayOrOtherday != this.judgeDay) {     // 今日以外選択時
                day = this.date.getDate() + 1;
                return this.resultTodoDay + 1;
            }
            // 今日選択時
            this.date = `${year}/${month}/${day}`
            return this.resultTodoDay;
        },
        addTodayTodo(todo) {
            console.log(todo)
            this.$store.dispatch('addTodayTodo', todo)
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