<script>
  import MasterButton from '../parts/MasterButton.vue';
  import MasterText from '../parts/MasterText.vue';
  import MasterModal from '../parts/MasterModal.vue';
  import TodoTodayCard from '../parts/TodoTodayCard.vue'
  import TodoOtherdayCard from '../parts/TodoOtherdayCard.vue';
  import { ref } from 'vue'
  import Export from '../parts/getdate'
  
  export default {
    data() {
        return {
            data: "",
            newTodoText: "",
            modal: false,
            todayOrOtherday: false,
            todoDay: "",
        }
    },
    components: {
        MasterButton,
        MasterText,
        MasterModal,
        TodoTodayCard,
        TodoOtherdayCard,
    },
    methods: {
        inputData(value) {
            this.newTodoText = value;
        },
        showModal() {
            this.modal = true;
        },
        setTodoDay($event) {
            this.modal = false;
            this.todayOrOtherday= $event;                       // MEMO: true:今日、false:今日以外

            if (!this.todayOrOtherday) {                       // HACK: 今日、今日以外の判定をbooleanではなく明示的にしたい
                this.todoDay = Export.getSelectTodoDate(this.todayOrOtherday);
            }
            this.todoDay = Export.getSelectTodoDate(this.todayOrOtherday);
            const newTodo = ref({   id: this.$store.state.todos.length + 1,
                                    text: this.newTodoText ,
                                    day: this.todoDay ,
                                    done: false
                                })
            this.addTodo(newTodo);
        },
        addTodo(todo) {
            this.$store.dispatch('addTodo', todo)
        },
    },
  }
</script>

<template>
    <main id="main-display">
        <div id="addTodo">
            <MasterText class="task" :value="data" @inputValue="inputData" placeholder="タスクを記入"></MasterText>
            <MasterButton class="add-Button" @click="showModal">タスクを追加</MasterButton>
            <MasterModal
                v-if=modal
                @close-modal="setTodoDay"
            >
            </MasterModal>
            <div id="todoCard">
                <TodoTodayCard>今日のタスク</TodoTodayCard>
                <TodoOtherdayCard>今日以外のタスク</TodoOtherdayCard>
            </div>
        </div>
    </main>
</template>
  
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