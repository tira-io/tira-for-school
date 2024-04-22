<template>
  <v-container>
    <v-row>
      <v-col cols="7">
        Als erstes musst du deinen Datensatz entsprechend labeln.
        Das bedeutet, dass du deine Bilder ihrer korrekten Klasse (entweder
        "Vorfahrtsstraße" oder "Vorfahrt-gewähren") zuordnen und dem
        Computer somit die Lösung vorsagen musst, damit er mit diesen
        Trainieren kann.<br>
        Alle deine Bilder sollten dafür am besten in zwei entsprechend
        benannten Ordnern auf deinem Computer abgespeichert sein.<br>
        Falls du keine eigenen Bilder hast, kannst du <a href="javascript:void(0)" @click="downloadBackupData"> hier welche
          herunterladen</a>.
        <br>
        <br>
        Lade jetzt alle diese Bilder an der passenden Stelle hoch und klicke
        dann auf weiter, um deine KI zu trainieren.
      </v-col>
      <v-col cols="5" align="center" justify="center">
        <v-img :width="300" src="@/assets/Foto.png">
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="white"></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>
  </v-container>
  <v-container>
    <upload-images-for-class title="Klasse: Vorfahrtsstra&szlig;e"
      description='Bitte f&uuml;ge deine Bildbeispiele f&uuml;r die Klasse Vorfahrtsstra&szlig;e hinzu.'
      :available_images='klasse_vorfahrt_strasse' />
    <br>
    <upload-images-for-class title="Klasse: Vorfahrt gew&auml;hren"
      description='Bitte f&uuml;ge deine Bildbeispiele f&uuml;r die Klasse Vorfahrt Gew&auml;hren hinzu.'
      :available_images='klasse_vorfahrt_gewaehren' />
  </v-container>
</template>

<script lang="ts">
import UploadImagesForClass from '@/components/UploadImagesForClass.vue'
import backupDataPath from '@/assets/backup-data.zip';



export default {
  props: ['klasse_vorfahrt_strasse', 'klasse_vorfahrt_gewaehren'],
  data: () => ({
    cols: 2
  }),
  components: { UploadImagesForClass },
  methods: {
    downloadBackupData() {
      const link = document.createElement('a');
      link.href = backupDataPath;
      link.download = 'backup-data.zip';
      link.click();
    }
  },
}
</script>