<template>
    <v-card v-if="image_count - correct <= 10" class="mx-auto" max-width="500" min-height="500" @click="show = true;"
        image="@/assets/car_accident1.jpg" theme="dark">
        <v-card-title>
            <span class="custom-text">Deine KI war in</span>
        </v-card-title>
        <v-card-text class="py-0">
            <v-row align="center" no-gutters>
                <v-col class="text-h2" style="color: red;" cols="8">{{ correct }} von {{ image_count }}</v-col>
            </v-row>
            <br>
            <span class="custom-text">Testfällen korrekt.</span>
        </v-card-text>
    </v-card>
    <v-card v-else-if="image_count - correct <= 20" class="mx-auto" max-width="500" min-height="500" @click="show = true;"
        image="@/assets/car_accident2.jpg" theme="dark">
        <v-card-title>
            <span class="custom-text">Deine KI war in</span>
        </v-card-title>
        <v-card-text class="py-0">
            <v-row align="center" no-gutters>
                <v-col class="text-h2" style="color: red;" cols="8">{{ correct }} von {{ image_count }}</v-col>
            </v-row>
            <br>
            <span class="custom-text">Testfällen korrekt.</span>
        </v-card-text>
    </v-card>
    <v-card v-else-if="image_count - correct <= 50" class="mx-auto" max-width="500" min-height="500" @click="show = true;"
        image="@/assets/car_accident3.jpg" theme="dark">
        <v-card-title>
            <span class="custom-text">Deine KI war in</span>
        </v-card-title>
        <v-card-text class="py-0">
            <v-row align="center" no-gutters>
                <v-col class="text-h2" style="color: red;" cols="8">{{ correct }} von {{ image_count }}</v-col>
            </v-row>
            <br>
            <span class="custom-text">Testfällen korrekt.</span>
        </v-card-text>
    </v-card>
    <v-card v-else class="mx-auto" max-width="500" min-height="500" @click="show = true;" image="@/assets/car_accident4.jpg"
        theme="dark">
        <v-card-title>
            <span class="custom-text">Deine KI war in</span>
        </v-card-title>
        <v-card-text class="py-0">
            <v-row align="center" no-gutters>
                <v-col class="text-h2" style="color: red;" cols="8">{{ correct }} von {{ image_count }}</v-col>
            </v-row>
            <br>
            <span class="custom-text">Testfällen korrekt.</span>
        </v-card-text>
    </v-card>
    <v-container class="ma-3">
        <ul>
            <li class="text-left">Noch ist die KI nicht perfekt, oder würdest du schon in das selbstfahrende Auto
                einsteigen?</li>
            <li class="text-left">Eine KI wird daher in der Regel mit <strong>qualitativen</strong> und
                <strong>quantitativen</strong> Tests ausprobiert und kontinuierlich verbessert.
            </li>
            <li class="text-left">Öffne die Tabs unten und schaue, ob du mit diesem Feedback Verbesserungsvorschläge
                findest.</li>
        </ul>
        <br>
    </v-container>

    <v-expansion-panels>
        <v-expansion-panel title="Quantitative Tests">
            <v-expansion-panel-text>
                <v-container class="ma-3">
                    <ul>
                        <li class="text-left">Hier siehst du eine sogenannte <strong>Wahrheitstabelle</strong>.</li>
                        <li class="text-left">Diese zeigt dir an, wie oft deine KI welchen Fehler gemacht hat.</li>
                        <li class="text-left">Dafür wurden deiner KI haufenweise Testfälle gegeben, welche sie versucht
                            hat zu klassifizieren.</li>
                        <li class="text-left">Dabei kann es zu diesen verschiedenen Fehlern kommen.</li>
                    </ul>
                </v-container>
                <v-row>
                    <v-col cols="2"> </v-col>
                    <v-col cols="5"> <v-card flat>
                            <v-card-text align="center">Vorfahrt gewähren</v-card-text>
                        </v-card></v-col>
                    <v-col cols="5"><v-card flat>
                            <v-card-text align="center">Vorfahrtsstraße</v-card-text>
                        </v-card></v-col>
                </v-row>
                <v-row>
                    <v-col cols="2">
                        <v-card flat>
                            <v-card-text align="center">Vorhersage: <br>
                                Vorfahrt gewähren</v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="5">
                        <v-card class="mx-auto" @click="show = true;" style="width: 100%" image="@/assets/result-win.png"
                            title="Deine KI hat " theme="dark">
                            <v-card-text class="py-0">
                                <v-row align="center" no-gutters>
                                    <v-col class="text-h2" style="color: red;" cols="8">{{ true_positive_count }}</v-col>
                                </v-row>
                                <br>
                                "Vorfahrt gew&auml;hren" Schilder korrekt erkannt.
                            </v-card-text>
                        </v-card>
                    </v-col>

                    <v-col cols="5">
                        <v-card class="mx-auto" @click="show = true;" style="width: 100%" image="@/assets/result-win.png"
                            title="Deine KI hat " theme="dark">
                            <v-card-text class="py-0">
                                <v-row align="center" no-gutters>
                                    <v-col class="text-h2" style="color: red;" cols="8">{{ false_positive_count }}</v-col>
                                </v-row>
                                <br>
                                Vorfahrtsstra&szlig;e Schilder f&auml;lschlich als "Vorfahrt gew&auml;hren" erkannt.
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="2">
                        <v-card flat>
                            <v-card-text align="center">Vorhersage:<br>
                                Vorfahrtsstraße</v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="5">
                        <v-card class="mx-auto" @click="show = true;" style="width: 100%" image="@/assets/y_false.png"
                            title="Deine KI hat " theme="dark">
                            <v-card-text class="py-0">
                                <v-row align="center" no-gutters>
                                    <v-col class="text-h2" style="color: red;" cols="8">{{ false_negative_count }}</v-col>
                                </v-row>
                                <br>
                                "Vorfahrt gew&auml;hren" Schilder f&auml;lschlich als Vorfahrtsstra&szlig;e erkannt.
                            </v-card-text>
                        </v-card>
                    </v-col>

                    <v-col cols="5">
                        <v-card class="mx-auto" @click="show = true;" style="width: 100%" image="@/assets/result-win.png"
                            title="Deine KI hat " theme="dark">
                            <v-card-text class="py-0">
                                <v-row align="center" no-gutters>
                                    <v-col class="text-h2" style="color: red;" cols="8">{{ true_negative_count }}</v-col>
                                </v-row>
                                <br>
                                Vorfahrtsstra&szlig;e Schilder korrekt erkannt.
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>

                Du kannst hier zusätzlich deine KI mit denen deiner Mitschülerinnen und Mitschülern vergleichen.<br>
                Wer hat die beste KI erstellt und was macht diese besser als die anderen?
                <v-data-table :items="items" />
            </v-expansion-panel-text>
        </v-expansion-panel>

        <v-expansion-panel title="Qualititative Tests">
            <v-expansion-panel-text>
                <v-container class="ma-3">
                    <ul>
                        <li class="text-left">Hier kannst du deine KI vor besondere Chanlanges stellen.</li>
                        <li class="text-left">Lade dafür weitere Testbilder hoch, welche nicht Teil der Trainingsdaten sind.</li>
                        <li class="text-left">Nun kannst du sehen, wie sicher sich die KI bei den Klassifikationen ist.</li>
                        <li class="text-left">Bei welchen Bildern hat deine KI besondere Schwierigkeiten?</li>
                    </ul>
                </v-container>
                <upload-images-for-class class_name='Testbilder' :available_images='test_bilder'
                    @update="make_some_predictions" />

                <div v-for="test_bild in test_predictions">
                    <rendered-prediction :input_image="test_bild.src" :prediction="test_bild.prediction" />
                </div>
            </v-expansion-panel-text>
        </v-expansion-panel>

        <v-expansion-panel title="Der Machine Learning Zyklus">
            <v-expansion-panel-text>
                <v-container class="ma-3">
                    <ul>
                        <li class="text-left">Wenn du deine KI quantitativ und qualitativ getestet hast, musst du sie jetzt natürlcih verbessern.</li>
                        <li class="text-left">Gehe dafür wieder zu Schritt 2 und baue deine Verbesserungsideen in den Datensatz ein.</li>
                        <li class="text-left">Hat deine KI vielleicht ein Problem mit einer bestimmten Klasse?</li>
                        <li class="text-left">Schaffst du es in die Top 3 der KI's?</li>
                    </ul>
                </v-container>
            </v-expansion-panel-text>
        </v-expansion-panel>

    </v-expansion-panels>

    <v-dialog v-model="show" width="90%" height="90%">
        <v-card>
            <div v-for="f in selected_images">
                <rendered-prediction :input_image="f" prediction="Vorfahrtsstra&szlig;e erkannt (64%)" />
            </div>
        </v-card>
    </v-dialog>
