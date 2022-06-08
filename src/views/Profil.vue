<template>
    <main>
        <div class="flex items-center justify-center">
            <img :src="prof.avatar" alt="" class="rounded-full h-40 border-2 border-black-primary relative">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--bi absolute top-60 left-auto" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="currentColor" d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793L14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5L3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"></path></svg>
        </div>

        <h2>{{ prof.login }}</h2>


        <Star class="h-auto w-5 mr-1 inline-block fill-star-color" />
        <p class="text-star-color font-comfortaa font-medium text-base inline-block">
                {{ prof.note }}
        </p>


        <RouterLink to="/Messagerie">
            <Bouton>
                Me contacter !
            </Bouton>
        </RouterLink>
            
            <Bouton
            @click="onDcnx()" >
                Deconnexion
            </Bouton>
        
        
        
        <div class="border-2 border-Gris_Clair px-3 pb-3 mt-6">
            <h3>Bio</h3>

            <p>{{ prof.bio }}</p>
        </div>
        
        <div class="border-2 border-Gris_Clair px-3 pb-3 mt-6">
            <h3>Compétences</h3>
            <div class="flex mt-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ic mr-2" width="30" height="30" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg>
                <p>{{ prof.comp1 }}</p>
            </div>
            <div class="flex mt-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ic mr-2" width="30" height="30" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg>
                <p>{{ prof.comp2 }}</p>
            </div>
            <div class="flex mt-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ic mr-2" width="30" height="30" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg>
                <p>{{ prof.comp3 }}</p>
            </div>
            <div class="flex mt-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ic mr-2" width="30" height="30" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg>
                <p>{{ prof.comp4 }}</p>
            </div>
        </div>
        
        <div class="border-2 border-Gris_Clair px-3 pb-3 mt-6">
            <h3>Services</h3>
            <div class="flex items-center">
                <img :src="prof.img1" alt="" class="border-2 border-Gris_Clair h-36 w-auto">
                <img :src="prof.img2" alt="" class="border-2 border-Gris_Clair h-28 w-auto m-6">
            </div>
            <div class="flex items-center">
                <img :src="prof.img3" alt="" class="border-2 border-Gris_Clair h-36 w-auto">
                <img :src="prof.img4" alt="" class="border-2 border-Gris_Clair h-28 w-auto m-6">
            </div>
        </div>

    </main>

</template>




<script>
import Bouton from "/src/components/icones/bouton.vue";
import Star from '/src/components/icones/star.vue';

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
        Star,
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
            const spaceRef1 = ref(storage, 'img1/'+this.prof.img1);
            const spaceRef2 = ref(storage, 'img2/'+this.prof.img2);
            const spaceRef3 = ref(storage, 'img3/'+this.prof.img3);
            const spaceRef4 = ref(storage, 'img4/'+this.prof.img4);
            // Récupération de l'url complète de l'image
            getDownloadURL(spaceRef)
                .then((url) => {
                    // Mise à jour de l'image prévisualisée
                    this.prof.avatar = url;
            })
            getDownloadURL(spaceRef1)
                .then((url) => {
                    // Mise à jour de l'image prévisualisée
                    this.prof.img1 = url;
            })
            getDownloadURL(spaceRef2)
                .then((url) => {
                    // Mise à jour de l'image prévisualisée
                    this.prof.img2 = url;
            })
            getDownloadURL(spaceRef3)
                .then((url) => {
                    // Mise à jour de l'image prévisualisée
                    this.prof.img3 = url;
            })
            getDownloadURL(spaceRef4)
                .then((url) => {
                    // Mise à jour de l'image prévisualisée
                    this.prof.img4 = url;
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