<!-- npm run dev-->

<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <v-img height="300" src="@/assets/uni_leipzig_logo_v2.svg" />

      <div class="text-body-2 font-weight-light mb-n1">Welcome to Daniels first website</div>

      <h1 class="text-h2 font-weight-bold">Vuetify</h1>

      <div class="py-14" />
      
  <v-row class="d-flex align-center justify-center">

    <v-col cols="auto">
      <v-btn
        @click="openNewTab"
        variant="text"
      >
        <v-icon
          icon="mdi-information"
          size="large"
          start
        />
        Help
      </v-btn>
    </v-col>



<!--
      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <v-btn
            href="https://vuetifyjs.com/components/all/"
            min-width="164"
            rel="noopener noreferrer"
            target="_blank"
            variant="text"
          >
            <v-icon
              icon="mdi-information"
              size="large"
              start
            />

            Help
          </v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn
            color="primary"
            href="https://vuetifyjs.com/introduction/why-vuetify/#feature-guides"
            min-width="228"
            rel="noopener noreferrer"
            size="x-large"
            target="_blank"
            variant="flat"
          >
            <v-icon
              icon="mdi-speedometer"
              size="large"
              start
            />

            Get Started
          </v-btn>
        </v-col>
                <v-col cols="auto">
          <v-btn
            href="https://community.vuetifyjs.com/"
            min-width="164"
            rel="noopener noreferrer"
            target="_blank"
            variant="text"
          >
            <v-icon
              icon="mdi-account-group"
              size="large"
              start
            />

            Community
          </v-btn>
        </v-col>

        -->
        <v-col cols="auto">
    <v-btn
      @click="openDialog"
      color="primary"
      size="x-large"
      variant="flat"
    >
      <v-icon icon="mdi-speedometer" size="large" start />
      Get Started
    </v-btn>



    <v-dialog v-model="dialog" max-width="600">
      <v-card>
        <v-card-title class="headline">Pop-up Window</v-card-title>
        <v-card-text>
          <v-text-field v-model="textInput" label="Type something here"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="closeDialog" color="primary">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  
  </v-col>




      </v-row>
    </v-responsive>
  </v-container>
</template>
 

<script>
export default {
  data() {
    return {
      dialog: false,
      textInput: ''
    };
  },
  methods: {
    openNewTab() {
      window.open("https://www.youtube.com/watch?v=2uZYKcKHgU0&list=PL4cUxeGkcC9g0MQZfHwKcuB0Yswgb3gA5", "_blank");
    }
  },
    openDialog() {
      this.dialog = true;
    },
    closeDialog() {
      this.dialog = false;
    }
  };
</script>

<!--
<script lang="ts" setup>
  //
</script>
-->
