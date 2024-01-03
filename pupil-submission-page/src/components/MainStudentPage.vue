<script lang="ts" setup>
import File from "./UploadFile.vue"

//import pdf from '@/assets/StudentAufgabe.pdf'
</script>


<template>
    <v-row>
        <v-col cols="12">
            <v-row>
                <v-col cols="12">
                    <v-card>
                        <p class="font-weight-black">
                            Willkommen!
                        </p>
                        <p class="font-weight-medium">
                            Auf dieser Webseite lernst du, wie man Daten für eine KI sammelt und diese selbst trainieren
                            kann.
                        </p>
                        <p>
                            Die Bilder solltest du als Hausaufgabe bereits gesammelt haben oder du lädst dir jetzt schnell
                            welche herunter.
                        </p>
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <!-- Zeile zwei -->
                <v-col cols="12" md="6">
                    <v-card class="flex-grow-1">
                        <v-card-title>Übersicht Aufgaben</v-card-title>
                        <v-card-text>
                            Dein Auftrag, für den Fall, dass du ihn annehmen willst:
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" md="6">
                    <v-card class="flex-grow-1">
                        <v-card-title>Lade hier deine KI hoch</v-card-title>
                        <v-card-text>
                            hochladen - dafür musst du es erst herunterladen und abspeichern.
                        </v-card-text>
                        <File />
                    </v-card>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template> 


<script lang="ts">

</script>


<style></style>