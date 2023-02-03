<template>
  <div>
    <main-header/>
    <task-new></task-new>
      <router-view/>
  </div>
  <ul>
    <li v-for="todo in filteredTodos" :key="todo.id">
      <input type="checkbox" v-model="todo.done">
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
      <button @click="removeTodo(todo)">削除</button>
    </li> 
  </ul>
  <button @click="hideCompleted = !hideCompleted">
    {{ hideCompleted ? 'Show all' : 'Hide completed' }}
  </button>
</template>

<script>
import MainHeader from './components/MainHeader.vue'
import TaskNew from './components/TaskNew.vue'

export default {
  components: {
    MainHeader,
    TaskNew
  },
  data() {
    return {
      newTodo: '',
      hideCompleted: false,
      todos: []
    }
  },
  computed: {
    filteredTodos() {
      return this.hideCompleted ? this.todos.filter((t) => !t.done) : this.todos
    }
  },
  methods: {
    addTodo() {
      this.todos.push({id: this.todos.length +1, text: this.newTodo, done: false})
      this.newTodo = ''
    },
    removeTodo(todo) {
      this.todos = this.todos.filter((t) => t !== todo)
    }
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
}

.done {
  text-decoration: line-through;
}
</style>