<template>
  <header class="relative bg-black-primary flex justify-between items-center h-20 pl-4">
    <RouterLink to="/" class="py-3 flex h-full">
      <img class="w-auto h-full" src="/images-icones/Logoblanc.svg" alt="Logo du site">
    </RouterLink>

    <div class="flex pr-8 pl-5 h-full">
      <div class="pr-5 h-full flex items-center">
        <div v-if="userInfo === null">
          <RouterLink to="/Connexion">
            <Profil class="h-12 w-auto mr-2 inline-block stroke-blanc-primary"/> 
          </RouterLink>
        </div>
        <div v-if="userInfo !== null" class="relative">
          <Profil class="profil-menu h-12 w-auto mr-2 inline-block stroke-blanc-primary" @click="menus.profil = !menus.profil"/>
          <div class="bg-black-primary absolute left-1/2 transform -translate-x-1/2 text-center top-full text-blanc-primary flex flex-col justify-center w-max px-6 py-4 transition-opacity duration-500"
              :class="{ 'opacity-1 visible': menus.profil, 'opacity-0 invisible': !menus.profil }">
            <RouterLink to="/Profil">
              Profil
            </RouterLink>
            <RouterLink to="/Messagerie" class="pt-2">
              Messagerie
            </RouterLink>
            <RouterLink to="/Favoris" class="pt-2">
              Favoris
            </RouterLink>

            <button class="mt-2"
            @click="onDcnx()" >
                Deconnexion
            </button>

          </div>
        </div>
      </div>
      <div>
      <!--Début Menu-->
        <nav class="relative z-50 h-full flex items-center">
          <button aria-haspopup="true" aria-controls="menu" 
              :aria-expanded="menus.navigation" @click="menus.navigation = !menus.navigation">
              <MenuIcon class="h-12 w-12 fill-blanc-primary stroke-blanc-primary" />
          </button>

          <div id="menu" class="z-50 fixed inset-0 translate-x-full motion-safe:duration-1000 motion-safe:transition-transform
          animate-fadeInRight bg-black-primary"
              :class="{ 'translate-x-0': menus.navigation }" v-if="menus.navigation">
                <div class="flex-col text-blanc-primary text-center text-3xl my-40 ">
                  <button class="z-50 absolute top-6 right-8" aria-haspopup="true" aria-controls="menu" 
                      :aria-expanded="menus.navigation" @click="menus.navigation = !menus.navigation">
                      <svg class="absolute" v-if="!menus.navigation" width="49" height="49" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill="url(#pattern0)" d="M0 0h49v49H0z"/><defs><pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink:href="#image0_1004_881" transform="scale(.00195)"/></pattern><image id="image0_1004_881" width="512" height="512" xlink:href="data:image/png;base64,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"/></defs></svg>
                  </button>
                  
                  <button class="z-50 absolute top-6 right-8" aria-haspopup="true" aria-controls="menu" 
                      :aria-expanded="menus.navigation" @click="menus.navigation = !menus.navigation">
                      <svg class="absolute" v-if="!menus.navigation" width="35" height="35" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill="url(#pattern0)" d="M0 0h49v49H0z"/><defs><pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink:href="#image0_1004_881" transform="scale(.00195)"/></pattern><image id="image0_1004_881" width="512" height="512" xlink:href="data:image/png;base64,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"/></defs></svg>
                      
                      <croix class="m-3 fill-blanc-primary"></croix>
                      
                  </button>
                  <RouterLink to="/NosArtistes" @click="menus.navigation = !menus.navigation">
                    <div class="p-3  my-5 text-blanc-primary justify-around ">
                      <h2 class="font-medium">Nos artistes</h2> 
                    </div>
                  </RouterLink>
                  <RouterLink to="/Dons" @click="menus.navigation = !menus.navigation">
                    <div class="p-3  my-5 text-blanc-primary justify-around ">
                      <h2 class="font-medium">Dons | Associations</h2> 
                    </div>
                  </RouterLink>
                  <RouterLink to="/FAQ" @click="menus.navigation = !menus.navigation">
                    <div class="p-3 my-5 text-blanc-primary justify-around ">
                      <h2 class="font-medium">FAQ</h2> 
                    </div>
                  </RouterLink>
                  <RouterLink to="/Apropos" @click="menus.navigation = !menus.navigation">
                    <div class="p-3  my-5 text-blanc-primary justify-around ">
                      <h2 class="font-medium">A propos</h2>
                    </div>
                  </RouterLink>
                </div>
                
          </div>
        </nav>
      </div>
    </div>
  </header>


  <main class="px-6 py-6">
    <router-view></router-view>
  </main>


  <footer v-if="!['PageNotFound'].includes($route.name)">
    <section class="flex flex-col items-center text-center bg-HeadFoot text-PrincipalyText pt-4 pb-8 bg-black-primary text-blanc-primary">
      <div class="flex items-center">
        <img class="w-14 h-auto" src="/images-icones/Logoblanc.svg" alt="">
        <h3 class="font-comfortaa font-normal text-xl">éarts</h3>
      </div>
        <span class="font-comfortaa font-normal text-lg ">Nous rejoindre</span>
      <div>
        <Facebook class="fill-blanc-primary inline-block m-3 mx-3"></Facebook>
        <a href="https://www.instagram.com/rearts_fr/">
          <Instagram class="fill-blanc-primary inline-block m-3 mx-3"></Instagram>
        </a>
        <Youtube class="fill-blanc-primary inline-block m-3 mx-3"></Youtube>
      </div>
        <Bouton class=" m-3">
          <RouterLink to="/Inscription" class=" m-3">
          <slot>S'inscrire</slot>
            </RouterLink>

        </Bouton>

        <RouterLink to="/Mlegal" class=" m-3">
          <span>Mentions légales</span>
        </RouterLink>
      <div class="inline-block">
        <RouterLink to="/FAQ" class=" m-3 inline-block">
          <span>FAQ</span>
        </RouterLink>
        <span class=" m-3 inline-block">|</span>
        <RouterLink to="/Dons" class=" m-3 inline-block ">
          <span>DONS</span>
        </RouterLink>
      </div>

    </section>
  </footer>
