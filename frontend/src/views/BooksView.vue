<template>
  <div class="book-container">
    <div class="books-list">
      <div v-if="isLoading" class="loading-text">Loading...</div>
      <div v-else-if="hasError" class="error-text">Error loading the books.</div>
      <BookCard v-else v-for="book in books" :key="book._id" :book="book" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import BookCard from '../components/BookCard.vue';
import BookDetails from '../components/BookDetails.vue';

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

const books = ref<Book[]>([]);
const selectedBook = ref<Book | null>(null);
const isLoading = ref(true);
const hasError = ref(false);

const fetchBooks = async () => {
  isLoading.value = true;
  hasError.value = false;

  try {
    const response = await fetch('/book');
    if (!response.ok) throw new Error('Failed to fetch books');
    const result = await response.json();

    if (result.status === 'success') {
      books.value = result.data;
    } else {
      throw new Error('Unexpected response format');
    }
  } catch (error) {
    console.error('Error fetching books:', error);
    hasError.value = true;
  } finally {
    isLoading.value = false;
  }
};

const fetchBookDetails = async (id: string) => {
  try {
    const response = await fetch(`/book/${id}`);
    const result = await response.json();
    if (result.status === 'success') {
      selectedBook.value = result.data;
    }
  } catch (error) {
    console.error('Error fetching book details:', error);
  }
};

onMounted(() => {
  fetchBooks();

  window.addEventListener('show-details', (event: Event) => {
    const customEvent = event as CustomEvent<string>;
    fetchBookDetails(customEvent.detail);
  });
});
</script>

<style scoped>
.book-container {
  width: 75%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: auto;
}

.books-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  margin-top: 100px;
  margin-bottom: 80px;
}

.loading-text {
  font-size: 1.5rem;
  color: gray;
  text-align: center;
  margin: 20px;
}

.error-text {
  font-size: 1.5rem;
  color: red;
  text-align: center;
  margin: 20px;
}
</style>
