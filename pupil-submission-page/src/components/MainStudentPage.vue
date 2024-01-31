<script lang="ts" setup>
import Stepper_1 from "./Stepper_1.vue"
import Stepper_2 from "./Stepper_2.vue"
import Stepper_3 from "./Stepper_3.vue"
import Stepper_4 from "./Stepper_4.vue"
</script>

<!-- eslint-disable vue/valid-v-slot -->
<template>
    <v-container>
        <v-stepper :items="['Deine Aufgabe', 'Baue Deinen Datensatz', 'Trainiere Deine KI', 'Teste Deine KI']">
            <template v-slot:item.1>
                <Stepper_1/>
            </template>

            <template v-slot:item.2>
                <Stepper_2/>
            </template>

            <template v-slot:item.3>
                <Stepper_3/>
            </template>

            <template v-slot:item.4>
                <Stepper_4/>
            </template>

        </v-stepper>
    </v-container>
</template> 

<style></style>