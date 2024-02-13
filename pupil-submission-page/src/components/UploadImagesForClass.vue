<template>
    <v-card color="blue" variant="tonal">
        <template v-slot:title>
            Klasse: {{class_name}}
        </template>
        <template v-slot:text>
            
        <v-row><v-col cols="6"> 
        <v-file-input accept="image/png, image/jpeg, image/bmp" placeholder="Bitte f&uuml;ge deine Bildbeispiele f&uuml;r die Klasse {{class_name}} hinzu:" multiple :label="'Bitte f&uuml;ge deine Bildbeispiele f&uuml;r die Klasse ' + class_name + ' hinzu:'" v-model="to_upload" @change="update_files" block/>
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
            <v-btn @click="available_images=null">Auswahl L&ouml;schen</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script lang="ts">
export default {
  props: ['class_name', 'available_images'],
  data: () => ({
    to_upload: null,
    cols: 2
  }),
  computed: {
    image_rows() {
      if (!this.available_images) {
        return []
      }

      let ret = []
      let current_batch = []

      for (let file of this.available_images) {
        if (current_batch.length < 11) {
            current_batch.push(file)
        } else {
            ret.push(current_batch)
            current_batch = [file]
        }
      }

      if (current_batch.length > 0) {
            ret.push(current_batch)
      }
      
      return ret;
    },
  },
  methods: {
    update_files(files) {
        for (let file of this.to_upload) {
            this.available_images.push({'src': URL.createObjectURL(file), 'file': file})
        }

        this.to_upload = null
    }
  }
}
</script>