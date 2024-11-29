<template>
  <div class="modal-overlay" @click="closeDetailsModal">
    <div class="modal-content" @click.stop>
      <button class="close-button" @click="closeDetailsModal">X</button>
      <div class="book-details">
        <div class="book-header">
          <img :src="book.coverImage" alt="Book Cover" class="book-cover" />
          <h1>{{ book.title }}</h1>
        </div>
        <p><strong>Author:</strong> {{ book.author }}</p>
        <p><strong>Publisher:</strong> {{ book.publisher }}</p>
        <p><strong>Published Date:</strong> {{ new Date(book.publishedDate).toLocaleDateString() }}</p>
        <p><strong>Rating:</strong> {{ book.rating.average }} ({{ book.rating.count }} reviews)</p>
        <p><strong>Description:</strong> {{ book.description }}</p>
        <p><strong>Tags:</strong> {{ book.tags.join(', ') }}</p>
        <p><strong>Quantity:</strong> {{ book.qty }} (Initial: {{ book.initialQty }})</p>

        <RemoveBook :book="book" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';
import RemoveBook from './RemoveBook.vue';

const props = defineProps({
  book: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(['close']);

const closeDetailsModal = () => {
  emit('close');
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  width: 400px;
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
