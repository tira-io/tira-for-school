<template>
    <v-container>
      <v-file-input v-model="selectedFile" label="Select a PDF file"></v-file-input>
      <v-btn @click="uploadFile">Upload</v-btn>
    </v-container>
  </template>

<script lang="ts">
export default {
    data() {
      return {
        selectedFile: null
      };
    },
    methods: {
    uploadFile() {
      if (this.selectedFile) {
        // Perform actions with the selected file
        console.log('Selected File:', this.selectedFile);
      } else {
        console.error('No file selected');
      }
    }
    }
  };
</script>