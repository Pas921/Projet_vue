<template>
    <router-view/>
    <table>
        <tr v-for="champion in championCollection" :key="champion.key">
            <router-link :to="{ name: 'champion', params: { championId: champion.key } }">
                <td v-if="champion.id >=0"> 
                    <img :src="urlIcon(champion.key)">
                </td>
                <td v-if="champion.id >=0">
                    <h2> {{ champion.name }} </h2>
                </td>
            </router-link>
        </tr>
    </table>
</template>

<script>
import { defineComponent, ref, createApp } from 'vue'
import axios from 'axios'


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
  },
  methods:{ 
    urlIcon (id) {
      return "https://cdn.communitydragon.org/latest/champion/" + id + "/square";
    },
    goToChampion (id) {
      this.$router.push({ path: '/Champion', params: { championId: id } });
    },
  }
})
</script>
