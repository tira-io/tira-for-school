<template>
  <v-stepper :items="['Deine Aufgabe', 'Baue Deinen Datensatz', 'Trainiere Deine KI', 'Teste Deine KI']"
    next-text="Weiter" prev-text="Zur&Uuml;ck" v-model="step" v-if="!is_mobile">
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
    <template v-slot:actions>
      <v-stepper-actions :disabled="stepper_navigation_state" @click:next="step = Math.min(4, parseInt(step) + 1)" @click:prev="step = Math.max(1, parseInt(step) - 1)" />
    </template>
  </v-stepper>

  <v-stepper v-model="step" v-if="is_mobile">
    <v-stepper-header>
      <v-stepper-item title="Deine Aufgabe" :value="1" />
    </v-stepper-header>
    <v-stepper-window direction="vertical" v-show="step == 1">
      <v-stepper-window-item :value="1">
        <Stepper_1 />
        <div class="text-center">
          <v-row><v-col :cols="(12 - cols)/2"/><v-col :cols="cols"><v-btn @click="step = 2" color="blue" class="mt-5"
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

        <div class="text-center">
          <v-row>
            <v-col cols="6"><v-btn @click="step = 1" color="blue" class="mt-5" block>Zur&Uuml;ck</v-btn></v-col>
            <v-col cols="6"><v-btn @click="step = 3" color="blue" class="mt-5" :disabled="stepper_navigation_state == 'next'" block>Weiter</v-btn></v-col>
          </v-row>
        </div>
      </v-stepper-window-item>
    </v-stepper-window>

    <v-stepper-header>
      <v-stepper-item title="Trainiere Deine KI" :value="3" />
    </v-stepper-header>
    <v-stepper-window direction="vertical" v-show="step == 3">
      <v-stepper-window-item :value="3">
        <Stepper_3 @model-trained="modelTrained" :klasse_vorfahrt_strasse="klasse_vorfahrt_strasse"
          :klasse_vorfahrt_gewaehren="klasse_vorfahrt_gewaehren" v-if="step == 3" />

        <div class="text-center">
          <v-row>
            <v-col cols="6"><v-btn @click="step = 2" color="blue" class="mt-5" block>Zur&Uuml;ck</v-btn></v-col>
            <v-col cols="6"><v-btn @click="step = 4" color="blue" class="mt-5" :disabled="stepper_navigation_state == 'next'" block>Weiter</v-btn></v-col>
          </v-row>
        </div>
      </v-stepper-window-item>
    </v-stepper-window>

    <v-stepper-header>
      <v-stepper-item title="Teste Deine KI" :value="4" />
    </v-stepper-header>
    <v-stepper-window direction="vertical" v-show="step == 4" >
      <v-stepper-window-item :value="4">
        <Stepper_4 :model="model_in_progress" @change-step="step = $event" v-if="step == 4" />


        <div class="text-center">
          <v-row><v-col cols="3" /><v-col cols="6"><v-btn @click="step = 3" color="blue" class="mt-5"
                block>Zur&Uuml;ck</v-btn></v-col></v-row>
        </div>
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
    step: 1,
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

      if (this.step == '1') {
        return 'prev'
      }

      if (this.step == '4') {
        return 'next'
      }

      return false;
    },
    cols() {
      if (is_mobile()) {
        return 12;
      } else {
        return 8;
      }
    }
  },
  methods: {
    modelTrained(model) {
      this.model_in_progress = model
    }
  }
}
</script>