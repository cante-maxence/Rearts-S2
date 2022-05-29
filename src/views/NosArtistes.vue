<template>
  <main class="m-5">

    <h2 class="font-raleway font-normal text-xl">Nos artistes !</h2>

    <section>
            <article v-for="artist in artists" :key="artist.id">
                <card 
                    :imagep="artist.imagep"
                    :name="artist.name"
                    :image="artist.image"
                    :text="artist.text"
                    :price="artist.price"
                    :like="artist.like"
                    :note="artist.note"
                    :link="artist.link"
                />
            </article>
    </section>

  </main>

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