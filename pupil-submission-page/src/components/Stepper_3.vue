<template>
    <v-card flat>

        <div class="text-center">
            <v-btn @click="train" color="blue" class="mt-5" :disabled="training_progress != 0">Trainiere Deine KI</v-btn>

            <br><br>
            <v-progress-circular v-if="training_progress != 0" :rotate="0" :size="175" :width="25" :model-value="training_progress" color="primary">
        Training: {{training_progress}} %
        </v-progress-circular>
        </div>
        <v-expansion-panels v-if="training_progress == 0">
            <v-expansion-panel title="Erweiterte Einstellungen">
                <v-expansion-panel-text>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field v-model="epochs" @update="updateTrainingData" :rules="numberRules" label="Epochen" hint="Eine Epoche ist abgeschlossen, wenn jedes Beispiel im Trainingsdatenpool mindestens einmal in das Trainingsmodell eingegeben wurde. Sind deine Epochen beispielsweise auf 50 eingestellt, geht das von dir trainierte Modell den gesamten Trainingsdatenpool 50 Mal durch. Generell gilt, je gr&ouml;&szlig;er diese Zahl ist, desto besser lernt dein Modell, die Daten vorherzusagen. Wahrscheinlich solltest du diese Zahl &auml;ndern (in den meisten F&auml;llen erh&ouml;hen), bis du mit deinem Modell gute Ergebnisse bei der Vorhersage erzielst."/>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12">
                            <v-text-field v-model="batch_size" @update="updateTrainingData" :rules="numberRules" label="Batchgr&ouml;&szlig;e" hint="Ein Batch ist ein Satz an Beispielen, die f&uuml;r eine Trainings-Iteration verwendet werden. Wenn du beispielsweise 80 Bilder hast und als Batchgr&ouml;&szlig;e 16 w&auml;hlst, werden die Daten werden in 80/16 = 5 Batches aufgeteilt. Sobald alle f&ouml;nf Batches in das Modell eingegeben wurden, ist genau eine Epoche abgeschlossen. Diese Zahl musst du vermutlich nicht &auml;ndern, um gute Trainingsergebnisse zu erzielen."/>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12">
                            <v-text-field v-model="learning_rate" @update="updateTrainingData" :rules="numberRules" label="Lernrate" hint="&Auml;ndere diese Zahl nur mit gro&szlig;ter Vorsicht. Selbst kleine Unterschiede k&ouml;nnen eine gro&szlig;e Auswirkung auf die Lernf&auml;higkeit deines Modells haben."/>
                        </v-col>
                    </v-row>
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>
    </v-card>
</template>

<script lang="ts">

function Sleep(milliseconds) {
return new Promise(resolve => setTimeout(resolve, milliseconds));
}

export default {
  data: () => ({
    cols: 2,
    epochs: 50,
    batch_size: 16,
    learning_rate: 0.001,
    training_progress: 0,
  }),
  methods: {
    async train() {
      for (let i=1; i< 100; i++) {
        this.training_progress = i
        await Sleep(75)
      }
      this.training_progress = 0
      this.$emit('model-trained', {'tmp': '1'})
    }
  }
}
</script>