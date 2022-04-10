<template>
  <div class="container">
    <nav class="flex items-center justify-between flex-wrap bg-teal p-6">
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <router-link to="/" class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-sky-500 mr-4">
            Home
          </router-link>
          <router-link to="/todos" class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-sky-500 mr-4">
            Todo
          </router-link>
        </div>
        <div>
          <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0">Download</a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "HeaderEl"
}
</script>
