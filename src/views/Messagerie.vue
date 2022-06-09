<template>
    <div class="container mb-56">  

        <div class="card-header">
            <h2 class="">Messagerie</h2>
        </div>    

        <div v-if="user == null">
            <h3 class="alert alert-warning text-center text-Rouge" role="alert">
                Vous devez être connecté pour utiliser le Chat !!
            </h3>
        </div>

        <div v-else>        
            <div class="mb-3">
                <div class="">
                    <p class="">Utilisateurs</p>
                </div>
                <select class="custom-select w-72 p-3 my-3 border-2 rounded-lg border-Gris_Clair" v-model="userSelected" @change="selectUser">
                    <option selected disabled value="">...</option>
                    <option
                        v-for="util in listeUsers" :key="util.uid"
                        :value="util"
                    >
                    <p class="">
                       {{util.login}} 
                    </p>
                    </option>
                </select>
            </div>

            <div v-if="userSelected != null"> 
                <form class="mb-3" @submit.prevent="createDisc()">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <p class="input-group-text">Nouveau fil avec {{userSelected.login}}</p>
                        </div>
                        <div class="flex items-center">
                            <input type="text" class="form-control border-2 border-Gris_Clair mr-3" v-model="libelle" required />
                            <Bouton type="submit" title="Création">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--fluent" width="23" height="23" preserveAspectRatio="xMidYMid meet" viewBox="0 0 28 28"><path fill="currentColor" d="M6.25 4.5A1.75 1.75 0 0 0 4.5 6.25v15.5A1.75 1.75 0 0 0 6 23.482V16.25A2.25 2.25 0 0 1 8.25 14h11.5A2.25 2.25 0 0 1 22 16.25v7.232a1.75 1.75 0 0 0 1.5-1.732V8.786c0-.465-.184-.91-.513-1.238l-2.535-2.535a1.75 1.75 0 0 0-1.238-.513H19v4.25A2.25 2.25 0 0 1 16.75 11h-6.5A2.25 2.25 0 0 1 8 8.75V4.5H6.25Zm3.25 0v4.25c0 .414.336.75.75.75h6.5a.75.75 0 0 0 .75-.75V4.5h-8Zm11 19v-7.25a.75.75 0 0 0-.75-.75H8.25a.75.75 0 0 0-.75.75v7.25h13ZM3 6.25A3.25 3.25 0 0 1 6.25 3h12.965a3.25 3.25 0 0 1 2.298.952l2.535 2.535c.61.61.952 1.437.952 2.299V21.75A3.25 3.25 0 0 1 21.75 25H6.25A3.25 3.25 0 0 1 3 21.75V6.25Z"></path></svg>
                            </Bouton> 
                        </div>
                    </div>
                </form>

                <h3 class="mt-5">Vos fils de discussion avec : {{userSelected.login}}</h3>
                <div v-if="chat.length > 0"> 
                    <table class="table text-light">
                        <tbody>
            
                            <tr v-for="disc in chat" :key="disc.uid">
                            <div class="flex">
                                <td>
                                    <p class="underline">
                                        {{disc.libelle}} 
                                    </p>   
                                <div class="flex">
                                    <p>
                                        - créé par 
                                    </p>    
                                    <p class="underline mx-1" v-if="disc.fil[0] == user.uid">
                                        vous
                                    </p>
                                    <p v-else>{{userSelected.login}}</p>
                                </div>
                                <div class="flex">
                                    <p>
                                        le 
                                    </p>
                                    <p class="underline mx-1">
                                        {{dateFr(disc.creation)}}
                                    </p>
                                </div>
                                </td>
                            </div>

                            <div class="flex mb-5">
                                <td>
                                    <Bouton class="mr-3" type="button" @click="viewFil(disc)" title="Voir ce fil">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ic" width="23" height="23" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3z"></path></svg>
                                    </Bouton>
                                    <Bouton class="" type="button" @click="deleteFil(disc)" title="Supprimer ce fil">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ion" width="23" height="23" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="none" d="M296 64h-80a7.91 7.91 0 0 0-8 8v24h96V72a7.91 7.91 0 0 0-8-8Z"></path><path fill="currentColor" d="M432 96h-96V72a40 40 0 0 0-40-40h-80a40 40 0 0 0-40 40v24H80a16 16 0 0 0 0 32h17l19 304.92c1.42 26.85 22 47.08 48 47.08h184c26.13 0 46.3-19.78 48-47l19-305h17a16 16 0 0 0 0-32ZM192.57 416H192a16 16 0 0 1-16-15.43l-8-224a16 16 0 1 1 32-1.14l8 224A16 16 0 0 1 192.57 416ZM272 400a16 16 0 0 1-32 0V176a16 16 0 0 1 32 0Zm32-304h-96V72a7.91 7.91 0 0 1 8-8h80a7.91 7.91 0 0 1 8 8Zm32 304.57A16 16 0 0 1 320 416h-.58A16 16 0 0 1 304 399.43l8-224a16 16 0 1 1 32 1.14Z"></path></svg>
                                    </Bouton>
                                </td>
                            </div>

                            </tr>
                        </tbody>
                    </table>

                </div>
                <div v-else>
                    Aucun fil de discussion
                </div>


                <hr class="h-2 my-3" />

                <div v-if="discussion != null"> 
                <div class="flex">
                    <img  class="avatar h-10 rounded-full mr-4" :src="userSelected.avatar"/>
                    <h3>{{discussion.libelle}}</h3>
                </div>

                <hr class="h-2 my-3" />

                    <div class="flex mb-3 items-end object-center justify-center">
                        <textarea class="bg-Gris_Clair rounded-xl px-4 py-2" rows="3" 
                            placeholder="Message" 
                            v-model="message"
                        ></textarea>
                        <div class="input-group-prepend ">
                            <Bouton class="ml-2" @click="sendMsg()">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--fluent" width="23" height="23" preserveAspectRatio="xMidYMid meet" viewBox="0 0 28 28"><path fill="currentColor" d="M3.79 2.773L24.86 12.85a1.25 1.25 0 0 1 0 2.256L3.79 25.183a1.25 1.25 0 0 1-1.746-1.456l2.108-7.728a.5.5 0 0 1 .415-.364l10.21-1.387a.25.25 0 0 0 .195-.15l.018-.062a.25.25 0 0 0-.157-.268l-.055-.015l-10.2-1.387a.5.5 0 0 1-.414-.364L2.044 4.23A1.25 1.25 0 0 1 3.79 2.773Z"></path></svg>
                            </Bouton>
                        </div>
                    </div>

                    <div v-for="disc in chat" :key="disc.id">

                        <div class="" v-if="disc.id == discussion.id"> 

                            <div class="mx-4" v-for="msg in sortMsgByDate(disc.msg)" :key="msg.date">

                                <div class="row mb-8" v-if="msg.by == user.uid">
                                    <div class="col-4" >
                                        <div class="flex items-center justify-end">
                                            <h3>
                                                {{userInfo[0].login}}  - {{dateFr(msg.date)}}
                                            </h3>
                                            <img  class="h-10 rounded-full ml-3" :src="userInfo[0].avatar" />
                                        </div>
                                    </div>

                                    <div class="col-8 text-center mb-1 mx-2 grid grid-cols-2"> 
                                        <div></div>
                                        <div class="bg-red_message rounded-xl p-3 my-3">                        
                                            <p>{{msg.contenu}}</p>
                                        </div>                    
                                    </div>
                                </div>



                                <div class="row mb-8" v-if="msg.by == userSelected.uid">            
                                    
                                    <div class="col-4">
                                        <div class="flex items-center">
                                                <img  class="h-10 rounded-full mr-3" :src="userSelected.avatar"/>
                                                <h3>
                                                    {{userSelected.login}} - {{dateFr(msg.date)}}
                                                </h3>
                                            </div>
                                    </div>

                                    <div class="col-8 text-center mb-1 mx-2 grid grid-cols-2"> 
                                        <div class="w-70 bg-grey_message rounded-xl col-start-1 p-3  my-3" >                        
                                            <p>{{msg.contenu}}</p>
                                        </div>                    
                                    </div>
                                </div>
                            
                            </div>
                        
                        
                        </div>

                    </div>

                </div>
            </div>
        </div>

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

