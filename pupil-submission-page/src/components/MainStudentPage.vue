<template>
  <v-stepper :items="['Deine Aufgabe', 'Baue Deinen Datensatz', 'Trainiere Deine KI', 'Teste Deine KI']"
    next-text="Weiter" prev-text="Zur&Uuml;ck" :disabled="stepper_navigation_state" v-model="step" v-if="!is_mobile">
    <template v-slot:item.1>
      <Stepper_1 />
    </template>

    <template v-slot:item.2 :rules="[() => false]" error="tmp">
      <Stepper_2 :klasse_vorfahrt_strasse="klasse_vorfahrt_strasse"
        :klasse_vorfahrt_gewaehren="klasse_vorfahrt_gewaehren" />
    </template>

    <template v-slot:item.3>
      <Stepper_3 @model-trained="modelTrained" :klasse_vorfahrt_strasse="klasse_vorfahrt_strasse"
        :klasse_vorfahrt_gewaehren="klasse_vorfahrt_gewaehren" />
    </template>

    <template v-slot:item.4>
      <Stepper_4 :model="model_in_progress" @change-step="step = $event" />
    </template>
  </v-stepper>

  <v-stepper v-model="step" v-if="is_mobile">
    <v-stepper-header>
      <v-stepper-item title="Deine Aufgabe" :value="1" />
    </v-stepper-header>
    <v-stepper-window direction="vertical" v-show="step == 0">
      <v-stepper-window-item :value="1">
        <Stepper_1 />
        <div class="text-center">
          <v-row><v-col cols="4" /><v-col cols="4"><v-btn @click="step = 2" color="blue" class="mt-5"
                block>Weiter</v-btn></v-col></v-row>
        </div>
      </v-stepper-window-item>
    </v-stepper-window>

    <v-stepper-header>
      <v-stepper-item title="Baue Deinen Datensatz" :value="2" />
    </v-stepper-header>
    <v-stepper-window direction="vertical" v-show="step == 2">
      <v-stepper-window-item :value="2">
        <Stepper_2 :klasse_vorfahrt_strasse="klasse_vorfahrt_strasse"
          :klasse_vorfahrt_gewaehren="klasse_vorfahrt_gewaehren" />
      </v-stepper-window-item>
    </v-stepper-window>

    <v-stepper-header>
      <v-stepper-item title="Trainiere Deine KI" :value="3" />
    </v-stepper-header>
    <v-stepper-window direction="vertical" v-show="step == 3">
      <v-stepper-window-item :value="2">
        <Stepper_3 @model-trained="modelTrained" :klasse_vorfahrt_strasse="klasse_vorfahrt_strasse"
          :klasse_vorfahrt_gewaehren="klasse_vorfahrt_gewaehren" />
      </v-stepper-window-item>
    </v-stepper-window>

    <v-stepper-header>
      <v-stepper-item title="Teste Deine KI" :value="4" />
    </v-stepper-header>
    <v-stepper-window direction="vertical" v-show="step == 2">
      <v-stepper-window-item :value="2">
        <Stepper_4 :model="model_in_progress" />
      </v-stepper-window-item>
    </v-stepper-window>
  </v-stepper>
</template> 

<script lang="ts">
import Stepper_1 from "./Stepper_1.vue"
import Stepper_2 from "./Stepper_2.vue"
import Stepper_3 from "./Stepper_3.vue"
import Stepper_4 from "./Stepper_4.vue"
import { is_mobile } from "@/main";


export default {
  components: { Stepper_1, Stepper_2, Stepper_3, Stepper_4 },
  data: () => ({
    klasse_vorfahrt_strasse: [],
    klasse_vorfahrt_gewaehren: [],
    step: '0',
    model_in_progress: null,
    is_mobile: is_mobile(),
  }),
  computed: {
    stepper_navigation_state() {
      if (this.step == '2' && (this.klasse_vorfahrt_strasse.length <= 0 || this.klasse_vorfahrt_gewaehren.length <= 0)) {
        return 'next'
      }

      if (this.step == '3' && !this.model_in_progress) {
        return 'next'
      }

      return false;
    }
  },
  methods: {
    modelTrained(model) {
      this.model_in_progress = model
    }
  }
}
</script>