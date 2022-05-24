<template>

</template>

<script>

import { RouterLink, RouterView } from "vue-router";
import card from "./components/card.vue";
import Bouton from "./components/bouton.vue";
import Menu from "./components/icones/menu.vue"

import { MenuIcon, } from "@heroicons/vue/outline";

export default {
  name: "App",
  components: { card, Bouton, Menu },
};
</script>








<style>
@import "@/assets/base.css";

</style>
