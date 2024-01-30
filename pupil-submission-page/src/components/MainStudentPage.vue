<script lang="ts" setup>
import File from "./UploadFile.vue"

</script>

<!-- eslint-disable vue/valid-v-slot -->
<template>
    <v-container>
        <v-stepper :items="['Deine Aufgabe', 'Baue Deinen Datensatz', 'Trainiere Deine KI', 'Teste Deine KI']">
            <template v-slot:item.1>
                <v-card flat>
                    <a href="#" @click.prevent="downloadMyPdf">
                        <v-img src="@/assets/Auto1.jpg" aspect-ratio="2.75">
                            <template v-slot:placeholder>
                                <v-row class="fill-height ma-0" align="center" justify="center">
                                    <v-progress-circular indeterminate color="white"></v-progress-circular>
                                </v-row>
                            </template>
                        </v-img>
                    </a>
                    <v-card>
                        <v-card-text>
                            Dein Auftrag, für den Fall, dass du ihn annehmen willst:
                        </v-card-text>
                        <v-btn @click="downloadMyPdf" color="blue"> Download PDF </v-btn>
                    </v-card>
                </v-card>
            </template>

            <template v-slot:item.2>
                <v-card flat>
                    <v-container class="ml-4 mr-4">
                        <ul>
                            <li class="text-left">Bevor du beginnen kannst, musst du einen entsprechenden Datensatz
                                vorbereitet haben.</li>
                            <li class="text-left">Alle Bilder eures Teams sollten in zwei Ordnern auf deinem Computer
                                abgespeichert sein.</li>
                            <li class="text-left">Öffne die Webseite <a href="https://teachablemachine.withgoogle.com"
                                    target="_blank">https://teachablemachine.withgoogle.com</a></li>
                            <li class="text-left">Klicke auf „Erste Schritte“</li>
                            <li class="text-left">Wenn du dein Projekt gerade beginnst, dann klicke auf Bildprojekt, um ein
                                neues Projekt zu erstellen. Ansonsten öffne ein bestehendes Projekt aus einer Datei. (Wir
                                erstellen ein Modell mit Standardbildern.)</li>
                            <li class="text-left">Erlaube der Webseite nicht auf deine Webcam zuzugreifen und lade nur
                                Bilder hoch, welche du selbst erstellt hast oder welche eine entsprechende Lizenz haben.
                                (Datenschutz)</li>
                        </ul>
                    </v-container>
                </v-card>
            </template>

            <template v-slot:item.3>
                <v-card flat>
                    <v-container class="ml-4 mr-4">
                        <v-img src="@/assets/teachable_machine_screenshot_1.png" aspect-ratio="2.75">
                            <template v-slot:placeholder>
                                <v-row class="fill-height ma-0" align="center" justify="center">
                                    <v-progress-circular indeterminate color="white"></v-progress-circular>
                                </v-row>
                            </template>
                        </v-img>
                        <p> <br> </p>
                        <ul>
                            <li class="text-left">Nun siehst du die Grundstruktur, wie das Trainieren einer KI für
                                Klassifikationsprobleme aussieht.</li>
                            <li class="text-left">Als erstes muss man sich entscheiden, welche Klassen man gegeben hat. In
                                diese Klassen lädt man dann entsprechende Daten ein. Man spricht von „gelabelten Daten“,
                                also vorher bekannten Daten, welche für das Training verwendet werden.</li>
                            <li class="text-left">Wenn die Klassen mit den Daten gefüllt sind, kann man das Modell
                                trainieren. Ein Algorithmus (in dem Fall von Teachable Machine ein künstliches neuronales
                                Netz) versucht, aus den vom EntwicklerInnen-Team gegebenen Daten Zusammenhänge und Muster zu
                                erstellen, welche später auch unbekannte Bilder klassifizieren sollen.</li>
                        </ul>
                    </v-container>
                </v-card>
            </template>

            <template v-slot:item.4>
                <v-expansion-panels v-model="panel">
                    <v-expansion-panel title="Quantitative Tests">
                        <v-expansion-panel-text>
                            <v-card title="Teste deine KI anhand vieler Beispiele, um die Accuracy zu messen"
                                outlined>
                                <v-container class="ml-4 mr-4">
                                    <v-img src="@/assets/teachable_machine_screenshot_3.png" aspect-ratio="5">
                                        <template v-slot:placeholder>
                                            <v-row class="fill-height ma-0" align="center" justify="center">
                                                <v-progress-circular indeterminate color="white"></v-progress-circular>
                                            </v-row>
                                        </template>
                                    </v-img>
                                    <p> <br> </p>
                                    <ul>
                                        <li class="text-left">Stelle außerdem sicher, dass du dein Model im richtigen Format
                                            exportierst.</li>
                                        <li class="text-left">Dafür musst du auf „Modell exportieren“ klicken und dann auf
                                            „Tensorflow“.
                                            Die Zipdatei lädst du herunter und im nächsten Schritt dann hier hoch.</li>
                                    </ul>

                                    <File />

                                </v-container>
                            </v-card>
                        </v-expansion-panel-text>
                    </v-expansion-panel>

                    <v-expansion-panel title="Qualititative Tests">
                        <v-expansion-panel-text>
                            <v-container fluid class="ml-4 mr-4">
                                <v-row>
                                    <v-col cols="12" md="6">
                                        <ul>
                                            <li class="text-left">Zum Schluss müssen die EntwicklerInnen das Modell
                                                natürlich noch überprüfen. Hat es funktioniert? – Kann die KI die Klassen
                                                jetzt zuverlässig unterscheiden?</li>
                                            <li class="text-left">Dafür kannst du weitere Bilder hochladen, welche das
                                                Modell jetzt auf die Probe stellen – hält das Auto an und gewährt Vorfahrt,
                                                oder kommt es zu einem Unfall, weil sich die KI nicht 100% sicher war?</li>
                                            <li class="text-left">Gehe dafür auf Datei und lade weitere Bilder, welche zu
                                                Testzwecken dienen, hoch.</li>
                                            <li class="text-left">Spiele ein wenig mit den Einstellungen unter „erweitert“
                                                herum – was fällt auf? Kann das Modell verbessert werden?</li>
                                        </ul>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-img src="@/assets/teachable_machine_screenshot_2.png" aspect-ratio="1.3">
                                            <template v-slot:placeholder>
                                                <v-row class="fill-height ma-0" align="center" justify="center">
                                                    <v-progress-circular indeterminate color="white"></v-progress-circular>
                                                </v-row>
                                            </template>
                                        </v-img>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-expansion-panel-text>
                    </v-expansion-panel>

                    <v-expansion-panel title="Der Machine Learning Zyklus">
                        <v-expansion-panel-text>
                            <v-container fluid class="ml-4 mr-4">
                                Jetzt beginnt ...
                            </v-container>
                        </v-expansion-panel-text>
                    </v-expansion-panel>

                </v-expansion-panels>

            </template>
        </v-stepper>
    </v-container>
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
    data() {
        return {
            panel: null, // This will track the open panel. Set to the index of the panel you want open by default, or null for all closed.
        };
    },
    methods: {
        downloadMyPdf,
    },
};
</script>



<style></style>