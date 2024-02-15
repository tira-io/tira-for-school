/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue';

// Composables
import { createApp } from 'vue';
import { createVuetify } from 'vuetify'
import 'vuetify/styles' // Import Vuetify styles
import router from './router'
import { useDisplay } from 'vuetify'

export function is_mobile() {
    const { mobile } = useDisplay()
    return mobile.value
}

// Create a Vuetify instance with any options you want to include
const vuetify = createVuetify({
  // theme, icons, etc.
});


// Create and mount the root instance of your Vue app
const app = createApp(App)

app.use(vuetify)
app.use(router)

app.mount('#app')
