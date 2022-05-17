import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";




const appFirebase = initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount('#app')
