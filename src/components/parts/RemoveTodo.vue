<script>
export default {
    name: "RemoveTodo",
    props: {
        todoPass: {
            type: Object
        }
    },
    methods: {
        removeEmit() { this.removeTodo(this.todoPass) },
        removeTodo(todo) { return this.$store.dispatch('removeTodo', todo) },
    },
}
</script>

<template>
    <button @click="removeEmit" >削除</button>
</template>

<style>

</style>