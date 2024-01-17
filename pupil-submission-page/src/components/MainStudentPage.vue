<script lang="ts" setup>
import File from "./UploadFile.vue"

</script>

<!-- eslint-disable vue/valid-v-slot -->
<template>
    <v-container>
        <v-stepper :items="['Willkommen', 'Übersicht', 'Bilder', 'KI entwickeln', 'KI testen', 'KI hochladen']">
            <template v-slot:item.1>
                <v-card title="Willkommen!" flat>
                    <v-card>
                        <p>
                            Auf dieser Webseite lernst du, wie man Daten für eine KI sammelt und diese selbst trainieren
                            kann.
                        </p>
                    </v-card>
                </v-card>
            </template>

            <template v-slot:item.2>
                <v-card title="Übersicht aller Aufgaben" flat>
                    <a href="#" @click.prevent="downloadMyPdf">
                        <v-img src="@/assets/Aufgabe.png" aspect-ratio="2.75">
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
                        <!-- Optionally, you can keep the button for better accessibility -->
                        <v-btn @click="downloadMyPdf" color="blue"> Download PDF </v-btn>
                    </v-card>
                </v-card>
            </template>

            <template v-slot:item.3>
                <v-card title="Teachable Machine" flat>
                    <v-container class="ml-4 mr-4">
                        <ol>
                            <li class="text-left">Bereite alles vor. Alle Bilder eures Teams sollten in zwei Ordnern auf
                                deinem Computer abgespeichert sein.</li>
                            <li class="text-left">Öffne die Webseite <a href="https://teachablemachine.withgoogle.com"
                                    target="_blank">https://teachablemachine.withgoogle.com</a></li>
                            <li class="text-left">Klicke auf „Erste Schritte“</li>
                            <li class="text-left">Wenn du dein Projekt gerade beginnst, dann klicke auf Bildprojekt, um ein
                                neues Projekt zu erstellen. Ansonsten öffne ein bestehendes Projekt aus einer Datei. (Wir
                                erstellen ein Modell mit Standardbildern.)</li>
                            <li class="text-left">Erlaube der Webseite nicht auf deine Webcam zuzugreifen und lade nur
                                Bilder hoch, welche du selbst erstellt hast oder welche eine entsprechende Lizenz haben.
                                (Datenschutz)</li>
                        </ol>
                    </v-container>
                </v-card>
            </template>

            <template v-slot:item.4>
                <v-card title="Tira" flat>
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

            <template v-slot:item.5>
                <v-card title="Tira" flat>
                    <v-container class="ml-4 mr-4">
                        <v-img src="@/assets/teachable_machine_screenshot_2.png" aspect-ratio="2.75">
                            <template v-slot:placeholder>
                                <v-row class="fill-height ma-0" align="center" justify="center">
                                    <v-progress-circular indeterminate color="white"></v-progress-circular>
                                </v-row>
                            </template>
                        </v-img>
                        <p> <br> </p>
                        <ul>
                            <li class="text-left">Zum Schluss müssen die EntwicklerInnen das Modell natürlich noch
                                überprüfen. Hat es funktioniert? – Kann die KI die Klassen jetzt zuverlässig unterscheiden?
                            </li>
                            <li class="text-left">Dafür kannst du weitere Bilder hochladen, welche das Modell jetzt auf die
                                Probe stellen – hält das Auto an und gewährt Vorfahrt, oder kommt es zu einem Unfall, weil
                                sich die KI nicht 100% sicher war?</li>
                            <li class="text-left">Gehe dafür auf Datei und lade weitere Bilder, welche zu Testzwecken
                                dienen, hoch.</li>
                            <li class="text-left">Spiele ein wenig mit den Einstellungen unter „erweitert“ herum – was fällt
                                auf? Kann das Modell verbessert werden?</li>
                        </ul>
                    </v-container>
                </v-card>
            </template>

            <template v-slot:item.6>
                <v-card title="Lade hier deine KI hoch" flat>
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
                            <li class="text-left">Dafür musst du auf „Modell exportieren“ klicken und dann auf „Tensorflow“.
                                Die Zipdatei lädst du herunter und im nächsten Schritt dann hier hoch.</li>
                        </ul>

                        <File />

                    </v-container>
                </v-card>
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

// Expose the method to the template
export { downloadMyPdf };
</script>


<style></style>