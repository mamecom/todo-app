<template>
    <input v-model="inputText">
</template>

<script>
export default {
    data() {
        return {
            id:'',
            inputText: '',
            // hideCompleted: false,
            todos: []
        }
    },
    addTodo() {
        this.todos.push({id: this.todos.length +1, text: this.newTodo, done: false})
        this.newTodo = ''
    },
}

</script>