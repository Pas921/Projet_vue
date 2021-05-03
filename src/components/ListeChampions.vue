<template>
    <table>
        <tr v-for="champion in championCollection" :key="champion.key">
            <td v-if="champion.id >=0"> 
              <img :src="urlIcon(champion.key)">
              <router-link to="{ path: 'champion', params: { champId: {{ champion.key }} } }"> <h2> {{ champion.name }} </h2> </router-link>
            </td>
        </tr>
    </table>
</template>

<script>
import { defineComponent, ref } from 'vue'
import axios from 'axios'
import VueRouter from 'vue-router'



export default defineComponent({
    setup() {
    const champions = ref({});

    axios
      .get('https://cdn.communitydragon.org/latest/champions/')
      .then(function (response) {
        champions.value = response.data;
      })
      .catch(function (error) {
        console.error(error);
      });

    return {
      champions,
    };
    
  },
  computed: {
    championCollection() {
      return this.champions;
    },
    iconCollection() {
      return this.icons;
    }
  },
  methods:{ 
    urlIcon (id) {
      return "https://cdn.communitydragon.org/latest/champion/" + id + "/square"
    }
  }
})
</script>
