import Vue from "vue"
import Vuex from "vuex"
import {getData, setData, deleteData} from '../../services/persistService';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    currentPage: 1,
    pageSize: 5,
    todos: [],
  },
  getters: {
    newId(state) {
      if (state.todos.length > 0) return state.todos[0].id + 1;
      return 1;
    },
    getById: (state) => (id) => {
      return state.todos.find((todo) => todo.id === id * 1);
    },
    progressBarPct(state) {
      if (state.todos.length > 0) {
        return Math.floor(
          (state.todos.filter((todo) => todo.done).length * 100) /
            state.todos.length
        );
      }
      return 0;
    },
    todosOfCurrentPage(state) {
      return state.todos.slice(
        state.pageSize * (state.currentPage - 1),
        state.pageSize * state.currentPage
      );
    },
    lastPage(state) {
      return Math.ceil(state.todos.length / state.pageSize);
    },
  },
  mutations: {
    initData(state, todos) {
      console.log("mutation : initData");
      state.todos = todos;
    },
    setPage(state, page) {
      state.currentPage = page;
    },
    addTodo(state, newTodo) {
      state.todos.unshift(newTodo);
    },
    updateTodo(state) {
      console.log(state.todos);
    },
    editTodo(state, updatedTodo) {
      state.todos.splice(
        state.todos.findIndex((todo) => todo.id === updatedTodo.id),
        1,
        updatedTodo
      );
    },
    removeTodo(state, todoId) {
      state.todos.splice(
        state.todos.findIndex((todo) => todo.id === todoId),
        1
      );
    },
  },
  actions: {
    initData({ commit }) {
      getData().then((initialTodos) => {
        commit("initData", initialTodos ? initialTodos : []);
      });
    },
    setCurrentPage({ commit, getters }, page) {
      if (page <= 0) commit("setPage", 1);
      else if (page > getters.lastPage) commit("setPage", getters.lastPage);
      commit("setPage", page);
    },
    addTodo({commit, getters }, descriptionObj) {
      if (descriptionObj.description) {
        const newTodo = {
          ...descriptionObj,
          id: getters.newId,
          done: false,
        };
        commit("addTodo", newTodo);
        setData(newTodo);
      }
    },
    updateTodo({commit}) {
      commit("updateTodo");
    },

    editTodo({ state, commit }, updatedTodo) {
      commit("editTodo", updatedTodo);
      setData("todos", state.todos);
    },
    removeTodo({ state, commit }, todoId) {
     
      deleteData(todoId)
      console.log(todoId);
      commit("removeTodo", todoId);
      setData("todos", state.todos);
    },
  },
});

export default store;
