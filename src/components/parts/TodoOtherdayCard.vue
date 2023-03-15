<script>
import RemoveTodo from './RemoveTodo.vue';
import MasterText from './MasterText.vue';

    export default {
        data() {
            return {
                editActive: false,
                todoText: "",
            }
        },
        components: {
            RemoveTodo,
            MasterText,
        },
        methods: {
            editText(todo) {
                if (!this.editActive) {
                    this.editActive = true;
                } else {
                    this.$store.dispatch('editTodo', {indexTodo: todo, EditedText: this.todoText}) 
                    this.editActive = false;
                }
            },
            inputData(value) {
                this.todoText = value;
            },
        },
        computed: {
            showTodos() {
                var date = new Date();
                var day = date.getDate();
                var month = date.getMonth() + 1;
                var year = date.getFullYear();
                date = `${year}/${month}/${day}`
                return this.$store.state.todos.filter(t => t.day !== date)
            },
            
        },
    }
</script>

<template>
    <div class="card">
        <p class="cardName">
            <slot>cardName</slot>
        </p>
        <ul id="todo_list">
            <li v-for="todo in showTodos" :key="todo.id">
                <div class="todo">
                    <span v-if=!editActive class="otherday_todo_text"> {{ todo.text }} </span>
                    <span v-else class="otherday_todo_text">
                        <MasterText class="edit_form" :value="todo.text" @inputValue="inputData"></MasterText>
                    </span>
                    <button class="edit_button_object" @click="editText(todo)" :todoPass= "todo">編集</button>
                    <RemoveTodo class="remove_button_object" :todoPass = "todo" />
                </div>
            </li>
        </ul>
    </div>
</template>

<style>
    .cardName {
        font-size: 32px;
    }
    .card {
      display: block;
      padding: 12px 28px;
      background-color: #FFF;
      width: 413px;
      height: 548px;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.35));
    }

    #todo_list {
        list-style: none;
        padding-left: 0;
    }

    .todo {
        display: flex;
    }

    .otherday_todo_text {
        display: block;
        font-size: 16px;
        margin-left: 20px;
        text-align: center;
        margin: 10px 3px 10px 40px;
    }

    .edit_button_object {
        display: block;
        font-size: 16px;
        width: 88px;
        height: 30px;
        line-height: 1;
        margin: 8px 0 8px auto;
        padding: 0 10px;
        border-radius: 7px;
        border: none;
        color: #000;
        background-color: #D7E9B9;
    }

    .remove_button_object {
        display: block;
        font-size: 16px;
        width: 88px;
        height: 30px;
        line-height: 1;
        margin: 8px 3px 8px 12px;
        padding: 0 10px;
        border-radius: 7px;
        border: none;
        color: #fff;
        background-color: #B40000;
    }

    .edit_form {
        font-size: 16px;
        padding: 2px 0;
    }
</style>