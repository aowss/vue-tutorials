<!-- TOC -->
* [Vue.js 3 Fundamentals with the Composition API](#vuejs-3-fundamentals-with-the-composition-api)
  * [Pre-requisites](#pre-requisites)
  * [Setup](#setup)
  * [IDE Setup](#ide-setup)
  * [Project Setup](#project-setup)
    * [Compile and Hot-Reload for Development](#compile-and-hot-reload-for-development)
    * [Compile and Minify for Production](#compile-and-minify-for-production)
<!-- TOC -->

# Vue.js 3 Fundamentals with the Composition API

See [Vue.js 3 Fundamentals with the Composition API](https://vueschool.io/courses/vue-js-fundamentals-with-the-composition-api) and its accompanying [GitHub repository](https://github.com/vueschool/vuejs-3-fundamentals).

## Pre-requisites

* [Node.js](https://nodejs.org/en)  
This will install [npm](https://nodejs.org/en/learn/getting-started/an-introduction-to-the-npm-package-manager) as the package manager

## Setup

We use the [`create-vue` package](https://github.com/vuejs/create-vue) to scaffold the project as described in [Vue's tooling documentation page](https://vuejs.org/guide/scaling-up/tooling.html#vite).  

This will use [Vite](https://vitejs.dev/) as the build tool and development environment. 

![](Scaffolding.png)

This will generate the following structure:

```
1-fundamentals
├── README.md
├── index.html
├── jsconfig.json
├── package.json
├── public
│   └── favicon.ico
├── src
│   ├── App.vue
│   ├── assets
│   │   ├── base.css
│   │   ├── logo.svg
│   │   └── main.css
│   ├── components
│   │   ├── HelloWorld.vue
│   │   ├── TheWelcome.vue
│   │   ├── WelcomeItem.vue
│   │   └── icons
│   │       ├── IconCommunity.vue
│   │       ├── IconDocumentation.vue
│   │       ├── IconEcosystem.vue
│   │       ├── IconSupport.vue
│   │       └── IconTooling.vue
│   └── main.js
└── vite.config.js
```

We can then delete everything under the `src` folder, except `App.vue` and `main.js`.  
We should end up with the following structure:


```
1-fundamentals
├── README.md
├── index.html
├── jsconfig.json
├── package.json
├── public
│   └── favicon.ico
├── src
│   ├── App.vue
│   └── main.js
└── vite.config.js
```

We can then delete the content of `App.vue` and only keep the structure:

```vue
<script setup>
</script>

<template>
</template>
```

## IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
