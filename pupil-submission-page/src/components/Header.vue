<template>
    <v-app-bar app>
      <v-avatar size="150">
        <v-img src="@/assets/uni_leipzig_logo_v2.svg" />
      </v-avatar>

      <v-spacer></v-spacer>
      <v-btn @click="handleCenterButtonClick">Center Button</v-btn>
      <v-spacer></v-spacer>

      <v-btn @click="handleLoginButtonClick">Login</v-btn>
    </v-app-bar>
  </template>
  
  <script lang="ts">
  export default {
    methods: {
      handleCenterButtonClick() {
        // Logic for the center button click
      },
      handleLoginButtonClick() {
        // Logic for the login button click
      },
    },
  };
  </script>