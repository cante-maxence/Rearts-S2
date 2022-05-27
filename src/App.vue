<template>
  <header class="bg-black-primary">
    <img class="w-24 h-auto" src="/images-icones/Logoblanc.svg" alt="">
    <div  class="w-max ">
      <Profil class="h-12 w-auto mr-1 inline-block fill-blanc-primary"/> 
    </div>
    
    <!-- menu -->
    <nav>
        <div  class="w-max ">
          <Menu class="h-12 w-auto mr-1 inline-block fill-blanc-primary"/>
          <div class="text-blanc-primary">
            <router-link to="/">Accueil</router-link>
            <router-link to="/Apropos">A propos</router-link>
            <router-link to="/compteArtiste">Votre Compte</router-link>
            <router-link to="/Dons">Dons</router-link>
            <router-link to="/FAQ">FAQ</router-link>
            <router-link to="/Inscription">Inscription</router-link>
            <router-link to="/Messagerie">Messagerie</router-link>
            <router-link to="/MLegal">Mentions légales</router-link>
            <router-link to="/NosArtistes">Nos Artistes</router-link>
            </div>
       </div>
    </nav>
    
  </header>

  <router-view></router-view>

  <footer>
    <section class="bg-black-primary text-blanc-primary ">
      <div class="flex items-center">
        <img class="w-28 h-auto" src="/images-icones/Logoblanc.svg" alt="">
        <h3 class="font-comfortaa font-normal text-xl">éarts</h3>
      </div>
        <p class="font-comfortaa font-normal text-lg">Nous rejoindre</p>
      <div>
        <Facebook class="fill-blanc-primary inline-block"></Facebook>
        <Instagram class="fill-blanc-primary inline-block"></Instagram>
      </div>
        <Bouton>
        <slot>S'inscrire</slot>
        </Bouton>
        <a href="./Mlegal.vue" class="font-comfortaa font-normal text-lg">Mentions légales</a>
    </section>
  </footer>
</template>


<script>
import { RouterLink, RouterView } from "vue-router";
import Facebook from "/src/components/icones/facebook.vue";
import Instagram from "/src/components/icones/instagram.vue";
import Bouton from "/src/components/icones/bouton.vue"
import Menu from "./components/icones/menu.vue";
import Profil from "./components/icones/profil.vue";
import {  } from "@heroicons/vue/outline";

export default {
  name: "App",
  components: { 
    RouterLink,
    RouterView,
    Facebook, 
    Instagram, 
    Bouton,
    Menu,
    Profil
  },
};

</script>





