<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="top-header">
    <h1>LibraryIT</h1>
  </div>
  <RouterView />
</template>

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
</style>
