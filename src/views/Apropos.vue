<template>
    <main>
        <h2>A propos</h2>

        <p>
            L'apparition de "Réarts" à débuté en janvier 2022, par 3 étudiants en BUT MMI à Montbéliard. <br> <br>
            Maxence Cante, Léopold Ohnimus, et Rose Menegain ont créé ce site web pour offrir de nouveaux souvenirs aux enfants. <br> <br>
            Dans cet univers, les dessins d'enfants prendront donc vie avec l'un des styles particuliers de nos artistes présents sur le site.
            Les trois fondateurs de Réarts ont donc mis leurs compétences à profit pour vous satisfaire.
        </p>

        <h3 class="pt-10">
            N'hésitez pas à nous rejoindre sur les réseaux sociaux !
        </h3>

        <h3 class="pt-10 -mb-14">
            Contactez-nous en cas de problèmes
        </h3>

        <div class="h-96 -mt-14"></div>
        <div class="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
            <div class="bg-Gris_Clair w-full shadow rounded p-6 sm:p-12 -mt-72">
                <form @submit.prevent="handleSubmit()">
                    <div class="md:flex items-center">
                        <div class="w-full md:w-1/2 flex flex-col">
                            <label class="font-comfortaa text-base font-semibold text-black-primary">Email</label>
                            <input v-model="contact.email" type="email" class="font-comfortaa text-black-primary p-3 focus:outline-none focus:border-Rouge mt-4 border-2 border-Gris_Francanglais rounded bg-Gris_Francanglais" />
                        </div>
                    </div>
                    <div class="md:flex items-center mt-6">
                        <div class="w-full flex flex-col">
                            <label class="font-comfortaa text-base font-semibold text-black-primary">Objet</label>
                            <input v-model="contact.objet" type="text" class="font-comfortaa text-black-primary p-3 focus:outline-none focus:border-Rouge mt-4 border-2 border-Gris_Francanglais rounded bg-Gris_Francanglais"/>
                        </div>
                        
                    </div>
                    <div>
                        <div class="w-full flex flex-col mt-6">
                            <label class="font-comfortaa text-base font-semibold text-black-primary">Message</label>
                            <textarea v-model="contact.message" type="text" class="h-40 text-base font-comfortaa text-black-primary p-3 focus:outline-none focus:border-Rouge border-2 border-Gris_Francanglais rounded bg-Gris_Francanglais"></textarea>
                        </div>
                    </div>
                    <div class="flex items-center justify-center w-full">
                        <button type="submit">
                        <Bouton class="mt-6  focus:ring-2 focus:ring-offset-1 focus:ring-red-900 focus:outline-none">
                            Envoyer
                        </Bouton>
                        </button>
                    </div>
                </form>
            </div>
        </div>
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
    signOut                         // Se deconnecter
} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js'

export default {
    components: {
        Bouton,

    },
    data() {
        return {
            contact:{
                email:null,
                objet:null,
                message:null
            }
        }
    },



    methods: {
        async handleSubmit() {

            const db = getFirestore();
            const docRef = addDoc(collection(db, 'contact'), this.contact);
            this.$router.push('/'); 
        }
    }
}

</script>
