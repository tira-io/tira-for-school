<template>
    <v-container>
        <ul>
          <li class="text-left">Bevor du deine KI trainieren kannst, musst du einen entsprechend gelabelten Datensatz
            vorbereitet haben.</li>
          <li class="text-left">Du benötigst also Beispielbilder, welche ihrer korrekten Klasse (entweder
            "Vorfahrtsstraße" oder "Vorfahrt gewähren") zuordnet sind</li>
          <li class="text-left">Alle Bilder deines Teams sollten dafür am besten in zwei entsprechend benannten Ordnern
            auf deinem Computer abgespeichert sein.</li>
          <br>
          <li class="text-left">Lade nun alle diese Bilder an der passenden Stelle hoch und klicke dann auf weiter.</li>
        </ul>
      </v-container>
    <upload-images-for-class
      title="Klasse: Vorfahrtsstra&szlig;e"
      description='Bitte f&uuml;ge deine Bildbeispiele f&uuml;r die Klasse Vorfahrtsstra&szlig;e hinzu.'
      :available_images='klasse_vorfahrt_strasse'
    />
    <br>
    <upload-images-for-class 
      title="Klasse: Vorfahrt Gew&auml;hren"
      description='Bitte f&uuml;ge deine Bildbeispiele f&uuml;r die Klasse Vorfahrt Gew&auml;hren hinzu.'
      :available_images='klasse_vorfahrt_gewaehren'
    />
</template>

<script lang="ts">
import UploadImagesForClass from '@/components/UploadImagesForClass.vue'

export default {
  props: ['klasse_vorfahrt_strasse', 'klasse_vorfahrt_gewaehren'],
  data: () => ({
    cols: 2
  }),
  components: {UploadImagesForClass},
}
</script>