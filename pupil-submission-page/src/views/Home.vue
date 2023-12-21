 <!--
<script lang="ts" setup>
  import HelloWorld from '@/components/HelloWorld.vue'
</script>


<template>
  
  <HelloWorld />
  <div>
    <v-btn @click="goToPage1">Go to Page 1</v-btn>
    <v-btn @click="goToPage2">Go to Page 2</v-btn>
  </div>

</template>
  

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const goToPage1 = () => {
  router.push({ name: 'Page1' });
};

const goToPage2 = () => {
  router.push({ name: 'Page2' });
};
</script>
-->


