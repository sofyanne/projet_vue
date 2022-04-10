<template>
  <div class="h-full">
    <div class="flex items-center justify-center">
      <div class="w-full flex items-center justify-center font-sans">
        <div class="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg overflow-y-auto">
          <div class="mb-4">
            <h1 class="text-3xl text-gray-900">Ma Todo</h1>
            <todo-input />
          </div>
          <todo-progress-bar />
          <div>
            <todo-card :todo="todo" v-for="todo in $store.getters.todosOfCurrentPage" :key="todo.id" />
          </div>
          <todo-pagination />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TodoInput from "./TodoInput"
import TodoProgressBar from "./TodoProgressBar"
import TodoCard from "./TodoCard"
import TodoPagination from "./TodoPagination"

export default {
  components: {
    TodoInput,
    TodoProgressBar,
    TodoCard,
    TodoPagination,
  },
}
</script>
