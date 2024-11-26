<template>
  <div class="book-card">
    <img :src="book.coverImage" alt="Book Cover" class="book-cover" />
    <div class="book-details">
      <h2>{{ book.title }}</h2>
      <p><strong>Author:</strong> {{ book.author }}</p>
      <button class="details-button" @click="showDetails(book._id)">Details</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

interface Book {
  _id: string;
  title: string;
  author: string;
  coverImage: string;
}

defineProps({
  book: {
    type: Object as () => Book,
    required: true,
  },
});

const showDetails = (bookId: string) => {
  const event = new CustomEvent('show-details', { detail: bookId });
  window.dispatchEvent(event);
};
</script>

<style scoped>
.book-card {
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 300px;
}

.book-cover {
  width: 100%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 10px;
}

.book-details h2 {
  margin: 0 0 10px;
  font-size: 18px;
}

.details-button {
  display: block;
  margin: 10px auto 0;
  padding: 8px 12px;
  background-color: #71be14;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-size: 14px;
  text-align: center;
  border: none;
  transition: background-color 0.3s;
}

.details-button:hover {
  background-color: #4d840a;
  cursor: pointer;
}
</style>
