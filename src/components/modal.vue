<template>
    <div>
    <v-row justify="center">
      <v-dialog
        v-model="dialog"
        fullscreen
        :scrim="false"
        transition="dialog-bottom-transition"
      >
          <template v-slot:activator="{ props }">
          <span
            
            v-bind="props"
          >
            <img src="data:image/jpeg;base64,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">
     
        </span>
        </template>
        <v-card>
          <v-toolbar
            dark
            color="primary"
          >
            <v-btn
              icon
              dark
              @click="dialog = false"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Settings</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn
                variant="text"
                @click="dialog = false"
              >
                Save
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <v-list
            lines="two"
            subheader
          >
           
          </v-list>
          <v-divider></v-divider>
          <v-list
            lines="two"
            subheader
          >

          <dat2/>
            </v-list>
        </v-card>
      </v-dialog>
    </v-row>
</div>
  </template>
  <script>
  import dat2 from '../components/data2.vue'
    export default {
      components:{
           dat2
      },
      data () {
        return {
          dialog: false,
          notifications: false,
          sound: true,
          widgets: false,
        }
      },
    }
  </script>
  <style>
  .dialog-bottom-transition-enter-active,
  .dialog-bottom-transition-leave-active {
    transition: transform .2s ease-in-out;
  }
  </style>