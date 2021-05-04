import { createRouter, createWebHashHistory } from 'vue-router';
import ListeChampions from '../components/ListeChampions.vue';
import Champion from '../components/Champion.vue';
import Header from '../components/Header.vue'
import component from '../components/ListeChampions.vue';

// Router tel qu'il nous a été présenté en cours

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
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
});

export default router;