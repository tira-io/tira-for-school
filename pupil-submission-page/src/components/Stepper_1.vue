<template>
    <v-card flat>
        <v-img src="@/assets/TaskBild.png" aspect-ratio="2.75">
            <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="white"></v-progress-circular>
                </v-row>
            </template>
        </v-img>
        <div class="text-center">
            <v-row><v-col cols="4"/><v-col cols="4"><v-btn @click="downloadMyPdf" color="blue" class="mt-5" block>Download Aufgabe</v-btn></v-col></v-row>
        </div>
    </v-card>
</template>

<script lang="ts">
import pdfPath from '@/assets/StudentAufgabe.pdf';

// Define the method
const downloadMyPdf = () => {
    // Trigger download
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'Aufgabe.pdf';
    link.click();
}

export default {
    methods: {
        downloadMyPdf,
    },
};
</script>