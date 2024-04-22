<template>
    <v-card flat>

        <v-row>
            <v-col :cols="(12 - cols) / 2" />
            <v-col :cols="cols">
                <h2>Baue deine erste KI, um Straßenschilder zu klassifizieren!</h2>

                Auf dieser Webseite kannst du einem praktischen Beispiel lernen, wie eine KI gebaut wird.
                Zusammen werden wir eine KI trainieren, um Straßenschilder zu klassifizieren.
                Sammle dazu mit deinen Mitschülerinnen und Mitschülern als Hausaufgabe ein paar Bilder von Vorfahrtsstraßen-
                und Vorfahrt-gewähren-Schildern.

            </v-col>
        </v-row>


        <v-row>
            <v-col :cols="(12 - cols) / 2" />
            <v-col :cols="cols">
                <v-img src="@/assets/TaskBild.png" width="100%">
                    <template v-slot:placeholder>
                        <v-row class="fill-height ma-0" align="center" justify="center">
                            <v-progress-circular indeterminate color="white"></v-progress-circular>
                        </v-row>
                    </template>
                </v-img>
            </v-col>
        </v-row>

        <div class="text-center">
            <v-row><v-col :cols="(12 - cols) / 2" />
                <v-col :cols="cols">
                    <v-btn @click="downloadMyPdf" color="blue" class="mt-4" block>Download
                        Hausaufgabe</v-btn></v-col></v-row>
        </div>
    </v-card>
</template>
  
<script lang="ts">
import pdfPath from '@/assets/StudentAufgabe.pdf';
import { is_mobile } from "@/main";

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
    computed: {
        cols() {
            if (is_mobile()) {
                return 12;
            } else {
                return 8;
            }
        }
    }
};
</script>
  