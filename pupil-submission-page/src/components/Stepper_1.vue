<template>
    <v-card flat>
        <v-img src="@/assets/TaskBild.png" aspect-ratio="2.75">
            <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="white"></v-progress-circular>
                </v-row>
            </template>
        </v-img>

        <v-card flat title="Willkommen auf dieser Webseite (Namen einfügen)">
            <v-container>
                <ul>
                    <li>
                        Hier kannst du lernen, wie eine Straßenschild-Klassifikation funktionieren kann.
                    </li>
                    <li>
                        Um zu beginnen, brauchst du eine Datenbasis mit welcher du deine KI trainierst.
                    </li>
                    <li>
                        Mache dafür mit deinen Mitschülerinnen und Mitschülern als Hausaufgabe ein paar Bilder von den zwei
                        Straßenschilder-Arten.
                    </li>
                    <li>
                        Nähere Informationen zu der <strong>Hausaufgabe</strong> findest du im Brief unseres Vorstandes.
                    </li>
                </ul>
            </v-container>
        </v-card>

        <div class="text-center">
            <v-row><v-col cols="4" />
                <v-col cols="4">
                    <v-btn @click="downloadMyPdf" color="blue" class="mt-4" block>Download
                        Hausaufgabe</v-btn></v-col></v-row>
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
  