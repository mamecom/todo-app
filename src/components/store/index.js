import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [
      {id: 1, text: "テスト１" ,day: "2023/2/27" , complete: false},
      {id: 2, text: "テスト２" ,day: "2023/2/28" , complete: false},
      {id: 3, text: "テスト１" ,day: "2023/2/27" , complete: false},
      {id: 4, text: "テスト２" ,day: "2023/3/9" , complete: false},
    ]
  },
  actions: {
    addTodo(context, todo) {
        context.commit('addTodo', todo)
    },
  },
  mutations: {
    addTodo(state, todo) {             // MEMO: 今日選択時時
      console.log(state.todos)
      state.todos.push(todo.value)
    },
  },
})