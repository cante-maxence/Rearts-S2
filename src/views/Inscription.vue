<template>
  <main>
    <form @submit.prevent="onInscr">
      <input v-model="user.email" type="email" placeholder="Adresse e-mail">
      <input v-model="user.password" type="password" placeholder="Mot de passe">
      <button type="submit">S'inscrire</button>
    </form>
  </main>
</template>




<script>

// Import des fonction d'authentification
import { 
    getAuth,                        // Fonction générale d'authentification
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,     // Se connecter avec un email + mot de passe
    signOut                         // Se deconnecter
} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js'


export default {
  data() {
        return {
            user:{              // Utilisateur : email + mot de passe
                email : '',
                password : ''
            },
        }
  },
  methods: {

    onInscr() {
      createUserWithEmailAndPassword(getAuth(), this.user.email, this.user.password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }
  }
}


</script>