</template>

<script lang="ts">
import UploadImagesForClass from '@/components/UploadImagesForClass.vue'
import RenderedPrediction from '@/components/RenderedPrediction.vue'
import someImage from '@/assets/result-fail.png'
import { model } from '@/training.ts'
import { label_vorfahrt_strasse, label_vorfahrt_gewaehren } from '@/datasets.ts'

export default {
    components: { UploadImagesForClass, RenderedPrediction },
    props: ['model'],
    data: () => ({
        items: [
            { 'Name': "Geheime KI", 'Korrekt': '78 von 100' },
            { 'Name': "Dagobert Duck", 'Korrekt': '76 von 100' },
            { 'Name': "Deine KI", 'Korrekt': '75 von 100' },
            { 'Name': "Maik's KI", 'Korrekt': '56 von 100' },
            { 'Name': "Luisa's KI", 'Korrekt': '34 von 100' }
        ],
        show: false,
        test_bilder: [],
        test_predictions: [],
        selected_images: [
            { 'src': someImage },
            { 'src': someImage },
            { 'src': someImage },
            { 'src': someImage },
        ]
    }),
    methods: {
        async make_some_predictions() {
            this.test_predictions = []
            for (let i of this.test_bilder) {
                this.test_predictions.push({
                    'src': i,
                    'prediction': await model.predict(i.src)
                })
            }
        }
    },
    computed: {
        image_count() {
            return this.model['categories']['correct-0-predicted-0'].length + this.model['categories']['correct-0-predicted-1'].length +
                this.model['categories']['correct-1-predicted-0'].length +
                this.model['categories']['correct-1-predicted-1'].length;
        },
        correct() {
            return this.model['categories']['correct-0-predicted-0'].length + this.model['categories']['correct-1-predicted-1'].length;
        },
        true_positive_count() {
            return this.model['categories']['correct-' + label_vorfahrt_gewaehren + '-predicted-' + label_vorfahrt_gewaehren].length
        },
        false_positive_count() {
            return this.model['categories']['correct-' + label_vorfahrt_strasse + '-predicted-' + label_vorfahrt_gewaehren].length
        },
        true_negative_count() {
            return this.model['categories']['correct-' + label_vorfahrt_strasse + '-predicted-' + label_vorfahrt_strasse].length
        },
        false_negative_count() {
            return this.model['categories']['correct-' + label_vorfahrt_gewaehren + '-predicted-' + label_vorfahrt_strasse].length
        },
    }
}
</script>

<style>
.custom-text {
    color: black;
    background-color: white;
    padding: 2px 4px;
    border-radius: 4px;
}
</style>
