<template>
  <header class="flex items-center bg-black-primary">
    <img class="w-24 h-auto" src="/images-icones/Logoblanc.svg" alt="">
    
    <!-- menu -->
    <nav>
        <div  class="w-max "><Menu class="h-12 w-auto mr-1 inline-block fill-blanc-primary"/>
       
        <RouterLink to="/">Accueil</RouterLink>
        <RouterLink to="/Apropos">A propos</RouterLink>
        <RouterLink to="/compteArtiste">Votre Compte</RouterLink>
        <RouterLink to="/Dons">Dons</RouterLink>
        <RouterLink to="/FAQ">FAQ</RouterLink>
        <RouterLink to="/Inscription">Inscription</RouterLink>
        <RouterLink to="/Messagerie">Messagerie</RouterLink>
        <RouterLink to="/MLegal">Mentions légales</RouterLink>
        <RouterLink to="/NosArtistes">Les Artistes</RouterLink>
        <RouterLink to="/PageArtiste">Page de l'artiste</RouterLink>
       </div>
    </nav>
  </header>

  <main class="m-5">

    <p>
      bgnfd
    </p>
    <Bouton>
      <slot>Faire un don</slot>
    </Bouton>
    <Bouton>
      <slot>S'inscrire</slot>
    </Bouton>
    <Bouton>
      <slot>Voir plus</slot>
    </Bouton>
    <Bouton>
      <slot>Acheter</slot>
    </Bouton>
    <Bouton>
      <slot>Offrir l'offre</slot>
    </Bouton>

    <Bouton>
      <slot>Contacter</slot>
    </Bouton>
    <Bouton>
      <slot>Visiter</slot>
    </Bouton>
    <Bouton>
      <slot>Découvrir</slot>
    </Bouton>
    <Bouton>
      <slot>Me contacter !</slot>
    </Bouton>

    <section>
      <div class="">
        <card 
              imagep="/profil-artistes/PDNerly.jpg"
              name="DNerly"
              image="/images-artistes/DNerly.jpg"
              text="Je vous fait des dessins dans le style BD des années 80 !"
              price="10€50"
              :like="true"
              note="4.2"
              />
      </div>
      
      <div class="">
        <card 
              imagep="/profil-artistes/PBbFrye.jpg"
              name="BbFrye"
              image="/images-artistes/BbFrye.jpg"
              text="Vous souhaitez un dessin 3D ? Je suis là pour vous satisfaire !"
              price="35€"
              :like="true"
              note="4.8"
              />
      </div>

      <div class="">
        <card 
              imagep="/profil-artistes/PAuster.jpg"
              name="Auster"
              image="/images-artistes/Auster.jpg"
              text="Des illustrations qui ferons vivre les personnages de vos enfants."
              price="22€"
              :like="true"
              note="3.4"
              />
      </div>

          <div class="">
        <card 
              imagep="/profil-artistes/PBeerdo.jpg"
              name="Beerdor"
              image="/images-artistes/Beerdo.jpg"
              text="Un style simpliste qui reste similaire au dessin original de votre enfant."
              price="8€"
              :like="true"
              note="4.8"
              />
      </div>

          <div class="">
        <card 
              imagep="/profil-artistes/PChillit.jpg"
              name="Chillit"
              image="/images-artistes/Chillit.jpg"
              text="Un style très coloré, qui sort du commun."
              price="25€"
              :like="true"
              note="4.2"
              />
      </div>

          <div class="">
        <card 
              imagep="/profil-artistes/PDevmind.jpg"
              name="Devmind"
              image="/images-artistes/Devmind.jpg"
              text="Des desings qui donne vie a vos dessins !"
              price="22€"
              :like="true"
              note="3.5"
              />
      </div>

          <div class="">
        <card 
              imagep="/profil-artistes/PFreshStar.jpg"
              name="FreshStar"
              image="/images-artistes/FreshStar.jpg"
              text="Des Illustrations dans mon style, rendra vos enfants plus qu’heureux."
              price="25€"
              :like="true"
              note="4.2"
              />
      </div>

              <div class="">
        <card 
              imagep="/profil-artistes/PFustish.jpg"
              name="Fustish"
              image="/images-artistes/Fustish.jpg"
              text="La nourriture préféré de vos enfant dans un style mignon !"
              price="20€"
              :like="true"
              note="2.5"
              />
      </div>

              <div class="">
        <card 
              imagep="/profil-artistes/PMalinalli.jpg"
              name="Malinalli"
              image="/images-artistes/Malinalli.jpg"
              text="Je fais vivres les personnages que vos enfants ont créé."
              price="15€"
              :like="true"
              note="3.4"
              />
      </div>

              <div class="">
        <card 
              imagep="/profil-artistes/POlemer.jpg"
              name="Olemer"
              image="/images-artistes/Olemer.jpg"
              text="Dessin papier scané, ou envoie physique !"
              price="12€50"
              :like="true"
              note="4.1"
              />
      </div>

                  <div class="">
        <card 
              imagep="/profil-artistes/PPulsh.jpg"
              name="Pulsh"
              image="/images-artistes/Pulsh.jpg"
              text="Je fais des petits monstres mignons que vos enfants ont imaginez !"
              price="15€"
              :like="true"
              note="4.2"
              />
      </div>

                  <div class="">
        <card 
              imagep="/profil-artistes/PRaceCars.jpg"
              name="RaceCars"
              image="/images-artistes/RaceCars.jpg"
              text="Des illustrations qui donnes vie les voitures."
              price="31€"
              :like="true"
              note="2.8"
              />
      </div>

      
    </section>

  </main>

  <footer>

  </footer>
</template>

<script>

import { RouterLink, RouterView } from "vue-router";
import card from "./components/card.vue";
import Bouton from "./components/icones/bouton.vue";
import Menu from "./components/icones/menu.vue"

import {  } from "@heroicons/vue/outline";

export default {
  name: "App",
  components: { card, Bouton, Menu },
};
</script>




