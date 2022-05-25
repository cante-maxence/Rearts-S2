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
            <RouterLink to="/">Accueil</RouterLink>
            <RouterLink to="/Apropos">A propos</RouterLink>
            <RouterLink to="/compteArtiste">Votre Compte</RouterLink>
            <RouterLink to="/Dons">Dons</RouterLink>
            <RouterLink to="/FAQ">FAQ</RouterLink>
            <RouterLink to="/Inscription">Inscription</RouterLink>
            <RouterLink to="/Messagerie">Messagerie</RouterLink>
            <RouterLink to="/MLegal">Mentions légales</RouterLink>
            <RouterLink to="/NosArtistes">Nos Artistes</RouterLink>
            <RouterLink to="/PageArtiste">Page de l'artiste</RouterLink>
            </div>
       </div>
    </nav>
    
  </header>
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
  components: { Facebook, Instagram, Bouton, Menu, Profil },
};

</script>





