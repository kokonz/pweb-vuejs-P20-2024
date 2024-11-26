<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import BookCard from '../components/BookCard.vue';

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
const isModalVisible = ref(false);

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
      isModalVisible.value = true;
    }
  } catch (error) {
    console.error('Error fetching book details:', error);
  }
};

const closeModal = () => {
  isModalVisible.value = false;
  selectedBook.value = null;
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

    <div v-if="isModalVisible" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="close-button" @click="closeModal">X</button>
        <div v-if="selectedBook" class="book-details">
          <div class="book-header">
            <img :src="selectedBook.coverImage" alt="Book Cover" class="book-cover" />
            <h1>{{ selectedBook.title }}</h1>
          </div>
          <p><strong>Author:</strong> {{ selectedBook.author }}</p>
          <p><strong>Publisher:</strong> {{ selectedBook.publisher }}</p>
          <p><strong>Published Date:</strong> {{ new Date(selectedBook.publishedDate).toLocaleDateString() }}</p>
          <p><strong>Rating:</strong> {{ selectedBook.rating.average }} ({{ selectedBook.rating.count }} reviews)</p>
          <p><strong>Description:</strong> {{ selectedBook.description }}</p>
          <p><strong>Tags:</strong> {{ selectedBook.tags.join(', ') }}</p>
          <p><strong>Quantity:</strong> {{ selectedBook.qty }} (Initial: {{ selectedBook.initialQty }})</p>
        </div>
      </div>
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
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 450px;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;
}

.book-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.book-cover {
  height: 200px;
  border-radius: 5px;
  margin-bottom: 20px;
}

.book-details h1 {
  margin-bottom: 10px;
  font-size: 24px;
}

.book-details p {
  margin: 5px 0;
  font-size: 16px;
}
</style>
