import { createStore } from 'vuex'

export default createStore({
  state: {
    todayTodos: [
      {id: 1, text: "テスト１" ,day: "2023/2/27" , complete: true},
      {id: 2, text: "テスト２" ,day: "2023/2/28" , complete: false},
    ],
    otherDayTodos: [
      {id: 1, text: "テスト１" ,day: "2023/2/27" , complete: true},
      {id: 2, text: "テスト２" ,day: "2023/2/28" , complete: false},
    ]
  },
  actions: {
    addTodayTodo(context, todo) {
        context.commit('addTodayTodo', todo)
    }
  },
  mutations: {
    addTodayTodo(state, todo) {
      console.log(state.todayTodos)
      state.todayTodos.push(todo.value)
    },
    // addOtherDay(state, todo) {
    //   state.otherDayTodos.push(todo.value)
    // }
  },
})