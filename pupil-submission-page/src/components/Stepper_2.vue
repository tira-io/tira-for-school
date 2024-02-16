<template>
  <v-container>
    <v-row>
      <v-col cols="8">
        <ul>
          <li class="text-left">
            Nun musst du deinen Datensatz entsprechend labeln.
          </li>
          <li class="text-left">
            Das bedeutet, dass du deine Bilder ihrer korrekten Klasse (entweder
            "Vorfahrtsstraße" oder "Vorfahrt gewähren") zuordnen und dem
            Computer somit die Lösung vorsagen musst, damit er mit diesen
            Trainieren kann.
          </li>
          <li class="text-left">
            Alle deine Bilder sollten dafür am besten in zwei entsprechend
            benannten Ordnern auf deinem Computer abgespeichert sein.
          </li>
        </ul>
      </v-col>
      <v-col cols="4">
        <v-img src="@/assets/TaskBild.png">
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="white"></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>
    <br />
    <ul>
      <li class="text-left">
        Lade jetzt alle diese Bilder an der passenden Stelle hoch und klicke
        dann auf weiter.
      </li>
    </ul>
  </v-container>
  <upload-images-for-class title="Klasse: Vorfahrtsstra&szlig;e"
    description='Bitte f&uuml;ge deine Bildbeispiele f&uuml;r die Klasse Vorfahrtsstra&szlig;e hinzu.'
    :available_images='klasse_vorfahrt_strasse' />
  <br>
  <upload-images-for-class title="Klasse: Vorfahrt Gew&auml;hren"
    description='Bitte f&uuml;ge deine Bildbeispiele f&uuml;r die Klasse Vorfahrt Gew&auml;hren hinzu.'
    :available_images='klasse_vorfahrt_gewaehren' />
</template>

<script lang="ts">
import UploadImagesForClass from '@/components/UploadImagesForClass.vue'

export default {
  props: ['klasse_vorfahrt_strasse', 'klasse_vorfahrt_gewaehren'],
  data: () => ({
    cols: 2
  }),
  components: { UploadImagesForClass },
}
</script>