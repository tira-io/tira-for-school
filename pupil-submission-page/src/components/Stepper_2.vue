<template>
    <p>
      Zum Training deiner KI ben&ouml;tigst du einen vorbereiteten Datensatz. Der Beispielbilder der korrekten Klasse, also entweder "Vorfahrtsstra&szlig;e" oder "Vorfahrt gew&auml;hren" zuordnet. Speichere am besten alle bilder, in zwei Ordnern entsprechend Ihrer Klasse und lade sie im folgenden hoch.
    </p>

    <v-card color="blue" variant="tonal">
        <template v-slot:title>
            Klasse: Vorfahrtsstra&szlig;e
        </template>
        <template v-slot:text>
            
        <v-row><v-col cols="6"> 
        <v-file-input accept="image/png, image/jpeg, image/bmp" placeholder="Bitte f&uuml;ge deine Bildbeispiele f&uuml;r die Klasse Vorfahrtsstra&szlig;e hinzu:" multiple label="Bitte f&uuml;ge deine Bildbeispiele f&uuml;r die Klasse Vorfahrtsstra&szlig;e hinzu:" v-model="klasse_vorfahrt_strasse" block/>
        </v-col></v-row>
            <v-virtual-scroll height="150" :items="image_rows">
                <template v-slot:default="{ item }">
                    <v-row  style="width: 98%">
                        <v-col :cols="cols" v-for="image in item">
                            <v-hover v-slot="{ isHovering, props }">
                                  <v-img :src="image.src" v-bind="props">
                                  <v-btn v-if="isHovering" variant="text" icon="mdi-delete">Delete</v-btn>
                                  
                                  </v-img>
                            </v-hover>
                        </v-col>
                    </v-row>
                </template>

                
            </v-virtual-scroll>
        </template>

        <v-card-actions>
            <v-btn @click="klasse_vorfahrt_strasse=null">Auswahl L&ouml;schen</v-btn>
        </v-card-actions>
    </v-card>


    <v-card flat>
        <v-container class="ml-4 mr-4">
            <ul>
                <li class="text-left">Bevor du beginnen kannst, musst du einen entsprechend gelabelten Datensatz
                    vorbereitet haben.</li>
                <li class="text-left">Alle Bilder deines Teams sollten in zwei Ordnern auf deinem Computer
                    abgespeichert sein.</li>
                <li class="text-left">Öffne die Webseite <a href="https://teachablemachine.withgoogle.com"
                        target="_blank">https://teachablemachine.withgoogle.com</a></li>
                <li class="text-left">Klicke auf „Erste Schritte“</li>
                <li class="text-left">Wenn du dein Projekt gerade beginnst, dann klicke auf Bildprojekt, um ein
                    neues Projekt zu erstellen. Ansonsten öffne ein bestehendes Projekt aus einer Datei. (Wir
                    erstellen ein Modell mit Standardbildern.)</li>
                <li class="text-left">Erlaube der Webseite nicht auf deine Webcam zuzugreifen und lade nur
                    Bilder hoch, welche du selbst erstellt hast oder welche eine entsprechende Lizenz haben.
                    (Datenschutz)</li>
            </ul>
        </v-container>
    </v-card>
</template>


<script lang="ts">
export default {
  data: () => ({
    klasse_vorfahrt_strasse: null,
    cols: 2
  }),
  computed: {
    image_rows() {
      if (!this.klasse_vorfahrt_strasse) {
        return []
      }
      let ret = []

      for (let file of this.klasse_vorfahrt_strasse) {
        ret.push({'src': URL.createObjectURL(file), 'id': 'tmp'})
        
      }
      
      return [ret];
    },
  }
}
</script>