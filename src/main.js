import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyBY9lNhK5HYYSrWLSBE_iArAgRl1bMDFbQ",
    authDomain: "mmi-test-58472.firebaseapp.com",
    projectId: "mmi-test-58472",
    storageBucket: "mmi-test-58472.appspot.com",
    messagingSenderId: "366352927490",
    appId: "1:366352927490:web:2775ca5e42d1e3879cd01b"
};


const appFirebase = initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount('#app')
