import { createRouter, createWebHistory } from 'vue-router';
import BooksView from '../views/BooksView.vue';
import BookDetails from '../components/BookDetails.vue';

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
