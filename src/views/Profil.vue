<template>

    <Bouton
    @click="onDcnx()" >
        Deconnexion
    </Bouton>

{{ this.userInfo }}

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
            listeUsers:[],
            userInfo:{
                id:'',
            },
            user:null,              // Utilisateur : email + mot de passe
            
            message:null,       // Message de connexion
            // view:false,         // Afficher / cacher le mot de passe
            // type:'password',    // Type de champs pour le password : password / text pour l'afficher
            // imageData:null,     // Image prévisualisée pour création compte
        }
    },
    mounted(){ // Montage de la vue
        
        // Appel de la liste des users (Firestore)
        this.getUsers(); 
    },

    methods : { // Les fonctions
        // obtenir les utilisateurs de users
        async getUsers(){
            // Obtenir les inofrmations du user connecté
            await getAuth().onAuthStateChanged(function(user){
                if(user){
                    // Récupération du user connecté
                    this.user = user;
                }
            }.bind(this))

            // Informations des users de Firestore
            const firestore = getFirestore();
            // Collection users de Firestore
            const dbUsers = collection(firestore, "users");
            // Users triés sur leur login
            const q = query(dbUsers, orderBy('login', 'asc'));
            // Liste synchronisée
            await onSnapshot(q, (snapshot) => {
                this.listeUsers = snapshot.docs.map(doc => (
                    {id:doc.id, ...doc.data()}
                ))
                // Récupération de l'url des avatars
                this.listeUsers.forEach(function(user){
                    // Obtenir le Cloud Storage
                    const storage = getStorage();
                    // Récupérer l'image par son nom de fichier
                    const spaceRef = ref(storage, "users/"+user.avatar);
                    // Récupération de l'url
                    getDownloadURL(spaceRef)
                    .then((url)=>{
                        // Remplacer le nom du fichier par l'url
                        user.avatar = url;
                    })
                    .catch((error)=>{
                        console.log('erreur downloadurl',error);
                    })
                })

                // Récupérer les infos complémentaires du user connecté
                this.userInfo = this.listeUsers.filter(user => user.uid == this.user.uid);
console.log("userInfo", this.userInfo);

            })
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