<script setup lang="ts"></script>

<template>
  <div class="user-drawer">
    <div class="user-drawer__header">
      <img src="https://via.placeholder.com/50x50" alt="User Avatar" />
      <h2>User Name</h2>
    </div>
    <div class="user-drawer__menu">
      <ul>
        <li>
          <router-link to="/profile">Profile</router-link>
        </li>
        <li>
          <router-link to="/settings">Settings</router-link>
        </li>
        <li>
          <router-link to="/logout">Logout</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
