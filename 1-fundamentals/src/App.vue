<script setup>
import {ref} from "vue";

const msg = 'Hello World'

const reactiveMsg = ref('Hello World');

const books = ref([
  { id: '978-0520318335', title: 'Gaza: An Inquest into Its Martyrdom', authors: ['Norman Finkelstein'], date: '2021-07-27' },
  { id: '978-1851685554', title: 'The Ethnic Cleansing of Palestine', authors: ['Ilan Pappe'], date: '2007-09-01' },
  { id: '978-1608464708', title: 'On Palestine', authors: ['Noam Chomsky', 'Ilan Pappe'], date: '2015-04-17' },
  { id: '978-1250787651', title: 'The Hundred Years\' War on Palestine: A History of Settler Colonialism and Resistance, 1917–2017', authors: ['Rashid Khalidi'], date: '2021-01-26' },
  { id: '978-0679739883', title: 'The Question of Palestine', authors: ['Edward W. Said'], date: '1992-04-07' },
  { id: '978-1844676019', title: 'The Punishment of Gaza', authors: ['Gideon Levy'], date: '2010-05-17' }
])

const booksObject = ref({
  '978-0520318335': {title: 'Gaza: An Inquest into Its Martyrdom', authors: ['Norman Finkelstein'], date: '2021-07-27'},
  '978-1851685554': {title: 'The Ethnic Cleansing of Palestine', authors: ['Ilan Pappe'], date: '2007-09-01'},
  '978-1608464708': {title: 'On Palestine', authors: ['Noam Chomsky', 'Ilan Pappe'], date: '2015-04-17'},
  '978-1250787651': {
    title: 'The Hundred Years\' War on Palestine: A History of Settler Colonialism and Resistance, 1917–2017',
    authors: ['Rashid Khalidi'],
    date: '2021-01-26'
  },
  '978-0679739883': {title: 'The Question of Palestine', authors: ['Edward W. Said'], date: '1992-04-07'},
  '978-1844676019': {title: 'The Punishment of Gaza', authors: ['Gideon Levy'], date: '2010-05-17'}
})

const newBook = ref({ id: '', title: '', authors: [], date: '', kindleEdition: false })

const addBook = () => {
  books.value.push(newBook.value)
  newBook.value = { id: '', title: '', authors: [], date: '', kindleEdition: false }
}
</script>

<template>
  <ul>
    <li>
      <p>Text Interpolation</p>
      <h2>{{ msg }}</h2>
    </li>
    <li>
      <p>Text Interpolation with JavaScript</p>
      <h2>{{ msg.toUpperCase() || 'Welcome' }}</h2>
    </li>
    <li>
      <p>Two-way Reactive Data Binding</p>
      <h2>{{ reactiveMsg }}</h2>
      <input v-model="reactiveMsg" />
      <input v-model="reactiveMsg" />
    </li>
    <li>
      <p>List Rendering</p>
      <ul>
        <li v-for="book in books" :key="book.id">{{ book.title }}</li>
      </ul>
    </li>
    <li>
      <p>List Rendering with Object</p>
      <ul>
        <li v-for="(value, key) in booksObject" :key="key">{{ value.title }}</li>
      </ul>
    </li>
    <li>
      <p>User Input</p>
      <label>
        ISBN:
        <input type="text" v-model.trim="newBook.id"/>
      </label>
      <br/>
      <label>
        Title:
        <input type="text" v-model="newBook.title"/>
      </label>
      <br/>
      <label>
        Authors:
        <select v-model="newBook.authors" multiple>
          <option value="Norman Finkelstein">Norman Finkelstein</option>
          <option value="Ilan Pappe">Ilan Pappe</option>
          <option value="Noam Chomsky">Noam Chomsky</option>
          <option value="Rashid Khalidi">Rashid Khalidi</option>
          <option value="Edward W. Said">Edward Said</option>
          <option value="Gideon Levy">Gideon Levy</option>
        </select>
      </label>
      <br/>
      <label>
        Publishing Date:
        <input type="date" v-model="newBook.date"/>
      </label>
      <br/>
      <label>
        <input type="checkbox" v-model="newBook.kindleEdition">
        Kindle Edition Available
      </label>
      <br/><br/>
      New Book: {{ newBook }}
    </li>
    <li>
      <p>Event</p>
      <label>
        ISBN:
        <input type="text" v-model="newBook.id"/>
      </label>
      <br/>
      <label>
        Title:
        <input type="text" v-model="newBook.title"/>
      </label>
      <br/>
      <label>
        Authors:
        <select v-model="newBook.authors" multiple>
          <option value="Norman Finkelstein">Norman Finkelstein</option>
          <option value="Ilan Pappe">Ilan Pappe</option>
          <option value="Noam Chomsky">Noam Chomsky</option>
          <option value="Rashid Khalidi">Rashid Khalidi</option>
          <option value="Edward W. Said">Edward Said</option>
          <option value="Gideon Levy">Gideon Levy</option>
        </select>
      </label>
      <br/>
      <label>
        Publishing Date:
        <input type="date" v-model="newBook.date"/>
      </label>
      <br/>
      <button v-on:click="books.push(newBook)">Add Book</button>
      <br/><br/>
      Book: {{ newBook }}
      <br/><br/>
      Books' names: {{ books.map(book => book.title) }}
      <br/><br/>
    </li>
    <li>
      <p>Encapsulation</p>
      <form @submit.prevent="addBook">
        <label>
          ISBN:
          <input type="text" v-model="newBook.id"/>
        </label>
        <br/>
        <label>
          Title:
          <input type="text" v-model="newBook.title"/>
        </label>
        <br/>
        <label>
          Authors:
          <select v-model="newBook.authors" multiple>
            <option value="Norman Finkelstein">Norman Finkelstein</option>
            <option value="Ilan Pappe">Ilan Pappe</option>
            <option value="Noam Chomsky">Noam Chomsky</option>
            <option value="Rashid Khalidi">Rashid Khalidi</option>
            <option value="Edward W. Said">Edward Said</option>
            <option value="Gideon Levy">Gideon Levy</option>
          </select>
        </label>
        <br/>
        <label>
          Publishing Date:
          <input type="date" v-model="newBook.date"/>
        </label>
        <br/>
        <button>Add Book</button>
      </form>
      <br/><br/>
      Book: {{ newBook }}
      <br/><br/>
      Books' names: {{ books.map(book => book.title) }}
      <br/><br/>
    </li>
  </ul>
</template>
