<template>
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
</template>

<script>

import Facebook from "../components/icones/facebook.vue";
import Instagram from "../components/icones/instagram.vue";
import Bouton from "../components/icones/bouton.vue"

import {  } from "@heroicons/vue/outline";

export default {
  name: "App",
  components: { Facebook, Instagram, Bouton },
};

</script>
