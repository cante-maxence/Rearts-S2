<template>
      <header>

      </header>
      
      
      <main class="m-5">

    <p>
      test
    </p>
    <Bouton>
      <slot>Faire un don</slot>
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
      

      
    </section>

  </main>

        <Footer>
        
      </Footer>

</template>

<script>

import { RouterLink, RouterView } from "vue-router";
import card from "./components/card.vue";
import Bouton from "./components/icones/bouton.vue";
import Menu from "./components/icones/menu.vue"
import Footer from "./components/footer.vue"
import Profil from "./components/icones/profil.vue";

import {  } from "@heroicons/vue/outline";
import Header from '../components/header.vue';

export default {
  name: "App",
  components: { card, Bouton, Menu, Profil, FooterHeader },
};
</script>
</template>