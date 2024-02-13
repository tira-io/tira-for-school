<template>
    <v-row justify="center" align="center">
        <v-col cols="4"><v-img :src="input_image.src" style="width: 100%;"/></v-col>
        <v-col cols="4"><v-img src="@/assets/prediction-with-ki.png" style="width: 100%"/></v-col>
        <v-col cols="4">{{prediction}}</v-col>
    </v-row>
</template>

<script lang="ts">
export default {
  props: ['input_image', 'prediction']
}
</script>