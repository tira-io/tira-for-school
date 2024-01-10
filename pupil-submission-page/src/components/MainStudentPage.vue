<!-- eslint-disable vue/valid-v-slot -->

<script lang="ts" setup>
//import pdf from '@/assets/StudentAufgabe.pdf'

import File from "./UploadFile.vue"

</script>


<template>
    <v-container>
        <v-stepper :items="['Willkommen', 'Aufgabe', 'Hochladen']">
            <template v-slot:item.1>
                <v-card title="Willkommen!" flat>
                    <v-card>
                        <p>
                            Auf dieser Webseite lernst du, wie man Daten für eine KI sammelt und diese selbst trainieren
                            kann.
                        </p>
                        <p>
                            Die Bilder solltest du als Hausaufgabe bereits gesammelt haben oder du lädst dir jetzt schnell
                            welche herunter.
                        </p>
                    </v-card>
                </v-card>
            </template>

            <template v-slot:item.2>
                <v-card title="Übersicht Aufgaben" flat>
                    <v-img src="@/assets/uni_leipzig_logo_v2.png" aspect-ratio="2.75">
                        <template v-slot:placeholder>
                            <v-row class="fill-height ma-0" align="center" justify="center">
                                <v-progress-circular indeterminate color="white"></v-progress-circular>
                            </v-row>
                        </template>
                    </v-img>
                    <v-card>
                        <v-card-text>
                            Dein Auftrag, für den Fall, dass du ihn annehmen willst:
                        </v-card-text>
                        <v-btn @click="downloadMyPdf"> Download PDF </v-btn>
                    </v-card>
                </v-card>
            </template>

            <template v-slot:item.3>
                <v-card title="Lade hier deine KI hoch" flat>
                    <v-card>
                        <v-card-text>
                            hochladen - dafür musst du es erst herunterladen und abspeichern.
                        </v-card-text>
                        <File />
                    </v-card>
                </v-card>
            </template>
        </v-stepper>
    </v-container>
</template> 


<script lang="ts">
// Define the method
const downloadMyPdf = () => {
    // Replace with the actual path to your PDF file
    const pdfPath = require('@/assets/StudentAufgabe.pdf');

    // Trigger download
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'Aufgabe.pdf';
    link.click();
}

// Expose the method to the template
export { downloadMyPdf };
</script>


<style></style>