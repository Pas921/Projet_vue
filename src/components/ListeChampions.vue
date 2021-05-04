<template>
    <div>
        <input type="text" v-model="championName" placeholder="Nom du champion" />
        <table>
            <tr>
                <td> <h2> Ma recherche : </h2> </td>
                <td v-if="rechercheChampion?.id >=0"> 
                    <router-link :to="{ name: 'champion', params: { championId: 'rechercheChampion?.id' } }" >
                        <img :src="urlIcon(rechercheChampion?.key)">
                    </router-link>
                </td>
                <td>
                    <router-link :to="{ name: 'champion', params: { championId: 'rechercheChampion?.id' } }">
                        <h2> {{ rechercheChampion?.name }} </h2>
                    </router-link>
                </td>
                <td>
                    <ul>
                        <li v-for="role in rechercheChampion?.roles" :key="role" style="list-style: none" > {{ role }} </li>
                    </ul>
                </td>
            </tr>
        </table>
        <table>
            <tr v-for="champion in championCollection" :key="champion.key">
                <td v-if="champion.id >=0"> 
                    <router-link :to="{ name: 'champion', params: { championId: 'champion.id' } }" >
                        <img :src="urlIcon(champion.key)">
                    </router-link>
                </td>
                <td v-if="champion.id >=0">
                    <router-link :to="{ name: 'champion', params: { championId: 'champion.id' } }">
                        <h2> {{ champion.name }} </h2>
                    </router-link>
                </td>
                <td v-if="champion.id >=0">
                    <ul>
                        <li v-for="role in champion.roles" :key="role" style="list-style: none" > {{ role }} </li>
                    </ul>
                </td>
            </tr>
        </table>
    </div>
    <router-view/>
</template>

<script>
import { defineComponent, ref } from 'vue'
import axios from 'axios'


export default defineComponent({
  setup() {
    const champions = ref({});
    const championName = ref('');

    // Requête sur l'API de LOL afinde récupérer les données des champions
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
      championName,
    };
    
  },
  computed: {
    championCollection() {
      return this.champions;
    },
    rechercheChampion() {
      // Je suis obligé de commenter la ligne car j'ai une erreur sur le find
      // les reponses d'internet me disent que championCollection ne retourne pas une Array
      
      // return this.championCollection?.find(champion => champion.name.toLowerCase() === this.championName.toLowerCase());
    },
  },
  methods: { 
    urlIcon (id) {
      // Récupérration de l'icon du champion
      return "https://cdn.communitydragon.org/latest/champion/" + id + "/square";
    },
  }
});
</script>
