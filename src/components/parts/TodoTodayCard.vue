<script>
import { ref } from 'vue'
import Export from './getdate'
import RemoveTodo from './RemoveTodo.vue'

const hideCompleted = ref(false)

    export default {
        components: {
            RemoveTodo
        },
        methods: {
            filteredTodos () {
                return hideCompleted.value
                    ? this.$store.state.todos.value.filter((t) => !t.done)
                    : this.$store.state.todos.value
            },
        },
        computed: {
            todos() {
                return this.$store.state.todos
            },
            showTodos() {
                var date = new Date();
                date = Export.getToday()
                return this.$store.state.todos.filter(t => t.day === date)
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
                    <input type="checkbox" v-model="todo.done">
                    <span class="todo_text" :class="{ done: todo.done }">
                        {{ todo.text }}
                    </span>
                    <RemoveTodo class="today_button_object" :todoPass = "todo" />
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

    .done {
        text-decoration: line-through;
    }

    #todo_list {
        list-style: none;
        padding-left: 0;
    }

    .todo {
        display: flex;
    }

    .todo_text {
        display: block;
        font-size: 16px;
        max-width: 270px;
        margin-left: 20px;
        text-align: center;
        margin: 8px 3px 8px 15px;
    }

    .today_button_object {
        display: block;
        font-size: 16px;
        width: 88px;
        height: 30px;
        line-height: 1px;
        margin: 0 0 0 auto;
        padding: 0 10px;
        border-radius: 7px;
        border: none;
        color: #fff;
        background-color: #B40000;
    }
</style>