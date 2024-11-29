<template>
    <div>
      <div v-if="isModalVisible" class="modal-overlay" @click="closeRemoveModal">
        <div class="modal-content" @click.stop>
          <h3>Are you sure you want to remove "{{ book.title }}" from LibraryIT?</h3>
          <button @click="removeBook">Yes</button>
          <button @click="closeRemoveModal">No</button>
        </div>
      </div>
  
      <button @click="openRemoveModal" class="remove-book-btn">Remove Book</button>
    </div>
  </template>
  
<script lang="ts" setup>
import { ref } from 'vue';
  
const props = defineProps({
  book: {
    type: Object,
    required: true,
  },
});
  
const isModalVisible = ref(false);
  
const openRemoveModal = () => {
  isModalVisible.value = true;
};
  
const closeRemoveModal = () => {
  isModalVisible.value = false;
};
  
const removeBook = async () => {
  try {  
    const response = await fetch(`/book/${props.book._id}`, {
      method: 'DELETE',
    });
  
    if (response.ok) {
      alert('Book removed successfully');
      window.location.href = '/';
    } else {
      const errorMessage = await response.text();
      console.error('Failed to remove book:', errorMessage);
      alert(`Failed to remove book: ${errorMessage}`);
    }
  } catch (error) {
    console.error('Error removing book:', error);
    alert('An error occurred while removing the book');
  }
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
  z-index: 2000;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  width: 300px;
}

button {
  margin: 10px;
  padding: 10px 20px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: darkred;
}

.remove-book-btn {
  background-color: red;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.remove-book-btn:hover {
  background-color: darkred;
}
</style>