<template>
  <div class="top-header">
    <h1>LibraryIT</h1>
    <div class="top-links">
      <a href="/about">About</a>
      <a href="/">Books</a>
      <a href="/add">Add Book</a>
    </div>
  </div>
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router';
</script>

<style scoped>
body {
  margin: 0;
}

.top-header {
  height: 75px;
  background-color: #86E612;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 50px;
}

.top-header h1 {
  margin: 0;
  font-size: 24px;
  font-weight: 500;
  margin-left: 15px;
}

.top-links {
  position: fixed;
  right: 5%;
  height: 75px;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
}

.top-links a {
  color: black;
  font-size: 20px;
}

</style>
