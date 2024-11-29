<template>
  <div class="add-book-page">
    <h1>Add Book</h1>
    <form @submit.prevent="addBook">
      <label for="title">Title:</label>
      <input type="text" id="title" v-model="newBook.title" required />
  
      <label for="author">Author:</label>
      <input type="text" id="author" v-model="newBook.author" required />
  
      <label for="publisher">Publisher:</label>
      <input type="text" id="publisher" v-model="newBook.publisher" required />
  
      <label for="description">Description:</label>
      <textarea id="description" v-model="newBook.description" required></textarea>
  
      <label for="coverImage">Cover Image URL:</label>
      <input type="url" id="coverImage" v-model="newBook.coverImage" required />
  
      <label for="rating">Rating (average):</label>
      <input type="number" id="rating" v-model="newBook.rating.average" required min="0" max="5" step="1" />
  
      <label for="ratingCount">Rating Count:</label>
      <input type="number" id="ratingCount" v-model="newBook.rating.count" required min="0" />
  
      <label for="tags">Tags (comma separated):</label>
      <input type="text" id="tags" v-model="newBook.tags" required />
  
      <label for="initialQty">Initial Quantity:</label>
      <input type="number" id="initialQty" v-model="newBook.initialQty" required min="1" />
  
      <label for="qty">Quantity:</label>
      <input type="number" id="qty" v-model="newBook.qty" required min="0" />
  
      <label for="publishedDate">Published Date:</label>
      <input type="date" id="publishedDate" v-model="newBook.publishedDate" required />
  
      <button type="submit">Add Book</button>
    </form>
  </div>
</template>
  
<script lang="ts" setup>
import { ref } from 'vue';

interface Book {
  _id: string;
  title: string;
  author: string;
  publisher: string;
  description: string;
  coverImage: string;
  rating: {
    average: number;
    count: number;
  };
  tags: string[];
  initialQty: number;
  qty: number;
  publishedDate: string;
  createdAt: string;
  updatedAt: string;
}

const newBook = ref<Book>({
  _id: '',
  title: '',
  author: '',
  publisher: '',
  description: '',
  coverImage: '',
  rating: {
    average: 0,
    count: 0
  },
  tags: [],
  initialQty: 0,
  qty: 0,
  publishedDate: '',
  createdAt: '',
  updatedAt: ''
});

const addBook = async () => {
  try {
    const response = await fetch('/book', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBook.value),
    });
    const result = await response.json();
    if (result.status === 'success') {
      alert('Book added successfully');
    } else {
      alert(`Failed to add book: ${result.message}`);
    }
  } catch (error) {
    console.error('Error adding book:', error);
    alert('An error occurred while adding the book');
  }
};
</script>
  
<style scoped>
.add-book-page {
  padding: 20px;
  margin-top: 80px;
  margin-bottom: 40px;
}

form {
  display: grid;
  gap: 15px;
  max-width: 600px;
  margin: auto;
}

label {
  font-size: 16px;
  margin-bottom: 5px;
}

input, textarea {
  padding: 10px;
  font-size: 14px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  background-color: green;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: darkgreen;
}
</style>