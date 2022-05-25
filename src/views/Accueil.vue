<template>
      
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

</template>

<script>

import card from "/src/components/card.vue";
import Bouton from "/src/components/icones/bouton.vue";
import Menu from "/src/components/icones/menu.vue"
import Profil from "/src/components/icones/profil.vue";

import {  } from "@heroicons/vue/outline";

export default {
  name: "App",
  components: { card, Bouton, Menu, Profil, },
};
</script>
