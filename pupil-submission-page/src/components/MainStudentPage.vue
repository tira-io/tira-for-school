<!-- eslint-disable vue/valid-v-slot -->

<script lang="ts" setup>
import File from "./UploadFile.vue"

//import pdf from '@/assets/StudentAufgabe.pdf'
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
                    <v-card>
                        <v-card-text>
                            Dein Auftrag, für den Fall, dass du ihn annehmen willst:
                        </v-card-text>
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

</script>


<style></style>