<template>
  <div class="flex">
    <div v-if="$store.state.currentPage > 1" @click="setCurrentPage(1)" class="pl-2 pr-2 pt-2 pb-2">&lt;&lt;</div>
    <div v-if="$store.state.currentPage > 1" @click="setCurrentPage($store.state.currentPage - 1)" class="pl-2 pr-2 pt-2 pb-2">&lt;</div>
    <div @click="setCurrentPage(numPage)" v-for="numPage in $store.getters.lastPage" :key="numPage" class="pl-2 pr-2 pt-2 pb-2">
      {{numPage}}
    </div>
    <div v-if="$store.state.currentPage < $store.getters.lastPage" @click="setCurrentPage($store.state.currentPage + 1)" class="pl-2 pr-2 pt-2 pb-2">&gt;</div>
    <div v-if="$store.state.currentPage < $store.getters.lastPage" @click="setCurrentPage($store.getters.lastPage)" class="pl-2 pr-2 pt-2 pb-2">&gt;&gt;</div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  methods: {
    ...mapActions(["setCurrentPage"])
    // equivalent
    // setCurrentPage(page) {
    //   this.$store.dispatch("setCurrentPage", page)
    // }
  }
}
</script>
