<script lang="ts" setup>
import { ref } from 'vue';

// Define uploadedFile ref to store the uploaded file
const uploadedFile = ref<File | null>(null);

// Modify handleFileUpload function to update the uploadedFile ref
const handleFileUpload = (file: Event) => {
  const uploadedZip = (file.target as HTMLInputElement).files?.[0];
  if (uploadedZip) {
    uploadedFile.value = uploadedZip; // Update the uploadedFile ref with the selected file
  } else {
    console.error('Please select a file.');
  }
};

// Method to handle file submission
const submitFile = () => {
  if (uploadedFile.value) {
    // Perform actions with the uploaded file data here
    console.log('File submitted!');
    console.log('Uploaded file:', uploadedFile.value);
  } else {
    console.error('No file uploaded.');
  }
};

</script>

<template>
  <v-container>
    <v-file-input accept=".zip" label="Upload Zip Folder" @input="handleFileUpload" />

    <v-btn color="primary" @click="submitFile">Submit</v-btn>
  </v-container>
</template>
