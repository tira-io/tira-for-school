<script lang="ts" setup>
    import File from "./UploadFile.vue"
</script>


<template>
    <v-card class="ma-6 pa-5">
        <v-row>
            <v-col cols="12">
                <v-row>
                    <!-- Zeile 1" -->
                    <v-col cols="12">
                        <v-card>
                            <v-img height="300" src="@/assets/uni_leipzig_logo_v2.svg" />
                            <v-card-title>Willkommen auf meiner Webseite</v-card-title>
                            <v-card-text>Hier lernst du, wie man eine eigene KI trainieren kann.</v-card-text>
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
                            <File/>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-card>
</template> 


<script lang="ts">

</script>


<style></style>