// Fonction authentification
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js'

export default {
    name:'ChatView',
    components: { 
        Bouton,
    },
    data() { // Les données
        return {
            user:null,                  // User connecté
            listeUsers:[],              // Liste des utilisateurs (Firestore)
            userInfo:null,              // Informations complémentaires du user connecté
            userSelected:null,          // L'utilisateur de la liste sélectionné
            libelle:null,               // Libelle de la nouvelle discussion à créer

            chatFrom:null,              // Les chats de l'utilisataur connecté vers celui sélectionné
            chatTo:null,                // Les chats des autres utilisateurs vers celui connecté                        
            chat:[],                  // Tous les chats utilisateur connecté et sélectionné

            discussion:null,            // chat/discussion sélectionnée

            message:null                // Message courant du chat/discussion

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
                    // .catch((error)=>{
                    //     console.log('erreur downloadurl',error);
                    // })
                })

                // Récupérer les infos complémentaires du user connecté
                this.userInfo = this.listeUsers.filter(user => user.uid == this.user.uid);
//console.log("userInfo", this.userInfo);
                // Suppression du user connecté de la liste
                this.listeUsers = this.listeUsers.filter(user => user.uid != this.user.uid);
//console.log("ListeUsers", this.listeUsers);

            })
        },

        async selectUser(){
            this.message = null;
            // Obtenir Firestore
            const firestore = getFirestore();
            // Base de données concernée
            const dbChat = collection(firestore, "chat");
            // Liste des users emetteur vers recepteur
            let list1 = [this.user.uid, this.userSelected.uid];
            // Requête
            let q1 = query(dbChat, where("fil", "==", list1));
            // Liste synchronisée
            
            await onSnapshot(q1, (snapshot) => {
                this.chatFrom = snapshot.docs.map(doc => (
                    {id: doc.id, ...doc.data()}
                ))
            
                // Liste des users selectionne / connecté
                let list2 = [this.userSelected.uid, this.user.uid ];
                // Requête
                let q2 = query(dbChat, where("fil", "==", list2));
                // Liste synchronisée                
                onSnapshot(q2, (snapshot) => {
                    this.chatTo = snapshot.docs.map(doc => (
                        {id: doc.id, ...doc.data()}
                    ))

                    // Fusion des 2 chats from et to dans le chat
                    this.chat = this.chatFrom.concat(this.chatTo);
//console.log("chat", this.chat);                

                })
            
            
            
            
            
            })

        },

        // Création d'une nouvelle discussion
        createDisc(){
            // Au moins un message pour initialisation de la discussion
            let msg = {
                by: this.user.uid,                      // Créateur du message
                contenu: "Créé le "+this.dateSql(),     // Message + Date du jour
                date : this.dateSql()                   // Date de création
            };

            let discussion = {
                creation: this.dateSql(),                   // Date création de la discussion
                fil:[this.user.uid, this.userSelected.uid], // De qui vers qui : 0 : emetteur - 1: recepteur
                libelle : this.libelle,                     // Libelle de la discussion
                msg:[msg]
            };
            // Mise à jour de la collection chat
            addDoc(collection(getFirestore(), 'chat'), discussion);
        },

        // Mise en forme de la date du jour
        // en format SQL : yyyy-mm-dd HH:mm:ss
        dateSql(){
            let today = new Date();
            // Transformer en format local
            // format : dd/mm/yyyy, HH:mm:ss
            today = today.toLocaleString();
            // Mise en forme en format yyyy-mm-dd HH:mm:ss
            let tab = today.split(',');
            // récupérer seulement la partie date
            let d = tab[0];
            // récupération du jour, mois, année
            let dt = d.split('/');
            let jour = dt[0];
            let mois = dt[1];
            let annee = dt[2];
            // date en format bdd
            today = annee+"-"+mois+"-"+jour+" "+tab[1].trim();
            return today;
        },

        // Mise en forme d'un date
        // d'un format : yyyy-mm-dd HH:mm:ss
        // en format : dd/mm/yyyy à HH:mm
        dateFr(date){
            // découpage de la date
            let d = date.split(' ');
            // Récupérer la partie jour, mois, année
            let dt = d[0].split('-');
            let jour = dt[2];
            let mois = dt[1];
            let annee = dt[0];
            // récuperer la partie H:mm:ss
            let ht = d[1].split(':');
            // date en format français
            let dateMsg = jour+"/"+mois+"/"+annee+" à "+ht[0]+":"+ht[1];
            return dateMsg;
        },


        viewFil(disc){
            this.discussion = disc;
        },

        deleteFil(disc){
            deleteDoc(
                doc(getFirestore(), 'chat', disc.id)
            );
        },

        async sendMsg(){
            let msg = {
                by: this.user.uid,                      // Créateur du message
                contenu: this.message,                  // Message rédigé
                date : this.dateSql()                   // Date de création
            };

            // Rechargement de la discussion
            // Pour avoir tous les messages
            // surtout le dernier
            const firestore = getFirestore();
            const docRef = doc(firestore, "chat", this.discussion.id);
            let refDisc = await getDoc(docRef);
            let tabMsg = refDisc.data().msg;
            tabMsg.push(msg);
            // Mise à jour de la discussion
            updateDoc(
                doc(firestore, "chat", this.discussion.id),
                {
                    msg:tabMsg
                }
            );

        },

        sortMsgByDate(tabMsg){
            return tabMsg.sort(function(a,b){
                // Si la date du message a est avant celle du message b on retourne 1
                if(a.date < b.date) return 1;
                // Si la date du message a est après celle du message b on retourne -1
                if(a.date > b.date) return -1;
                // Sinon ni avant ni après on retourne 0
                return 0;
            })
        }


    }
}
</script>