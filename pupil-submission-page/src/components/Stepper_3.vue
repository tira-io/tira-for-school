<template>
  <v-card flat>

    <div class="text-center">
      <v-btn @click="train" color="blue" class="mt-5" :disabled="training_progress != 0">Trainiere Deine KI</v-btn>

      <br><br>
      <v-progress-circular v-if="training_progress != 0" :rotate="0" :size="175" :width="25"
        :model-value="training_progress" color="primary">
        Training: {{ training_progress }} %
      </v-progress-circular>
    </div>
    <v-expansion-panels v-if="training_progress == 0">
      <v-expansion-panel title="Erweiterte Einstellungen">
        <v-expansion-panel-text>
          <p>
            Hier kannst du dein Modell weiter verändern, um es zu verbessern.<br />
            Lasse vorerst alles so wie es ist, du kommst später nochmal zurück.
          </p>
          <v-row>
            <v-col cols="12">
              <v-text-field v-model="epochs" :rules="numberRules" label="Epochen"
                hint="Eine Epoche ist abgeschlossen, wenn jedes Beispiel im Trainingsdatenpool mindestens einmal in das Trainingsmodell eingegeben wurde. Sind deine Epochen beispielsweise auf 50 eingestellt, geht das von dir trainierte Modell den gesamten Trainingsdatenpool 50 Mal durch. Generell gilt, je gr&ouml;&szlig;er diese Zahl ist, desto besser lernt dein Modell, die Daten vorherzusagen. Wahrscheinlich solltest du diese Zahl &auml;ndern (in den meisten F&auml;llen erh&ouml;hen), bis du mit deinem Modell gute Ergebnisse bei der Vorhersage erzielst." />
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12">
              <v-text-field v-model="batch_size" :rules="numberRules" label="Batchgr&ouml;&szlig;e"
                hint="Ein Batch ist ein Satz an Beispielen, die f&uuml;r eine Trainings-Iteration verwendet werden. Wenn du beispielsweise 80 Bilder hast und als Batchgr&ouml;&szlig;e 16 w&auml;hlst, werden die Daten werden in 80/16 = 5 Batches aufgeteilt. Sobald alle f&ouml;nf Batches in das Modell eingegeben wurden, ist genau eine Epoche abgeschlossen. Diese Zahl musst du vermutlich nicht &auml;ndern, um gute Trainingsergebnisse zu erzielen." />
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12">
              <v-text-field v-model="learning_rate" :rules="numberRules" label="Lernrate"
                hint="&Auml;ndere diese Zahl nur mit gro&szlig;ter Vorsicht. Selbst kleine Unterschiede k&ouml;nnen eine gro&szlig;e Auswirkung auf die Lernf&auml;higkeit deines Modells haben." />
            </v-col>
          </v-row>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-card>
</template>

<script lang="ts">
import { create_model, model } from '@/training.ts'
import { vorfahrt_strasse_images, vorfahrt_gewaehren_images, label_vorfahrt_strasse, label_vorfahrt_gewaehren } from '@/datasets.ts'
import someImage from '@/assets/result-fail.png'
import UploadImagesForClass from '@/components/UploadImagesForClass.vue'
import RenderedPrediction from '@/components/RenderedPrediction.vue'

function Sleep(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

export default {
  props: ['klasse_vorfahrt_strasse', 'klasse_vorfahrt_gewaehren'],
  emits: ['model-trained'],
  components: { UploadImagesForClass, RenderedPrediction },
  data: () => ({
    cols: 2,
    epochs: 2,
    batch_size: 16,
    learning_rate: 0.001,
    training_progress: 0,
    test_bilder: [],
    test_predictions: [],
    numberRules: [
      value => {
        if (parseFloat(value) > 0) {
          return true
        }

        return 'bitte w&auml;hle eine Zahl gr&ouml;&szlig;er 0.'
      },
    ]
  }),
  methods: {
    async train() {
      await create_model()
      let training_data = []

      for (let epoch = 0; epoch < this.epochs; epoch++) {
        for (let class_0 of this.klasse_vorfahrt_strasse) {
          training_data.push({ 'img': class_0.src, 'label': label_vorfahrt_strasse })
        }

        for (let class_1 of this.klasse_vorfahrt_gewaehren) {
          training_data.push({ 'img': class_1.src, 'label': label_vorfahrt_gewaehren })
        }
      }

      for (let i = 0; i < training_data.length; i++) {
        await model.train(training_data[i]['img'], training_data[i]['label'])
        this.training_progress = parseInt(Math.max((i / training_data.length) * 50, 1))
        Sleep(1)
      }

      let categories = {
        'correct-0-predicted-0': [],
        'correct-0-predicted-1': [],
        'correct-1-predicted-0': [],
        'correct-1-predicted-1': [],
      }

      let c = 0
      let f = 0
      for (let i = 0; i < training_data.length; i++) {
        let prediction = await model.predict(training_data[i]['img'])
        if (training_data[i]['label'] == prediction.classIndex) {
          c += 1
        } else {
          f += 1
        }
      }

      console.log('Training finished, with Correct ' + c + ' False: ' + f)

      for (let i = 0; i < vorfahrt_strasse_images.length; i++) {
        let vorfahrt_strasse_image = vorfahrt_strasse_images[i]
        let prediction = await model.predict(vorfahrt_strasse_image)

        this.training_progress = parseInt(Math.max(((i / vorfahrt_strasse_images.length) * 25) + 50, 50))

        categories['correct-' + label_vorfahrt_strasse + '-predicted-' + prediction.classIndex].push({ 'src': vorfahrt_strasse_image })
      }

      for (let i = 0; i < vorfahrt_gewaehren_images.length; i++) {
        let vorfahrt_gewaehren_image = vorfahrt_gewaehren_images[i]
        let prediction = await model.predict(vorfahrt_gewaehren_image)
        this.training_progress = parseInt(Math.max(((i / vorfahrt_gewaehren_images.length) * 25) + 75, 75))

        categories['correct-' + label_vorfahrt_gewaehren + '-predicted-' + prediction.classIndex].push({ 'src': vorfahrt_gewaehren_image })
      }

      this.training_progress = 0
      console.log('Validation finished, with correct-0-predicted-0:' + categories['correct-0-predicted-0'].length + ' correct-0-predicted-1:' + categories['correct-0-predicted-1'].length + ' correct-1-predicted-0:' + categories['correct-1-predicted-0'].length + ' correct-1-predicted-1:' + categories['correct-1-predicted-1'].length)

      this.$emit('model-trained', { 'tmp': '1', 'model': model, 'categories': categories })
    },
    async make_some_predictions() {
      this.test_predictions = []
      console.log('fff')
      for (let i of this.test_bilder) {
        this.test_predictions.push({
          'src': i,
          'prediction': await model.predict(i)
        })
      }
    }
  },
}
</script>