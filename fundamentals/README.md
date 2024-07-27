# Vue.js 3 Fundamentals with the Composition API

See [Vue.js 3 Fundamentals with the Composition API](https://vueschool.io/courses/vue-js-fundamentals-with-the-composition-api) and its accompanying [GitHub repository](https://github.com/vueschool/vuejs-3-fundamentals).

For this tutorial, we use the [Vue directly from a CDN](https://vuejs.org/guide/quick-start.html#using-vue-from-cdn) type of setup to simplify things.

* templating syntax

```html
<h1>{{ header || 'Welcome' }}</h1>
```

* reactive two-way binding

```javascript
const msg = ref("Hello World")
```

```html
<h1>{{ msg }}</h1>
<input v-model="msg"/>
<input v-model="msg"/>
```