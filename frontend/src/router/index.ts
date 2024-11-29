import { createRouter, createWebHistory } from 'vue-router';
import BooksView from '../views/BooksView.vue';
import BookDetails from '../components/BookDetails.vue';
import About from '../components/About.vue';
import AddBook from '../components/AddBook.vue';
import RemoveBook from '../components/RemoveBook.vue';

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
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/add',
    name: 'AddBook',
    component: AddBook,
  },
  {
    path: '/book/:book',
    name: 'RemoveBook',
    component: RemoveBook,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
