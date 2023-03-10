import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [
      {id: 1, text: "テスト１" ,day: "2023/2/27" , done: false},
      {id: 2, text: "テスト２" ,day: "2023/2/28" , done: false},
      {id: 3, text: "テスト１" ,day: "2023/2/27" , done: false},
      {id: 4, text: "テスト２" ,day: "2023/3/10" , done: false},
    ]
  },
  actions: {
    addTodo(context, todo) {
        context.commit('addTodo', todo)
    },
    removeTodo(context, todo) {
      context.commit('removeTodo', todo)
    }
  },
  mutations: {
    addTodo(state, todo) {             // MEMO: 今日選択時時
      state.todos.push(todo.value)
    },
    removeTodo(state, todo) {
      state.todos = state.todos.filter(t => t !== todo)
    }
  },
})