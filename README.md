# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur). Make sure to enable `vetur.experimental.templateInterpolationService` in settings!

### If Using `<script setup>`

[`<script setup>`](https://github.com/vuejs/rfcs/pull/227) is a feature that is currently in RFC stage. To get proper IDE support for the syntax, use [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) instead of Vetur (and disable Vetur).

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can use the following:

### If Using Volar

Run `Volar: Switch TS Plugin on/off` from VSCode command palette.

### If Using Vetur

1. Install and add `@vuedx/typescript-plugin-vue` to the [plugins section](https://www.typescriptlang.org/tsconfig#plugins) in `tsconfig.json`
2. Delete `src/shims-vue.d.ts` as it is no longer needed to provide module info to Typescript
3. Open `src/main.ts` in VSCode
4. Open the VSCode command palette
5. Search and run "Select TypeScript version" -> "Use workspace version"



# Mon projet

J'ai choisi de travailler sur l'API de League of Legends car je connais bien le jeu et que je pense pouvoir assembler des données interressantes.
J'ai pour objectif d'afficher l'ensemble des champions avec quelques informations.
Lorsque l'on clique sur un champion on arrive sur une fenetre de description plus précise.
Sur la liste des champions, avoir une barre de recherche pour ne pas avoir a traverser tous les champions.

### La source de mon retard
J'ai du mal à me servir de choses que je ne comprends pas, or j'ai eu du mal a comprendre comment fonctionnent les routes.
Je n'ai pas du être très attentif pendant le cours sur le store car je ne sais pas ce qu'il est sensé faire. Sur internet j'ai à peu près compris comment m'en servir, mais je ne vois pas pourquoi je m'en servirai.
Je me suis mal organisé et j'ai été submergé à la fin, c'est entièremet ma faute.

### Mes questions sans réponses
Pourquoi les routes ne permettent pas de changer de page?
A quoi sert le store en concretement ?
pourquoi ne peut on pas utiliser axios de manière dynamique, l'API de LOL met ses variables n'importes où, et à decidé de faire 36 documents différents. Or lorsque j'ai fait des fonctions pour avoir un url dynamique, axios.get() ne l'accepte pas.
