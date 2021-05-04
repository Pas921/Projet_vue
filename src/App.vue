<template>
  <div>
    <liste-champions/>
  </div>
  <router-view/>
</template>

<script lang="ts">

import { defineComponent, createApp } from 'vue'
import ListeChampions from './components/ListeChampions.vue'
import Champion from './components/Champion.vue'

export default defineComponent({
  name: 'App',
  components: {
    ListeChampions,
    Champion,
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>