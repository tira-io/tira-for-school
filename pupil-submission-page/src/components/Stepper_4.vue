<template>
    <v-card class="mx-auto" max-width="500" min-height="500" image="@/assets/result-fail.png" title="Deine KI war in" theme="dark">
        <v-card-text class="py-0">
            <v-row align="center" no-gutters>
                <v-col class="text-h2" style="color: red;" cols="8">75 von 100</v-col>
            </v-row>
            <br>
            Beispielen korrekt.
        </v-card-text>
    </v-card>
    <br>
    Trotzdem ist noch kein Meister vom Himmel gefallen. Eine KI wird in der Regel durch Quantitative Tests, bei denen X, und qualitative Tets, bei denen Y, getestet und kontinuierlich verbessert. Schaue doch mal in x, y, und Z, und schaue, ob du mit diesem Feedback deine KI weiter verbessern kannst.
    <br><br>

    <v-expansion-panels>
        <v-expansion-panel title="Mengen-Tests">
            <v-expansion-panel-text>
                <v-card title="Teste deine KI anhand tausender Beispiele, um die Genauigkeit zu messen" flat>
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
                            <li class="text-left">Um deine KI so oft testen zu lassen, kannst du sie hier
                                hochladen.</li>
                            <li class="text-left">Stelle sicher, dass du dein Model im richtigen Format
                                exportierst.</li>
                            <li class="text-left">Dafür musst du auf „Modell exportieren“ klicken und dann auf
                                „Tensorflow“.</li>
                            <li class="text-left"> Die Zipdatei lädst du herunter und im nächsten Schritt dann
                                hier hoch.</li>
                        </ul>

                        <File />

                    </v-container>
                </v-card>
            </v-expansion-panel-text>
        </v-expansion-panel>

        <v-expansion-panel title="Qualititative-Tests">
            <v-expansion-panel-text>
                <v-container fluid class="ml-4 mr-4">
                    <v-row align="center" justify="center">
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

<script lang="ts" setup>
import File from "./UploadFile.vue"
</script>
