import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const url = 'https://jsonplaceholder.typicode.com/todos';

const setTodos = (state, payload) => state.todos = payload;

const saveTodos = commit => ({ data }) => commit('setTodos', data.slice(0, 3));

const getTodos = ({ commit }) => axios.get(url).then(saveTodos(commit));

export default new Vuex.Store({
  state: {
    todos: [],
  },
  mutations: {
    setTodos,
  },
  actions: {
    getTodos,
  },
});
