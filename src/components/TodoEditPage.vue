<template>
  <div class="flex">
    <input
        v-model="description"
        @keyup.enter="() => {
              editTodo({...todo, description: description});
              $router.push('/todos');
            }"
        class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-700"
    >
    <button
        @click="() => { editTodo({...todo, description: description}); $router.push('/todos'); }"
        class="flex p-2 ml-2 border-2 rounded text-blue-500 border-blue-500 hover:text-white hover:bg-blue-500"
    >Valider</button>
  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  data() {
    return {
      description: "",
      todo: undefined
    }
  },
  mounted() {
    if (this.$route.params.id) {
      const todo = this.$store.getters.getById(this.$route.params.id)
      if (todo) {
        this.todo = this.$store.getters.getById(this.$route.params.id);
        this.description = this.todo.description;
      } else this.$router.push("/todoNotFound");
    } else this.$router.push("/todoNotFound");
  },
  methods: {
    ...mapActions(["editTodo"])
  }
}
</script>

