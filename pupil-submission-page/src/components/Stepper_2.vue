<template>
    <p>
      Zum Training deiner KI ben&ouml;tigst du einen vorbereiteten Datensatz, der Beispielbilder ihrer korrekten Klasse, also entweder "Vorfahrtsstra&szlig;e" oder "Vorfahrt gew&auml;hren" zuordnet. Speichere am besten alle bilder in zwei Ordnern entsprechend Ihrer Klasse und lade sie im folgenden hoch.
    </p>
    <upload-images-for-class class_name='Vorfahrtsstra&szlig;e' :available_images='klasse_vorfahrt_strasse'/>
    <br>
    <upload-images-for-class class_name='Vorfahrt Gew&auml;ren' :available_images='klasse_vorfahrt_gewaehren'/>
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