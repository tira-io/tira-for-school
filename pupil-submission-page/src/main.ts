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

// Create a Vuetify instance with any options you want to include
const vuetify = createVuetify({
  // theme, icons, etc.
});
// Plugins
import { registerPlugins } from '@/plugins'

// Create and mount the root instance of your Vue app
const app = createApp(App)

app.use(vuetify)
registerPlugins(app)

app.mount('#app')
