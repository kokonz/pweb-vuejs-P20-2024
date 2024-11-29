import { createRouter, createWebHistory } from 'vue-router';
import BooksView from '../views/BooksView.vue';
import BookDetails from '../components/BookDetails.vue';
import AddBook from '../components/AddBook.vue'; // Import AddBook component

const routes = [
  {
    path: '/',
    name: 'Books',
    component: BooksView,
  },
  {
    path: '/book/:book',
    name: 'BookDetails',
    component: BookDetails,
  },
  {
    path: '/add-book',
    name: 'AddBook',
    component: AddBook,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
