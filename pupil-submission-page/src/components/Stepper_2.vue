<template>
    <p>
      Zum Training deiner KI ben&ouml;tigst du einen vorbereiteten Datensatz, der Beispielbilder ihrer korrekten Klasse, also entweder "Vorfahrtsstra&szlig;e" oder "Vorfahrt gew&auml;hren" zuordnet. Speichere am besten alle bilder in zwei Ordnern entsprechend Ihrer Klasse und lade sie im folgenden hoch.
    </p>
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