</template>


<script>

import { RouterLink, RouterView } from "vue-router";
import Facebook from "/src/components/icones/facebook.vue";
import Instagram from "/src/components/icones/instagram.vue";
import Youtube from "/src/components/icones/youtube.vue";
import Bouton from "/src/components/icones/bouton.vue"
import MenuIcon from "./components/icones/menu.vue";
import Profil from "./components/icones/profil.vue";
import croix from "/src/components/icones/croix.vue";

// Fonctions Firestore
import { 
    getFirestore, 
    collection, 
    onSnapshot, 
    query,
    where
} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'


// Fonctions Storage
import { 
    getStorage, 
    ref, 
    getDownloadURL, 
} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js'

// Fonction authentification
import { getAuth, signOut } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js'

// Import emetteur de main.js
//import { emitter } from './main.js'

export default {
  components: { 
    RouterLink,
    RouterView,
    Facebook, 
    Instagram, 
    Youtube,
    Bouton,
    MenuIcon,
    Profil,
    croix
  },
  
  data() {
    return {
      menus: {
        profil: false,
        navigation: false
      },
      user:{              // User connecté
        email: null,
        password: null
      },
      userInfo: null,      // Informations complémentaires user connecté
      name: "Vidéo",       // Titre de l'application ou nom du user
      avatar: null,        // Avatar / image du user connecté
      isAdmin: false       // Si l'utilisateur est ou non administrateur
    }
  },
  mounted(){
    // Vérifier si un user connecté existe déjà
    // Au lancement de l'application
    this.getUserConnect();

    // Ferme le profil menu si l'on clique n'importe où
    // sauf si l'élément est sous un élément avec la class profil-menu
    document.addEventListener('click', (e) => {
      const target = e.target;
      if (!target.closest('.profil-menu')) {
        this.menus.profil = false;
      }
    });

    // Ecoute de l'évènement de connexion
    this.emitter.on('connectUser', e => {
      // Récupération du user
      this.user = e.user;
//      console.log('App => Reception user connecté', this.user);
      // Recherche infos complémentaires du user
      this.getUserInfo(this.user);      
    })        
    
    // Ecoute de l'évènement de deconnexion
    this.emitter.on('deConnectUser', e => {
      // Récupération user 
      this.user = e.user;
//      console.log('App => Reception user deconnecté', this.user);
      // Réinitialisation infos complémentaires user
      this.userInfo   = null;
      this.name       = 'Vidéo';
      this.avatar     = null;
      this.isAdmin    = false;
    })
  },
  methods:{

    // Obtenir les informations du user connecté
    async getUserConnect(){
      await getAuth().onAuthStateChanged(function(user) { 
        if(user) {
            // Récupération du user connecté
            this.user = user;
            // Recherche de ses infos complémentaires
            this.getUserInfo(this.user);   
        } 
      }.bind(this));
      // Noter le bind(this), cas des zones isolées
      // lors de 2 strucutres imbiquées, Vue perd la visibilité
      // des données
      // On les ré injecte par le mot-clef this
    },

    async getUserInfo(user){
      // Rechercher les informations complémentaires de l'utilisateur
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document participant
      const dbUsers = collection(firestore, "users");
      // Recherche du user par son uid
      const q = query(dbUsers, where("uid", "==", user.uid));
      await onSnapshot(q, (snapshot) => {
          this.userInfo = snapshot.docs.map(doc => (
            {id:doc.id, ...doc.data()}
          ));
//          console.log("userInfo", this.userInfo);                
          // userInfo étant un tableau, onn récupère
          // ses informations dans la 1° cellule du tableau : 0
          this.name = this.userInfo[0].login;
          this.isAdmin=this.userInfo[0].admin;
          // Recherche de l'image du user sur le Storage
          const storage = getStorage();
          // Référence du fichier avec son nom
          const spaceRef = ref(storage, 'users/'+this.userInfo[0].avatar);
          getDownloadURL(spaceRef)
            .then((url) => {
              this.avatar = url;
            })
            // .catch((error) =>{
            //   console.log('erreur downloadUrl', error);
            // })
        });
      },

      // Se deconnecter
        onDcnx(){
            // Se déconnecter
            signOut(getAuth())
            .then(response =>{
                // Mise à jour du message
//  console.log("user",this.user);  
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
            // .catch(error=>{
            //     console.log('erreur deconnexion ', error);
            // })
        },
    } 
}




</script>