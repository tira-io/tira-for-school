<template>
  <v-card color="blue" variant="tonal">
    <template v-slot:title>
      {{ title }}
    </template>
    <template v-slot:text>
      <v-row><v-col cols="6">
          <v-file-input accept="image/png, image/jpeg, image/bmp" :placeholder="description" multiple
            :label="description" v-model="to_upload" @change="update_files" block />
        </v-col></v-row>
      <v-virtual-scroll height="150" :items="image_rows">
        <template v-slot:default="{ item }">
          <v-row style="width: 98%">
            <v-col :cols="cols" v-for="image in item" :key="image.id">
              <v-hover v-slot="{ isHovering, props }">
                <v-img :src="image.src" v-bind="props">
                  <v-btn v-if="isHovering" variant="text" icon="mdi-delete" @click="deleteImage(image.id)">
                    Delete
                  </v-btn>
                </v-img>
              </v-hover>
            </v-col>
          </v-row>
        </template>
      </v-virtual-scroll>
    </template>

    <v-card-actions>
      <v-btn @click="clean">Alle L&ouml;schen</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
export default {
  props: ['title', 'description', 'available_images'],
  emits: ['update'],
  data: () => ({
    to_upload: null,
    cols: 2,
  }),
  computed: {
    image_rows() {
      if (!this.available_images) {
        return [];
      }

      let ret = [];
      let current_batch = [];

      for (let file of this.available_images) {
        if (current_batch.length < 11) {
          current_batch.push(file);
        } else {
          ret.push(current_batch);
          current_batch = [file];
        }
      }

      if (current_batch.length > 0) {
        ret.push(current_batch);
      }

      return ret;
    },
  },
  methods: {
    uniqueId() {
      const timestamp = Date.now();
      const random = Math.floor(Math.random() * 1000);
      return `${timestamp}-${random}`;
    },
    update_files(files) {
      for (let file of this.to_upload) {
        const imageId = this.uniqueId();
        this.available_images.push({ id: imageId, src: URL.createObjectURL(file), file: file });
      }

      this.to_upload = [];
      this.$emit('update');
    },
    deleteImage(imageId) {
      const index = this.available_images.findIndex((image) => image.id === imageId);

      if (index !== -1) {
        this.available_images.splice(index, 1);
        this.$emit('update');
      }
    },
    clean() {
      this.to_upload = [];

      for (let i = 1; i < 1000; i++) {
        this.available_images.pop();
      }

      this.update_files();
    },
  },
};
</script>
