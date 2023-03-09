import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [
      {id: 1, text: "テスト１" ,day: "2023/2/27" , complete: true},
      {id: 2, text: "テスト２" ,day: "2023/2/28" , complete: false},
    ]
  },
  actions: {
    addTodo(context, todo) {
      context.commit('addTodo', todo)
    }
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push(todo.value)
      console.log(state.todos)
    }
  },
})