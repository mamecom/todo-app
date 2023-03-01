import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [
      {id: 1, text: "選択する" ,day: "2023/2/27" , complete: true},
      {id: 2, text: "選択する" ,day: "2023/2/28" , complete: false},
    ]  
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})