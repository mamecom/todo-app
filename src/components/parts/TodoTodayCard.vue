<script>
import { ref } from 'vue'
import Export from './getdate'

const hideCompleted = ref(false)

    export default {
        data() {
            return {
                
            }
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
            }
        },
    }
</script>

<template>
    <div class="card">
        <p class="cardName">
            <slot>cardName</slot>
        </p>
        <ul>
            <li v-for="todo in showTodos" :key="todo.id">
                <input type="checkbox" v-model="todo.done">
                <span :class="{ done: todo.done }">{{ todo.text }}</span>
            </li>
        </ul>
    </div>
</template>

<style>
    .cardName {
        font-size: 24px;
    }
    .card {
      display: block;
      padding: 12px 28px;
      background-color: #FFF;
      width: 350px;
      height: 450px;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.35));
    }

    .done {
        text-decoration: line-through;
    }
</style>