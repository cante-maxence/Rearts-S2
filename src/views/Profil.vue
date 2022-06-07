<template>
    oeoeoeo
    <button @click="onDcnx()">
        Déconnexion
    </button>
</template>




<script>
// Import des fonction d'authentification
import { 
    getAuth,                        // Fonction générale d'authentification
    signInWithEmailAndPassword,     // Se connecter avec un email + mot de passe
    signOut                         // Se deconnecter
} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js'

//Import de l'emetteur depuis main.js
import { emitter } from '../main.js';

export default {
    name:'MonCompte',
    data() {
        return {
            user:{              // Utilisateur : email + mot de passe
                email : '',
                password : ''
            },
            message:null,       // Message de connexion
            view:false,         // Afficher / cacher le mot de passe
            type:'password',    // Type de champs pour le password : password / text pour l'afficher
            imageData:null,     // Image prévisualisée pour création compte
        }
    },
    mounted(){ // Montage de la vue
        this.message = "User non connecté";
    },
    methods:{
        
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
                emitter.emit('deConnectUser', { user: this.user });
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