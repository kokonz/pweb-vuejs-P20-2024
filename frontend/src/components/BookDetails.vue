<script lang="ts" setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const book = route.params.book ? JSON.parse(decodeURIComponent(route.params.book as string)) : null;
</script>

<template>
  <div class="book-details-container">
    <img :src="book.coverImage" alt="Book Cover" class="book-cover" />
    <div class="book-details">
      <h1>{{ book.title }}</h1>
      <p><strong>Author:</strong> {{ book.author }}</p>
      <p><strong>Publisher:</strong> {{ book.publisher }}</p>
      <p><strong>Published Date:</strong> {{ new Date(book.publishedDate).toLocaleDateString() }}</p>
      <p><strong>Rating:</strong> {{ book.rating.average }} ({{ book.rating.count }} reviews)</p>
      <p><strong>Description:</strong> {{ book.description }}</p>
      <p><strong>Tags:</strong> {{ book.tags.join(', ') }}</p>
      <p><strong>Quantity:</strong> {{ book.qty }} (Initial: {{ book.initialQty }})</p>
    </div>
  </div>
</template>

<style scoped>
.book-details-container {
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-width: 600px;
  margin: 20px auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.book-cover {
  width: 100%;
  height: 150px;
  border-radius: 5px;
  margin-bottom: 20px;
}

.book-details h1 {
  font-size: 24px;
  margin-bottom: 10px;
}

.book-details p {
  margin: 5px 0;
  font-size: 16px;
}
</style>
