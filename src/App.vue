<template>
    <main-header/>
    <main-body/>
    <router-view/>
  <!-- <ul>
    <li v-for="todo in filteredTodos" :key="todo.id">
      <input type="checkbox" v-model="todo.done">
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
      <button @click="removeTodo(todo)">削除</button>
    </li> 
  </ul> -->
  <!-- <button @click="hideCompleted = !hideCompleted">
    {{ hideCompleted ? 'Show all' : 'Hide completed' }}
  </button> -->
</template>

<script>
import MainHeader from './components/pages/MainHeader.vue'
import MainBody from './components/pages/MainBody.vue'

export default {
  components: {
    MainHeader,
    MainBody,
  }
}

</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}

.done {
  text-decoration: line-through;
}
</style>