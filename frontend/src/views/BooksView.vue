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

const fetchBooks = async () => {
  try {
    const response = await fetch('/book');
    const result = await response.json();
    if (result.status === 'success') {
      books.value = result.data;
    }
  } catch (error) {
    console.error('Error fetching books:', error);
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

<template>
  <div class="book-container">
    <div class="books-list">
      <BookCard v-for="book in books" :key="book._id" :book="book" />
    </div>
  </div>
</template>


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
</style>
