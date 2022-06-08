<template>

    <Bouton
    @click="onDcnx()" >
        Deconnexion
    </Bouton>

<p>Nom d'Utilisateur</p>
{{ prof.login }}
<img :src="prof.avatar" alt="" class="rounded-full">

<div>
    <h1>Bio</h1>
{{ prof.bio }}
</div>

<div>
    <h1>Compétences</h1>
{{ prof.comp1 }}
{{ prof.comp2 }}
{{ prof.comp3 }}
{{ prof.comp4 }}
</div>


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
    signOut                         // Se deconnecter
} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js'

//Import de l'emetteur depuis main.js
//import { emitter } from '../main.js';

export default {
    name:'MonCompte',
    components: {
        Bouton,
    },
    data() {
        return {
            //listeProfil:[], // Liste des participants
            user:{
                    email:"",
                    uid:""
                },
            message:null,
            prof:{},
            
        }
    },

    mounted(){
            let user = getAuth().currentUser;
            if (user){
                this.user = user;
                this.message = "Utilisateur connecté " + this.user.uid;
                this.getProfil(this.user.uid);
            }else{
                this.message = "Utilisateur non connecté";
                
            }
        },

    methods: {
        async getProfil(id){
            // Obtenir Firestore
            const firestore = getFirestore();
            // Base de données (collection)  document profil
            // Récupération sur Firestore du profil via son id
            const docRef = doc(firestore, "profil", id);
            // Référence du profil concerné
            this.refProfil = await getDoc(docRef);
            // Test si le profil demandé existe
            if(this.refProfil.exists()){
                // Si oui on récupère ses données
                this.prof = this.refProfil.data();
                // Mémorisation photoActuelle
            }else{
                // Sinon simple message d'erreur
                this.console.log("Participant inexistant");
            }
            // Obtenir le Storage
            const storage = getStorage();
            // Référence de l'image du participant
            const spaceRef = ref(storage, 'users/'+this.prof.avatar);
            
            // Récupération de l'url complète de l'image
            getDownloadURL(spaceRef)
                .then((url) => {
                    // Mise à jour de l'image prévisualisée
                    this.prof.avatar = url;
            })
            .catch((error) =>{
                console.log('erreur downloadUrl', error);
            })

            console.log(this.user)
        },


        // Se deconnecter
        onDcnx(){
            // Se déconnecter
            signOut(getAuth())
            .then(response =>{
                // Mise à jour du message
console.log("user",this.user);  
                this.message = "User non connecté";
                this.$router.push('/Connexion')
                // Ré initialisation des champs
                this.user = {
                    email:null,
                    password:null
                };
                // Emission évènement de déconnexion
                this.emitter.emit('deConnectUser', { user: this.user });
            })
            .catch(error=>{
                console.log('erreur deconnexion ', error);
            })
        },
        // Affiche/masque le champs password
        affiche(){
            this.view = !this.view;
            if(this.view)   {this.type = 'text'; }
            else            {this.type = 'password'; }
        },
     
            
        },
    }


    



</script>