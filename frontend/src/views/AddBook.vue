<template>
  <div>
    <h2>Add New Book</h2>
    <form @submit.prevent="submitForm">
      <div>
        <label for="title">Title</label>
        <input type="text" v-model="newBook.title" required />
      </div>
      <div>
        <label for="author">Author</label>
        <input type="text" v-model="newBook.author" required />
      </div>
      <div>
        <label for="publishedDate">Published Date</label>
        <input type="date" v-model="newBook.publishedDate" required />
      </div>
      <div>
        <label for="publisher">Publisher</label>
        <input type="text" v-model="newBook.publisher" />
      </div>
      <div>
        <label for="description">Description</label>
        <textarea v-model="newBook.description"></textarea>
      </div>
      <div>
        <label for="coverImage">Cover Image URL</label>
        <input type="text" v-model="newBook.coverImage" />
      </div>
      <div>
        <label for="tags">Tags</label>
        <input type="text" v-model="newBook.tags" />
      </div>
      <div>
        <label for="initialQty">Initial Quantity</label>
        <input type="number" v-model="newBook.initialQty" required />
      </div>
      <div>
        <label for="qty">Quantity</label>
        <input type="number" v-model="newBook.qty" required />
      </div>
      <button type="submit">Add Book</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';

export default {
  name: 'AddBook',
  setup() {
    const newBook = ref({
      title: '',
      author: '',
      publishedDate: '',
      publisher: '',
      description: '',
      coverImage: '',
      tags: '',
      initialQty: 0,
      qty: 0,
    });

    const submitForm = async () => {
      try {
        // Kirim data ke backend API
        const response = await axios.post('http://localhost:5000/api/books', newBook.value);
        alert('Book added successfully!');
        // Reset form setelah sukses
        newBook.value = {
          title: '',
          author: '',
          publishedDate: '',
          publisher: '',
          description: '',
          coverImage: '',
          tags: '',
          initialQty: 0,
          qty: 0,
        };
      } catch (error) {
        alert('Failed to add book: ' + error.message);
      }
    };

    return {
      newBook,
      submitForm,
    };
  },
};
</script>

<style scoped>
/* Styling untuk form */
form div {
  margin-bottom: 10px;
}
form div label {
  font-weight: bold;
}
form div input,
form div textarea {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
}
</style>
