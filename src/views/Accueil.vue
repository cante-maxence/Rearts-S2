<template>

<h2>Découvrez réarts !</h2>
<p>
    Un site sur lequel l’imagination d’un enfant ce rencontre avec les capacitées d’un artiste !
</p>
<p class="font-bold text-Rouge">
    Un petit dessin pour lui, un grand souvenir pour vous !
</p>
<Bouton>
    <slot>S'inscrire</slot>
</Bouton>

<h3>
    Les tendances !
</h3>








</template>

<script>
import card from "/src/components/card.vue";
import Bouton from "/src/components/icones/bouton.vue";
import Menu from "/src/components/icones/menu.vue"
import Profil from "/src/components/icones/profil.vue";
import ArtistsData from '../data/artistes.json';

export default {
    components: { 
        card,
        Bouton,
        Menu,
        Profil
    },
    data: function() {
        const artists = ArtistsData.map((a) => {
            a['link'] = '/artistes/' + a.id;
            return a;
        });

        return {
            artists
        };
    }
};
</script>
