<template>
    <v-stepper :items="['Deine Aufgabe', 'Baue Deinen Datensatz', 'Trainiere Deine KI', 'Teste Deine KI']" next-text="Weiter" prev-text="Zur&Uuml;ck" :disabled="stepper_navigation_state" v-model="step">
        <template v-slot:item.1><Stepper_1/></template>

        <template v-slot:item.2 :rules="[() => false]" error="tmp"><Stepper_2 :klasse_vorfahrt_strasse="klasse_vorfahrt_strasse" :klasse_vorfahrt_gewaehren="klasse_vorfahrt_gewaehren"/></template>

        <template v-slot:item.3><Stepper_3/></template>

        <template v-slot:item.4><Stepper_4/></template>

    </v-stepper>
</template> 

<script lang="ts">
import Stepper_1 from "./Stepper_1.vue"
import Stepper_2 from "./Stepper_2.vue"
import Stepper_3 from "./Stepper_3.vue"
import Stepper_4 from "./Stepper_4.vue"

export default {
  components: {Stepper_1, Stepper_2, Stepper_3, Stepper_4},
  data: () => ({
    klasse_vorfahrt_strasse: [],
    klasse_vorfahrt_gewaehren: [],
    step: '0',
  }),
  computed: {
    stepper_navigation_state() {
        if (this.step == '2' && (this.klasse_vorfahrt_strasse.length <= 0 || this.klasse_vorfahrt_gewaehren.length <= 0)) {
            return 'next';
        }

        return false;
    }
  }
}
</script>