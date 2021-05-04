<template>
    <div>
        <!--<p> {{ champion_infos }} </p>-->
        <table>
            <tr>
                <td> <img :src="urlIcon(champion_infos.id)"/> </td>
                <td> {{ champion_infos.name }} </td>
                <td> {{ champion_infos.title }} </td>
                <td> {{ champion_infos.shortBio }} </td>
                <td>
                    <ul>
                        <li v-for="spell in champion_infos.spells" :key="spell.spellKey" style="list-style: none" > {{ spell.name }} </li>
                    </ul>
                </td>
            </tr>
        </table>
        
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import axios from 'axios';

export default defineComponent({
    setup() {

        const champion_infos = ref({});
    
        // appel sur l'API pour récupérer les détails du champion
        // j'ai beau avoir essayé tout ce que j'ai trouvé, je n'ai pas réussi à avoir une requête dynamique
        axios
            // .get( getAPIurl( this.$routes.params.championId ) )
            .get( 'https://cdn.communitydragon.org/latest/champion/1/data' )
            .then(function (response) {
              champion_infos.value = response.data;
            })
            .catch(function (error) {
              console.error(error);
            });

        return {
            champion_infos,
        };

    },
    computed: {
        getAPIurl (id) {
            return 'https://cdn.communitydragon.org/latest/champion/' + id + '/data';
        }
    },
    methods:{ 
        urlIcon (id) {
            // Récupérration de l'icon du champion
            return "https://cdn.communitydragon.org/latest/champion/" + id + "/square";
    },
  }
})
</script>
