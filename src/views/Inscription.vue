<template>
  <main>
    <h2>
      Inscription
    </h2>
    <form class="text-center mb-32" @submit.prevent="onInscr()">
      <input class="border-2 border-Gris_Clair p-2 m-3  rounded-lg" v-model="user.email" type="email" placeholder="Adresse e-mail">
      <input class="border-2 border-Gris_Clair p-2 m-3  rounded-lg" v-model="user.password" type="password" placeholder="Mot de passe">
      <input class="border-2 border-Gris_Clair p-2 m-3  rounded-lg" v-model="profil.login" type="text" placeholder="Nom d'utilisateur (login)">

      <div class="flex justify-center">
        <Bouton class="mx-3 my-3" type="submit">
          <slot>S'inscrire</slot>
        </Bouton>
      </div>

    </form>
  </main>
</template>




<script>
import Bouton from "/src/components/icones/bouton.vue";

// Bibliothèque Firestore : import des fonctions
import { 
    getFirestore,   // Obtenir le Firestore
    collection,     // Utiliser une collection de documents
    doc,            // Obtenir un document par son id
    getDoc,        // Obtenir un document d'une collection
    addDoc,         // Ajouter un document à une collection
    updateDoc,      // Mettre à jour un document dans une collection
    deleteDoc,      // Supprimer un document d'une collection
    onSnapshot,     // Demander une liste de documents d'une collection, en les synchronisant
    query,          // Permet d'effectuer des requêtes sur Firestore
    orderBy,        // Permet de demander le tri d'une requête query
    where           // Permet de demander un filtrage pour une query
    } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'

    // Cloud Storage : import des fonctions
    import { 
        getStorage,             // Obtenir le Cloud Storage
        ref,                    // Pour créer une référence à un fichier à uploader
        getDownloadURL         // Permet de récupérer l'adress complète d'un fichier du Storage
    } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js'


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
                password : '',
                uid: ''
            },
            profil:{
                avatar: '',
                admin: '',
                bio: '',
                login: '',
                comp1: '',
                comp2: '',
                comp3: '',
                comp4: '',
                img1: '',
                img2: '',
                img3: '',
                img4: '',
                note: '',
                uid:""
            }
        }
  },

  components: { 
      Bouton,
  },


  methods: {

    mounted(){
            
            this.user = user;
            this.message = "Utilisateur connecté " + this.user.uid;
   
            },
        

    onInscr() {
      createUserWithEmailAndPassword(getAuth(), this.user.email, this.user.password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // const db = getFirestore();
          // const docRef = addDoc(collection(db, 'profil').doc(user.uid), this.profil)
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });

      const db = getFirestore();
      const docRef = addDoc(collection(db, 'profil'), this.profil);
       this.$router.push('/'); 
    }
  }
}


</script>