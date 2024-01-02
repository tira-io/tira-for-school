<script lang="ts" setup>
// import HelloWorld from "@/components/HelloWorld.vue"

import StudentPage from "@/components/MainStudentPage.vue"
import File from "@/components/UploadFile.vue"

</script>

<template>
    <v-app>
        <v-main>
            <StudentPage />
            <File />
        </v-main>
    </v-app>
</template>


<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>