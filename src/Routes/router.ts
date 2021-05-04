import { createRouter, createWebHashHistory } from 'vue-router';
import ListeChampions from '../components/ListeChampions.vue';
import Champion from '../components/Champion.vue';



const routes = [
    {
        path: '/',
        name: 'listeChampions',
        component: ListeChampions,
    },
    {
        path: '/champion/:championId',
        name: 'champion',
        component: Champion,
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
});

export default router;