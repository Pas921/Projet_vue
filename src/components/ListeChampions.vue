<template>
    <table>
        <tr v-for="champion in championCollection" :key="champion.key">
            <td v-if="champion.id >=0"> 
                <router-link :to="{ name: 'champion', params: { championId: champion.id } }">
                    <img :src="urlIcon(champion.key)">
                </router-link>
            </td>
            <td v-if="champion.id >=0">
                <router-link :to="{ name: 'champion', params: { championId: champion.id } }">
                    <h2> {{ champion.name }} </h2>
                </router-link>
            </td>
            <td>
                <!--<ul>
                    <li v-for="role in champion.roles" :key="role" > {{ champion.role }} </li>
                </ul>-->
                <p> {{ champion.roles[0] }} </p>
            </td>
        </tr>
    </table>
    <router-view/>
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
  }
})
</script>
