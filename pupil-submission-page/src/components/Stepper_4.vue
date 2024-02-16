<template>
    <v-card class="mx-auto" max-width="500" min-height="500" @click="show = true;" image="@/assets/result-fail.png"
        title="Deine KI war in" theme="dark">
        <v-card-text class="py-0">
            <v-row align="center" no-gutters>
                <v-col class="text-h2" style="color: red;" cols="8">{{ correct }} von {{ image_count }}</v-col>
            </v-row>
            <br>
            Beispielen korrekt.
        </v-card-text>
    </v-card>
    <br>
    Trotzdem ist noch kein Meister vom Himmel gefallen. Eine KI wird in der Regel durch Quantitative Tests, bei denen X, und
    qualitative Tets, bei denen Y, getestet und kontinuierlich verbessert. Schaue doch mal in x, y, und Z, und schaue, ob du
    mit diesem Feedback deine KI weiter verbessern kannst.
    <br><br>

    <v-expansion-panels>
        <v-expansion-panel title="Quantitative Tests">
            <v-expansion-panel-text>
                Hier etwas text (eine ganz einfache Darstellung eine Konfusion Matrix, mit guten Bildern, etc.)...

                <v-row>
                    <v-col cols="6">
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

                    <v-col cols="6">
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
                    <v-col cols="6">
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

                    <v-col cols="6">
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

                Vergleiche deine KI doch mal mit anderen:
                <v-data-table :items="items" />
            </v-expansion-panel-text>
        </v-expansion-panel>

        <v-expansion-panel title="Qualititative Tests">
            <v-expansion-panel-text>
                Bitte lade hier deine Testbilder hoch, mit denen du deine KI Qualitativ austesten moechtest.
                <upload-images-for-class class_name='Testbilder' :available_images='test_bilder'
                    @update="make_some_predictions" />

                <div v-for="test_bild in test_predictions">
                    <rendered-prediction :input_image="test_bild.src" :prediction="test_bild.prediction" />
                </div>
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
