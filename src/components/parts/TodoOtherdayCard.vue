<template>
    <div class="card">
        <p class="cardName">
            <slot>cardName</slot>
        </p>
        <ul>
            <li v-for="todo in todayTodos" :key="todo.text">{{ todo.text }}</li>
        </ul>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                
            }
        },
        computed: {
            todos() {
                return this.$store.state.todos
            },
            todayTodos() {
                var date = new Date();
                var day = date.getDate();
                var month = date.getMonth() + 1;
                var year = date.getFullYear();
                date = `${year}/${month}/${day}`
                return this.$store.state.todos.filter(t => t.day !== date)
            }
        },
    }
</script>

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
</style>